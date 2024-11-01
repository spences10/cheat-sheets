<script lang="ts">
	import { onMount } from 'svelte'

	interface UserDetails {
		html_url: string
		avatar_url: string
		name: string
		bio?: string
	}

	interface Props {
		author: string
	}

	let { author }: Props = $props()

	let data: UserDetails = $state({
		html_url: '',
		avatar_url: '',
		name: '',
	})
	let isLoading = $state(true)

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
		class="not-prose rounded-2xl border border-primary p-4 shadow-lg"
	>
		<div class="flex justify-evenly space-x-5">
			<a
				class="w-1/4"
				href={data.html_url}
				target="_blank"
				rel="noopener noreferrer"
			>
				<img
					class="m-0 h-20 w-20 rounded-full object-cover p-0"
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
