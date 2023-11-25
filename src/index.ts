import { Context, Schema } from 'koishi'

export const name = 'cfr-test'

export interface Config {}

export const Config: Schema<Config> = Schema.object({})

export function apply(ctx: Context) {
  ctx.on('message', (session) => {
    if (session.content === 'cfr') {
      let now_message_status = [session.event.platform, session.event.message.id, session.event.channel.id, session.event.guild.id, session.event.user.id, session.selfId]
      session.send('平台名: '+now_message_status[0]+'\n'+'消息ID: '+now_message_status[1]+'\n'+'频道ID: '+now_message_status[2]+'\n'+'群组ID: '+now_message_status[3]+'\n'+'用户ID: '+now_message_status[4]+'\n'+'事件自身ID: '+now_message_status[5]+'\n此状态来自于cfri-test插件')
    }
  })
}
