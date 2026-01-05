import type { Buffer } from 'node:buffer'
import type { MakeDirectoryOptions } from 'node:fs'
import {
  access,
  createReadStream,

  mkdir,
  readdir,
  readFile,
  rmdir,
  statSync,
  unlink,
  writeFile,
} from 'node:fs'
import { join } from 'node:path'
import { cwd } from 'node:process'
import { Inject, Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

class FileAction {
  constructor(
    private readonly PublicPath: string,
    private readonly fileService: FileService,
  ) {}

  /**
   * 获取文件路径
   * @param id 文件ID
   * @returns 文件路径
   */
  public getPath(id: string) {
    return join(this.PublicPath, id)
  }

  /**
   * 写入文件
   * @param id 文件ID
   * @param content 文件内容
   * @returns 文件路径
   */
  public writeFile(id: string, content: string | Buffer) {
    const path = this.getPath(id)
    this.fileService.createWithDefaultContent(path, content)
    return path
  }

  /**
   * 获取文件内容
   * @param id 文件ID
   * @returns 文件内容
   */
  public getFile(id: string) {
    return this.fileService.getFile(this.getPath(id))
  }

  /**
   * 获取文件目录
   * @returns 文件目录
   */
  public getDir() {
    return this.PublicPath
  }

  /**
   *
   * @param id 文件ID
   * @returns 文件流
   */
  public async getStream(id: string) {
    const exist = await this.fileService.exists(this.getPath(id))
    if (!exist) return null
    return createReadStream(this.getPath(id))
  }
}
@Injectable()
export class FileService {
  constructor(@Inject(ConfigService) private readonly configService: ConfigService) {}

  public static readonly Root = cwd()
  private readonly Assets = join(FileService.Root, 'assets')
  public media = new FileAction(this.makeAssets('files'), this)
  public website = new FileAction(this.makeAssets('website'), this)
  public makeAssets(path: string, basePath = this.Assets) {
    const s = join(basePath, path)
    this.exists(s).then((exist) => {
      if (!exist) {
        this.mkdir(s, { recursive: true })
      }
    })
    return s
  }

  /**
   * 检查文件是否存在
   * @param path 文件路径
   * @returns 是否存在
   */
  public async exists(path: string) {
    return new Promise<boolean>((resolve) => {
      access(path, (err) => {
        resolve(!err)
      })
    })
  }

  /**
   * 写入文件
   * @param path 文件路径
   * @param content 文件内容
   * @returns 文件路径
   */
  public async write(path: string, content: string | Buffer) {
    const exist = await this.exists(path)
    if (!exist) {
      const directory = join(path, '..')
      if (!(await this.exists(directory))) {
        this.mkdir(directory, { recursive: true })
      }
    }
    return await new Promise((resolve, reject) => {
      writeFile(path, content, (err) => {
        if (err) {
          console.error(`写入文件 ${path} 失败`, err)
          reject(err)
        } else {
          resolve(path)
        }
      })
    })
  }

  /**
   * 创建文件夹
   * @param path 文件夹路径
   * @returns 文件夹路径
   */
  public async mkdir(
    path: string,
    options?: MakeDirectoryOptions & {
      recursive: true
    },
  ) {
    const exist = await this.exists(path)
    if (!exist) {
      return await new Promise((resolve, reject) => {
        mkdir(path, options, (err) => {
          if (err) {
            console.error(`创建文件夹 ${path} 失败`, err)
            reject(err)
          } else {
            resolve(path)
          }
        })
      })
    }
    return path
  }

  /**
   * 删除文件
   * @param path 文件路径
   * @returns 文件路径
   */
  public async unlink(path: string) {
    const exist = await this.exists(path)
    if (!exist) return
    return await new Promise((resolve, reject) => {
      unlink(path, (err) => {
        if (err) {
          console.error(`删除文件 ${path} 失败`, err)
          reject(err)
        } else {
          resolve(path)
        }
      })
    })
  }

  /**
   * 删除文件夹
   * @param path 文件夹路径
   * @returns 文件夹路径
   */
  public async rmdir(path: string) {
    const exist = await this.exists(path)
    if (!exist) return
    return await new Promise((resolve, reject) => {
      rmdir(path, { recursive: true }, (err) => {
        if (err) {
          console.error(`删除文件夹 ${path} 失败`, err)
          reject(err)
        } else {
          resolve(path)
        }
      })
    })
  }

  /**
   * 获取文件内容
   * @param path 文件路径
   * @param maxSize 最大文件大小
   * @returns 文件内容
   */
  public async getFile(path: string, maxSize?: number) {
    const MAX_FILE_SIZE
      = maxSize || this.configService.get<number>('MAX_FILE_SIZE') || 10 * 1024 * 1024
    const exist = await this.exists(path)
    if (!exist) return null
    const stats = statSync(path)
    if (stats.size > MAX_FILE_SIZE) {
      throw new Error(`文件大小超过最大限制 ${MAX_FILE_SIZE} 字节`)
    }
    return await new Promise((resolve, reject) => {
      readFile(path, (err, data) => {
        if (err) {
          console.error(`读取文件 ${path} 失败`, err)
          reject(err)
        } else {
          resolve(data)
        }
      })
    })
  }

  /**
   * 创建文件并填充默认内容
   * @param path 文件路径
   * @param defaultValue 默认内容
   * @returns 文件路径
   */
  public async createWithDefaultContent(
    path: string,
    defaultValue: string | Buffer,
  ): Promise<string> {
    const exist = await this.exists(path)
    if (!exist) {
      // 确保目录存在
      const directory = join(path, '..')
      if (!(await this.exists(directory))) {
        await this.mkdir(directory, { recursive: true })
      }
      // 写入默认内容
      await this.write(path, defaultValue)
    }
    return path
  }

  /**
   * 读取目录内容
   * @param path 目录路径
   * @returns 目录内容
   */
  public async readdir(path: string) {
    return await new Promise<string[]>((resolve, reject) => {
      readdir(path, (err, files) => {
        if (err) {
          console.error(`读取目录 ${path} 失败`, err)
          reject(err)
        } else {
          resolve(files)
        }
      })
    })
  }
}
