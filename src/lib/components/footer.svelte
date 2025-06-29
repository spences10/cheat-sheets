<script lang="ts">
	import { GitHub, Twitter, YouTube } from '$lib/icons';
</script>

<footer class="footer footer-center text-base-content mt-16 p-10">
	<aside class="grid-flow-col items-center">
		<div class="avatar">
			<div
				class="ring-primary ring-offset-base-100 w-16 rounded-full ring ring-offset-2"
			>
				<img src="profile-pic.png" alt="Scott avatar" />
			</div>
		</div>
		<div class="text-center">
			<p class="text-lg font-bold">
				Made with <span
					role="img"
					aria-label="red heart"
					class="text-red-500">❤️</span
				>
				by
				<a
					class="link link-hover link-primary font-semibold"
					href="https://scottspence.com"
					target="_blank"
					rel="noopener noreferrer"
				>
					Scott Spence
				</a>
			</p>
			<p class="text-sm opacity-75">
				Copyright © {new Date().getFullYear()} - All rights reserved
			</p>
		</div>
	</aside>
	<nav>
		<div class="grid grid-flow-col gap-4">
			<a
				aria-label="Twitter"
				href="https://twitter.com/spences10"
				class="btn btn-ghost btn-circle hover:btn-primary transition-colors"
			>
				<Twitter
					class="hover:text-primary-content transition-colors"
				/>
			</a>
			<a
				aria-label="GitHub"
				href="https://github.com/spences10"
				class="btn btn-ghost btn-circle hover:btn-primary transition-colors"
			>
				<GitHub
					class="hover:text-primary-content transition-colors"
				/>
			</a>
			<a
				aria-label="YouTube"
				href="https://ss10/yt"
				class="btn btn-ghost btn-circle hover:btn-primary transition-colors"
			>
				<YouTube
					class="hover:text-primary-content transition-colors"
				/>
			</a>
		</div>
	</nav>
</footer>
