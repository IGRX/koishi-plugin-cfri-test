import { Context, Schema } from 'koishi'

export const name = 'cfr-test'

export interface Config {}

export const Config: Schema<Config> = Schema.object({})

export function apply(ctx: Context) {

  ctx.command('cfr','获取当前状态，由cfri-test插件提供', { authority: 1 })
  .action(async ({session}) => {
      try {
        let now_message_status = []
        now_message_status[0] = await session.event.platform
        now_message_status[1] = await session.event.message.id
        now_message_status[2] = await session.event.channel.id
        now_message_status[3] = await session.event.guild.id
        now_message_status[4] = await session.event.user.id
        now_message_status[5] = await session.selfId
        session.send('平台名: '+now_message_status[0]+'\n'
        +'消息ID: '+now_message_status[1]+'\n'
        +'频道ID: '+now_message_status[2]+'\n'
        +'群组ID: '+now_message_status[3]+'\n'
        +'用户ID: '+now_message_status[4]+'\n'
        +'事件自身ID: '+now_message_status[5]
        +'\n此状态来自于cfri-test插件')
      } catch (error) {
        session.send('获取状态失败')
      }
    })
}
