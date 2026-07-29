import { cp, mkdir, readdir, rename, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')
const client = join(dist, 'client')
const server = join(dist, 'server')

await mkdir(client, { recursive: true })

for (const entry of await readdir(dist)) {
	if (entry === 'client' || entry === 'server' || entry === '.openai') continue
	await rename(join(dist, entry), join(client, entry))
}

await mkdir(server, { recursive: true })
await writeFile(
	join(server, 'index.js'),
	`const worker = {
	async fetch(request, env) {
		const response = await env.ASSETS.fetch(request)
		if (response.status !== 404 || request.method !== 'GET') return response

		const url = new URL(request.url)
		const hasExtension = /\\.[a-zA-Z0-9]+$/.test(url.pathname)
		if (hasExtension) return response

		url.pathname = url.pathname.endsWith('/')
			? url.pathname + 'index.html'
			: url.pathname + '/index.html'
		return env.ASSETS.fetch(new Request(url, request))
	},
}

export default worker
`,
)

await mkdir(join(dist, '.openai'), { recursive: true })
await cp(join(root, '.openai', 'hosting.json'), join(dist, '.openai', 'hosting.json'))
