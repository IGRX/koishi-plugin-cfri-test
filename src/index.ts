import { Context, Schema,h } from 'koishi'
import { get_info_status } from './get_status_info'


export const name = 'cfr-test'

export interface Config { }

export const Config: Schema<Config> = Schema.object({
  foo: Schema.string().required(),
  bar: Schema.number().default(1),
  access_tocken: Schema.string().required(),
})

export function apply(ctx: Context) {
  get_info_status(ctx)//get_info_status.ts里写了查询一堆状态的函数，这里用import导入,主ts就简洁多了，下面就是画的大饼（逃
  ctx.on('message', async (session) => {
    session.send('复读： ' + session.content)
  })
}
