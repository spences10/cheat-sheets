<script lang="ts">
	import { GitHub, Twitter, YouTube } from '$lib/icons';
</script>

<footer
	class="footer footer-horizontal footer-center bg-base-200 text-base-content p-10"
>
	<aside>
		<img
			src="profile-pic.png"
			alt="Scott avatar"
			class="h-20 rounded-full"
		/>
		<p class="font-bold">
			Made with <span role="img" aria-label="red heart">❤️</span> by
			<a
				class="link link-hover link-primary transition"
				href="https://scottspence.com"
				target="_blank"
				rel="noopener noreferrer"
			>
				Scott Spence
			</a>
		</p>
		<p>
			Copyright © {new Date().getFullYear()} - All rights reserved
		</p>
	</aside>
	<nav>
		<div class="grid grid-flow-col gap-4">
			<a
				aria-label="Twitter"
				href="https://twitter.com/spences10"
				class="btn btn-ghost btn-square"
			>
				<Twitter />
			</a>
			<a
				aria-label="GitHub"
				href="https://github.com/spences10"
				class="btn btn-ghost btn-square"
			>
				<GitHub />
			</a>
			<a
				aria-label="YouTube"
				href="https://ss10/yt"
				class="btn btn-ghost btn-square"
			>
				<YouTube />
			</a>
		</div>
	</nav>
</footer>
