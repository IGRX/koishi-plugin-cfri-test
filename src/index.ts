import { Context, Schema,h } from 'koishi'
import { get_info_status } from './get_status_info'


export const name = 'cfr-test'

export interface Config { }

export const Config: Schema<Config> = Schema.object({})

export function apply(ctx: Context) {
  get_info_status(ctx)//get_info_status.ts里写了查询一堆状态的函数，这里用import导入,主ts就简洁多了，下面就是画的大饼（逃
}
