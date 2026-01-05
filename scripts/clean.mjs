import { readdirSync, rm } from 'node:fs'
import { join } from 'node:path'

// 递归清理指定目录下的目标文件夹
const recursiveCleanDirectories = (directoryPath, targetDirs) => {
  try {
    const entries = readdirSync(directoryPath)

    for (const entry of entries) {
      const fullPath = join(directoryPath, entry)

      if (targetDirs.includes(entry)) {
        // 如果是目标文件夹，直接删除
        rm(fullPath, { recursive: true, force: true }, (err) => {
          if (err) {
            console.error(`删除目录时发生错误: ${fullPath}`, err)
          } else {
            console.log(`删除目录: ${fullPath}`)
          }
        })
        continue
      }

      // 递归处理子目录
      recursiveCleanDirectories(fullPath, targetDirs)
    }
  } catch (err) {
    // 忽略访问权限错误等
    if (err.code !== 'ENOTDIR') {
      console.error(`处理目录时发生错误: ${directoryPath}`, err)
    }
  }
}

// 主函数
(() => {
  const directoriesToClean = ['node_modules', 'dist', '.turbo', 'bun.lock', 'pnpm-lock.yaml']
  console.log('开始清理目录...')
  console.log(`需要清理的目录: ${directoriesToClean.join(', ')}`)

  try {
    recursiveCleanDirectories(process.cwd(), directoriesToClean)
    console.log('清理完成!')
  } catch (error) {
    console.error('清理文件夹时发生错误:', error)
    process.exit(1)
  }
})()
