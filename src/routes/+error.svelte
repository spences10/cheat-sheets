<script lang="ts">
	import { page } from '$app/stores'
</script>

<svelte:head>
	<title>Uh oh! {$page.status}</title>
</svelte:head>

<main class="prose prose-xl">
	<h1>{$page.status}</h1>
	<p>{$page.error?.message}</p>
	<p>It looks like <code>{$page.url}</code> doesn't exist</p>
	<p>
		Maybe check out the <a href="/">homepage</a>?
	</p>
</main>
