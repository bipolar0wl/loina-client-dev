import type { UseFetchOptions } from 'nuxt/app'

export function useAPI<T>(
	url: string | (() => string),
	options: Omit<UseFetchOptions<T>, 'default'> & { default: () => T | Ref<T> },
) {
	return useFetch(url, {
		...options,
		$fetch: useNuxtApp().$api
	})
}

// import { useRuntimeConfig } from '#app'
//
// export const useApi = () => {
// 	const config = useRuntimeConfig()
// 	const baseUrl = config.public.apiBase
//
// 	const fetchData = async (endpoint: string) => {
// 		try {
// 			return await $fetch(`${baseUrl}${endpoint}`)
// 		} catch (error) {
// 			console.error('Error fetching data:', error)
// 			throw error
// 		}
// 	}
//
// 	return {
// 		fetchData
// 	}
// }