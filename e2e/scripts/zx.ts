import { main } from '@shqld/github-script'

export default main(async ({ github, context, core, exec, glob, io }) => {
    const echo = await $`echo hello, world`
    return echo.stdout.trim()
})
