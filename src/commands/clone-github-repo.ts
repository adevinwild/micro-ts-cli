import { download, extract } from 'gitly'

export default async (name: string) => {
    const cwd = process.cwd()
    const path = `${cwd}/${name}`
    const microTsRepo = 'adevinwild/micro-ts'

    const repoPath = await download(microTsRepo)
    await extract(repoPath, path)

    return path
}
