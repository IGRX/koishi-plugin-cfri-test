import { Context, Schema} from 'koishi'

export interface Config { }

export const Config: Schema<Config> = Schema.object({})

export function get_info_status(ctx: Context) {

  ctx.command('cfr', '可获取当前状态，由cfri-test插件提供', { authority: 1 })
  .action(async ({session}) => {
    session?.execute('cfr -h')
  })
  ctx.command('cfr.id', '获取用户ID', { authority: 1 })
  .action(async ({session}) => {
    try {
      session.send('用户ID: ' + session.event.user.id)
      session.send('\nTracker信息:\n当前指令监听器Event为： ' + session.type + '\n来自用户：' + session.username)//新增debug用信息
    } catch (error) {
      session.send('获取用户ID失败，请联系频道主')
    }
  })
  ctx.command('cfr.all', '获取所有状态信息', { authority: 1 })//你妈，一个主指令里只能注册一个子指令，我还以为可以多个呢，如果用subcommand的话，那么这个子指令不会被注册，因为前面已经有一个.id子指令了，还是用这种方法注册吧
  .action(async ({session}) => {
    try {
      session.send('平台名: ' + session.event.platform + '\n'
      + '消息ID: ' + session.event.message.id + '\n'
      + '频道ID: ' + session.event.channel.id + '\n'
      + '群组ID: ' + session.guildId + '\n'
      + '用户ID: ' + session.event.user.id + '\n'
      + '事件自身ID: ' + session.selfId
      + '\n此状态来自于cfri-test插件')
      session.send('\nTracker信息:\n当前指令触发事件为： ' + session.type + '\n来自用户：' + session.username)//新增debug用信息
    } catch (error) {
      session.send('获取状态信息失败，请联系频道主')
    }
  })
  try {
    console.log(ctx.broadcast('cfrbot已启动'))
  } catch (error) { 
    ctx.broadcast('cfrbot启动出错，请联系频道主')
  }
}