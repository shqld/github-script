import '@types/node'
import type * as _ from 'zx/globals'

import type { Octokit as github } from '@octokit/rest'
import type { context } from '@actions/github'
import type * as core from '@actions/core'
import type * as glob from '@actions/glob'
import type * as io from '@actions/io'
import type * as exec from '@actions/exec'

export type { github, context, core, glob, io, exec }

export interface Arg {
    github: github
    context: typeof context
    core: typeof core
    glob: typeof glob
    io: typeof io
    exec: typeof exec
    require: typeof require
    __original_require__: typeof require
}

export type Main<T = unknown> = (arg: Arg) => T | Promise<T>
