import { useProxy } from '@/proxy';
import { Dictionary } from './collections';

const proxy = useProxy();

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		const headers: Dictionary<string> = {};

		for (let entry of request.headers.entries()) {
			headers[entry[0]] = entry[1];
		}

		const configuration = proxy.loadConfiguration(headers, request.url);

		return fetch(configuration.url, {
			body: request.body,
			headers: configuration.headers,
			method: request.method,
			cf: request.cf,
			fetcher: request.fetcher,
			integrity: request.integrity,
			redirect: request.redirect,
			signal: request.signal,
		});
	},
};
