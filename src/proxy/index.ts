import { Dictionary } from '@/collections';

import proxyJson from '@/proxysettings.json';

export function useProxy() {
	return {
		loadConfiguration: (headers: Dictionary<string>, url: string): Proxy => {
			let requestHeaders = new Headers();

			Object.keys(headers).forEach((key) => requestHeaders.set(key, headers[key]));

			return {
				url: 'https://www.example.com',
				headers: requestHeaders,
			};
		},
	};
}

interface Proxy {
	url: string;
	headers: Headers;
}
