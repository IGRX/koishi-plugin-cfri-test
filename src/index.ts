import { Context, Schema, h } from 'koishi'
import { get_info_status } from './get_status_info'
import { find_person } from './find_person'


export const name = 'cfr-test'

export interface Config {
  access_tocken: string;
}

export const Config: Schema<Config> = Schema.object({
  access_tocken: Schema.string().required().description('填写**kim.cfri.edu.cn**的cookie中的**access_token**'),
})

export function apply(ctx: Context, config: Config) {
  get_info_status(ctx)//get_info_status.ts里写了查询一堆状态的函数，这里用import导入,主ts就简洁多了，下面就是画的大饼（逃
  find_person(ctx, config.access_tocken)//find_person.ts里写了查询人员信息的函数，这里用import导入
  ctx.on('message', async (session) => {
    session.send('复读： ' + session.event)
  })
}
