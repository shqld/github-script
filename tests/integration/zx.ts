import { Main } from '../../src/types'

export const main: Main = async ({ github, context, core, exec, glob, io }) => {
    const echo = await $`echo hello, world`
    return echo.stdout.trim()
}
