import { replaceInFile } from 'replace-in-file'

export default async (path: string, name: string) => {
    const options = {
        files: `${path}/package.json`,
        from: [
            /"name": ".*"/g,
            /"version": ".*"/g,
            /"repository": .*[\n\r]*/g,
            /"author":.*[\n\r]*/g,
            /"description": ".*"/g,
        ],
        to: [`"name": "${name}"`, `"version": "1.0.0"`, '', '', `"description": "Project generated with micro-ts-cli"`],
    }

    try {
        await replaceInFile(options)
    } catch (error) {
        console.error('Error occurred:', error)
    }
}
