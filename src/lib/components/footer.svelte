<script lang="ts">
	import { GitHub, Twitter, YouTube } from '$lib/icons';
</script>

<footer class="brutal-card bg-neutral text-neutral-content mt-16 p-8">
	<div
		class="flex flex-col gap-6 md:flex-row md:items-center md:justify-between"
	>
		<!-- Creator info -->
		<div class="text-center md:text-left">
			<p class="font-display mb-2 text-xl tracking-wide uppercase">
				&gt;&gt; MADE BY &lt;&lt;
			</p>
			<p class="mb-1 text-lg font-bold">
				<span
					class="text-error text-2xl"
					role="img"
					aria-label="red heart">❤️</span
				>
				<a
					class="text-primary hover:text-accent font-black uppercase"
					href="https://scottspence.com"
					target="_blank"
					rel="noopener noreferrer"
				>
					SCOTT SPENCE
				</a>
			</p>
			<p class="font-mono text-sm uppercase">
				© {new Date().getFullYear()} - ALL RIGHTS RESERVED
			</p>
		</div>

		<!-- Social links -->
		<div class="flex justify-center gap-4">
			<a
				aria-label="Twitter"
				href="https://twitter.com/spences10"
				class="brutal-card bg-info text-info-content hover:bg-primary hover:text-primary-content p-3"
			>
				<Twitter size={24} />
			</a>
			<a
				aria-label="GitHub"
				href="https://github.com/spences10"
				class="brutal-card bg-success text-success-content hover:bg-primary hover:text-primary-content p-3"
			>
				<GitHub size={24} />
			</a>
			<a
				aria-label="YouTube"
				href="https://ss10/yt"
				class="brutal-card bg-error text-error-content hover:bg-primary hover:text-primary-content p-3"
			>
				<YouTube size={24} />
			</a>
		</div>
	</div>

	<!-- Bottom separator -->
	<div class="mt-6 border-t-2 border-black pt-4 text-center">
		<p class="font-display text-sm tracking-wider uppercase">
			⚡ CHEAT SHEETS - DEV REFERENCES ⚡
		</p>
	</div>
</footer>
