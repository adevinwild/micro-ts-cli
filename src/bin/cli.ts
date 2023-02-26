#!/usr/bin/env node

import { intro, outro, spinner, isCancel, cancel, text } from '@clack/prompts'
import color from 'picocolors'
import cloneGitHubRepo from '../commands/clone-github-repo'
import replacePackageValues from '../commands/replace-package-values'

async function main() {
    console.log()
    intro(color.inverse('micro-ts-cli'))
    intro(`Build a your next micro ${color.blue('TypeScript')} ${color.bold('project in seconds!')}`)

    const projectName = await text({
        message: 'Project name',
        placeholder: 'my-micro-ts-project',
    })

    if (isCancel(projectName)) {
        cancel(`Project creation cancelled`)
        return process.exit(1)
    }

    const s = spinner()
    s.start('Fetching micro-ts from GitHub...')

    const path = await cloneGitHubRepo(projectName)
    await replacePackageValues(path, projectName)

    s.stop('micro-ts cloned from GitHub at : ' + color.bold(path))

    outro(`Enjoy your new ${color.bold('micro-ts')} project!`)
}

main().catch(console.error)
