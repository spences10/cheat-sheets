<script>
	import GitHub from '$lib/icons/git-hub.svelte'
	import Twitter from '$lib/icons/twitter.svelte'
	import YouTube from '$lib/icons/you-tube.svelte'
</script>

<footer
	class="footer footer-center p-10 bg-primary text-primary-content"
>
	<div>
		<img
			src="profile-pic.png"
			alt="Scott avatar"
			class="rounded-full h-20"
		/>
		<p class="font-bold">
			Made with <span role="img" aria-label="red heart">❤️</span> by
			<a
				class="link transition hover:text-secondary"
				href="https://scottspence.com"
				target="_blank"
				rel="noopener"
			>
				Scott Spence
			</a>
		</p>
		<p>
			Copyright © {`${new Date().getFullYear()}`} - All right reserved
		</p>
	</div>
	<div>
		<div class="grid grid-flow-col gap-4">
			<a aria-label="Twitter" href="https://twitter.com/spences10">
				<Twitter />
			</a>
			<a aria-label="GitHub" href="https://github.com/spences10">
				<GitHub />
			</a>
			<a aria-label="YouTube" href="https://ss10/yt">
				<YouTube />
			</a>
		</div>
	</div>
</footer>
