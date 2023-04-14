<script lang="ts">
	import { onMount } from 'svelte'

	interface UserDetails {
		html_url: string
		avatar_url: string
		name: string
		bio?: string
	}

	export let author: string
	let data: UserDetails = {
		html_url: '',
		avatar_url: '',
		name: '',
	}
	let isLoading = true

	const getUserDetails = async (): Promise<UserDetails> => {
		const res = await fetch(`/${author}.json`)
		return await res.json()
	}

	onMount(async () => {
		try {
			data = await getUserDetails()
			isLoading = false
		} catch (error) {
			console.error(error)
			// handle error
			isLoading = false
		}
	})
</script>

{#if isLoading}
	<p>Loading...</p>
{:else}
	<p class="text-sm">Contribution by:</p>
	<article
		class="not-prose border border-primary shadow-lg p-4 rounded-2xl"
	>
		<div class="flex space-x-5 justify-evenly">
			<a
				class="w-1/4"
				href={data.html_url}
				target="_blank"
				rel="noopener noreferrer"
			>
				<img
					class="w-20 h-20 p-0 m-0 rounded-full object-cover"
					src={data.avatar_url}
					alt={data.name}
				/>
			</a>
			<a
				class="w-3/4"
				href={data.html_url}
				target="_blank"
				rel="noopener noreferrer"
			>
				<div class="text-sm">
					<p class="text-lg font-bold tracking-widest">{data.name}</p>
					<p>{data.bio || ``}</p>
				</div>
			</a>
		</div>
	</article>
{/if}
