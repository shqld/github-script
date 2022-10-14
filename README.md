# GitHub Script

A better GitHub Script for GitHub Actions.

## Usage

```console
$ ls
.
└── .github
   ├── scripts
   │  └── hello.ts
   └── workflows
      └── ci.yaml
```

```yaml
jobs:
    steps:
        runs-on: ubuntu-latest
        steps:
            - uses: shqld/github-script@v1
              with:
                path: ./.github/scripts/hello.ts
```

```ts
import { Main } from '@shqld/github-script

export const main: Main = ({ github, context, core, ...args }) => {
    github.issues.createComment({
        issue_number: context.issue.number,
        owner: context.repo.owner,
        repo: context.repo.repo,
        body: 'Hello, world!',
    })
}
```

## Q&A

### Q: ESM support?

A: Currently @shqld/github-script does not support acutal ESM, because it depends on sucrase to transpile TypeScript and sucrase does not support ESM now.

You can still use `import ... from ...` because `import` keyword is transpiled to `require` by sucrase, so CJS modules (with `import`) or TS modules are availabel but ESM modules such as `.mjs` files and npm packages with `"type": "module"` are not available.

Use `const mod = await import('mod')` instead of `import mod from 'mod'` until https://github.com/alangpierce/sucrase/issues/734 is resolved.
