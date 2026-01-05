import { cancel, isCancel, select } from '@clack/prompts'
// 导入必要的依赖
import { execaCommand, getPackages } from '@internal/pkg-utils'
import { cac } from 'cac'

try {
  // 创建命令行工具实例
  const turboRun = cac('turbo-run')

  // 配置主命令
  turboRun
    .command('[script]')
    .usage(`Run turbo interactively.`)
    .action(async (command: string, rest) => {
      // 检查是否提供了脚本名称
      if (!command) {
        console.error('Please provide a script name.')
        process.exit(1)
      }

      // 获取所有包信息
      const { packages } = await getPackages()

      // 过滤出包含指定命令的包
      const selectPkgs = packages.filter((pkg) => {
        return (pkg?.packageJson as Record<string, any>)?.scripts?.[command]
      })

      let selectPkg: string | symbol

      // 如果有多个包含指定命令的包，让用户选择
      if (selectPkgs.length > 1) {
        selectPkg = await select<any>({
          message: `Select the app you need to run [${command}]:`,
          options: selectPkgs.map((item) => ({
            label: item?.packageJson.name,
            value: item?.packageJson.name,
          })),
        })

        // 处理用户取消选择的情况
        if (isCancel(selectPkg) || !selectPkg) {
          cancel('👋 Has cancelled')
          process.exit(0)
        }
      } else {
        // 如果只有一个包，直接使用
        selectPkg = selectPkgs[0]?.packageJson?.name ?? ''
      }

      // 检查是否找到可用的包
      if (!selectPkg) {
        console.error('No app found')
        process.exit(1)
      }

      // 计算其他参数
      const params = rest['--']
      let paramStr = ''
      for (const param of params) {
        const [key, value] = param.split('=')
        paramStr += ` --${key}`
        if (value) paramStr += ` ${value}`
      }
      const trueCommand = `pnpm --filter=${selectPkg.toString()} run ${command}${paramStr}`
      console.log(trueCommand)
      // 执行命令
      execaCommand(trueCommand, {
        stdio: 'inherit',
      })
    })

  // 处理无效命令
  turboRun.on('command:*', () => {
    console.log('Invalid command!')
    process.exit(1)
  })

  // 设置使用说明和帮助信息
  turboRun.usage('turbo-run')
  turboRun.help()
  turboRun.parse()
} catch (error) {
  // 错误处理
  console.log(error)
  process.exit(1)
}
