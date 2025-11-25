import { Injectable } from '@nestjs/common';
import {
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  rmdirSync,
  unlinkSync,
  writeFileSync,
} from 'fs';
import { join } from 'path';
import { cwd } from 'process';
@Injectable()
export class FileService {
  /**
   * 创建文件并填充默认内容
   * @param path 文件路径
   * @param defaultValue 默认内容
   * @returns 文件路径
   */
  public createWithDefaultContent(
    path: string,
    defaultValue: string | Buffer,
  ): string {
    if (!existsSync(path)) {
      // 确保目录存在
      const directory = join(path, '..');
      if (!existsSync(directory)) {
        mkdirSync(directory, { recursive: true });
      }
      // 写入默认内容
      writeFileSync(path, defaultValue);
    }
    return path;
  }
  public readFile(path: string) {
    if (!existsSync(path)) return null;
    return readFileSync(path);
  }
  public static readonly Root = cwd();
  private readonly Assets = join(FileService.Root, 'assets');
  private readonly PublicPath = join(FileService.Root, 'public');
  public makeAssets(path: string, basePath = this.Assets) {
    const s = join(basePath, path);
    if (!existsSync(s)) {
      mkdirSync(s, { recursive: true });
    }
    return s;
  }
  public static getSSLKey() {
    return readFileSync(join(this.Root, 'keys', 'ssh.key'));
  }
  public static getSSLPem() {
    return readFileSync(join(this.Root, 'keys', 'ssh.pem'));
  }
  public getCert() {
    return join(this.Assets, 'cert');
  }

  // publicKey: fs.readFileSync('./apiclient_cert.pem'), // 公钥
  // privateKey: fs.readFileSync('./apiclient_key.pem'), // 秘钥
  public getPublicKey() {
    return readFileSync(join(this.getCert(), 'apiclient_cert.pem'));
  }
  public getPrivateKey() {
    return readFileSync(join(this.getCert(), 'apiclient_key.pem'));
  }
  public getFile(path: string, defaultValue?: string) {
    if (existsSync(path)) return readFileSync(path);
    return defaultValue;
  }
  public unlink(path: string) {
    if (!existsSync(path)) return;
    return unlinkSync(path);
  }
  public rmdir(path: string) {
    if (!existsSync(path)) return;
    return rmdirSync(path, { recursive: true });
  }
  public write(path: string, content: string | Buffer) {
    if (!existsSync(path)) {
      const directory = join(path, '..');
      if (!existsSync(directory)) {
        mkdirSync(directory, { recursive: true });
      }
    }
    return writeFileSync(path, content);
  }
  /**
   * 归档目录路径
   */
  public archiveDir = this.makeAssets('archive');

  /**
   * 获取归档文件路径
   * @param id 文件ID
   * @returns 完整的zip文件路径
   */
  public getArchivePath(id: string) {
    return join(this.archiveDir, `${id}.zip`);
  }

  /**
   * 写入归档文件
   * @param id 文件ID
   * @param content 文件内容
   */
  public writeArchiveFile(id: string, content: string | Buffer) {
    return this.write(this.getArchivePath(id), content);
  }

  /**
   * 读取归档文件
   * @param id 文件ID
   * @returns 文件内容
   */
  public getArchiveFile(id: string) {
    return this.getFile(this.getArchivePath(id));
  }

  //job
  public jobDir = this.makeAssets('job');
  public getJobDir(id: string) {
    return join(this.jobDir, id);
  }
  public getJobFile(id: string, name: string) {
    return join(this.getJobDir(id), name);
  }
  public writeJobFile(id: string, name: string, content: string | Buffer) {
    return this.write(this.getJobFile(id, name), content);
  }
  public getJobFiles(id: string) {
    const path = this.getJobDir(id);
    if (!existsSync(path)) return [];
    return readdirSync(path);
  }

  public mediaDir = this.makeAssets('media');
  public getMediaDir(id: string) {
    return join(this.mediaDir, id);
  }
  public getMediaPath(id: string) {
    return join(this.getMediaDir(id));
  }
  public getMediaFile(id: string) {
    return readFileSync(this.getMediaPath(id));
  }
  public writeMediaFile(id: string, content: string | Buffer) {
    return this.write(this.getMediaPath(id), content);
  }

  public FontDirRoot = this.makeAssets('fonts', this.PublicPath);
  /**
   * 获取所有字体名称（不含.ttf后缀）
   */
  public getFonts() {
    return readdirSync(this.FontDirRoot)
      .filter((file) => file.endsWith('.ttf'))
      .map((file) => file.replace('.ttf', ''));
  }

  /**
   * 根据字体名称获取完整路径（自动添加.ttf后缀）
   */
  public getFontPath(name: string) {
    return join(this.FontDirRoot, `${name}.ttf`);
  }
}
