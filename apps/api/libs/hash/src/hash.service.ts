import type { BinaryLike } from 'node:crypto'
import { createHash, pbkdf2Sync, randomBytes } from 'node:crypto'
import { Inject, Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { sm2 } from 'sm-crypto'
import { v4 as uuidv4 } from 'uuid'
// import {
//   MODULE_OPTIONS_TOKEN,
//   HashModuleOptions,
// } from "./hash.module-defintion";

@Injectable()
export class HashService {
  constructor(
    // @Inject("MODULE_OPTIONS_TOKEN") private options: HashModuleOptions,
    @Inject(ConfigService) private readonly config: ConfigService,
  ) { }

  /**
   * 加密
   * @param data 待加密的数据
   * @returns 加密后的数据
   */
  sm2Encrypt(data: string) {
    return sm2.doEncrypt(data, this.config.getOrThrow('SM2_PUBLIC_KEY'))
  }

  /**
   * 解密
   * @param data 加密后的数据
   * @returns 解密后的数据
   */
  sm2Decrypt(data: string) {
    return sm2.doDecrypt(data, this.config.getOrThrow('SM2_PRIVATE_KEY'))
  }

  private readonly secret: string
  // 使用MD5哈希算法
  public md5(data: BinaryLike): string {
    return createHash('md5')
      .update(String(data as string))
      .digest('hex')
  }

  // 使用SHA1哈希算法
  public sha1(data: BinaryLike): string {
    return createHash('sha1')
      .update(String(data as string))
      .digest('hex')
  }

  // 使用PBKDF2加密密码
  public cryptoPassword(password: BinaryLike) {
    const salt = randomBytes(16).toString('hex')
    const iterations = 1000
    const keyLength = 64
    const hash = pbkdf2Sync(
      `password=${String(password as string)}&SECRET_KEY=${this.secret}`,
      salt,
      iterations,
      keyLength,
      'sha512',
    ).toString('hex')
    return { salt, hash } // 返回迭代次数以便验证
  }

  // 验证密码
  public verifyPassword(
    password: BinaryLike,
    salt: string,
    storedHash: string,
  ): boolean {
    const iterations = 1000
    const keyLength = 64
    const hash = pbkdf2Sync(
      `password=${String(password as string)}&SECRET_KEY=${this.secret}`,
      salt,
      iterations,
      keyLength,
      'sha512',
    ).toString('hex')
    return hash === storedHash
  }

  // 生成唯一标识符
  public createUid(): string {
    return uuidv4().replaceAll('-', '')
  }

  public createRandNumberCode(length: number) {
    return Array.from({ length }).fill('0').map(() => Math.floor(Math.random() * 10)).join('')
  }
}
