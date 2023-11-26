import { Context } from 'koishi'

export function find_person(ctx: Context, access_tocken: string) {
    ctx.command('cfr.info <info>', '获取用户信息', { authority: 1 })
        .usage('输入用户姓名或学号或手机号')
        .example('cfr info 张三')
        .example('cfr info 100392100000')
        .example('cfr info 18888888888')
        .action(async ({ session }, info) => {
            if (info) {
                try {
                    const res = await ctx.http.get("https://kim.cfri.edu.cn/admin/user/page", {
                        params: {
                            "current": "1",
                            "size": "20",
                            "deptId": "",
                            "identity": "",
                            "keyword": info,
                        },
                        headers: {
                            "Pragma": "no-cache",
                            "Authorization": "Bearer " + access_tocken,
                            "Accept": "*/*",
                            "Host": "kim.cfri.edu.cn",
                            "Connection": "keep-alive",
                        }
                    })
                    const data = res.data.records;
                    if (data.length == 0) {
                        return session.text('未找到此用户')
                    }
                    for (let i = 0; i < data.length; i++) {
                        session.send(
                            "姓名：" + data[i].realName + "\n"
                            + "学号：" + data[i].username + "\n"
                            + "手机号：" + data[i].phone + "\n"
                            + "邮箱：" + data[i].email + "\n"
                            + "身份证号：" + data[i].idCard + "\n"
                            + "学员队：" + data[i].deptName + "\n"
                        )
                    }
                } catch (error) {
                    return session.text('连接失败')
                }
            } else {
                session?.execute('cfr info -h')
            }
        })
}