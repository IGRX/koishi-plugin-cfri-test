import { Context, Schema } from 'koishi'

export const name = 'cfr-test'

export interface Config {}

export const Config: Schema<Config> = Schema.object({})

export function apply(ctx: Context) {

  ctx.command('cfr','获取当前状态，由cfri-test插件提供', { authority: 1 })
  .action(async ({session}) => {
    return session.text('平台名: '+ session.event.platform + '\n'
    + '消息ID: ' + session.event.message.id+'\n'
    + '频道ID: ' + session.event.channel.id + '\n'
    + '群组ID: ' + session.guildId + '\n'
    + '用户ID: ' + session.event.user.id + '\n'
    + '事件自身ID: '+ session.selfId
    + '\n此状态来自于cfri-test插件')
    })
}
