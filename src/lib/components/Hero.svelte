<script lang="ts">
	import Icon from '@iconify/svelte';
	import Reveal from './Reveal.svelte';
	import resume from '$lib/assets/resume_muhammad_anis_romzi.pdf';
</script>

<div
	class="section-x section-y flex min-h-svh flex-col justify-center border-b border-[#929292]/40"
>
	<Reveal delay={0}>
		<p class="font-mono text-xs tracking-widest text-[#F71111] md:text-sm">— FULLSTACK DEVELOPER</p>
	</Reveal>
	<Reveal delay={150}>
		<h1 class="my-4 text-6xl md:my-10 md:text-8xl">
			Anis <br /> <span class="text-[#F71111]">Romzi.</span>
		</h1>
	</Reveal>
	<div class="flex flex-col items-center justify-between gap-10 xl:flex-row xl:items-end">
		<Reveal delay={300} class="xl:w-6/12">
			<p class="text-base text-[#929292] md:text-lg">
				Full stack developer with 2 years' experience delivering scalable, user-focused web
				applications. Currently optimizing backend performance and APIs at bitcorp, Jakarta.
			</p>
		</Reveal>

		<ul
			class="flex w-full list-none flex-wrap items-start gap-2 font-mono text-xs font-light tracking-widest text-white uppercase md:w-auto md:items-center lg:gap-4"
		>
			<li class="hover:text-[#F71111]">
				<a
					href="https://github.com/anis000romzi"
					target="_blank"
					class="flex items-center justify-center gap-[8px] p-2"
				>
					<Icon icon="mdi:github" width="15" height="15" />
					<span>Github</span>
				</a>
			</li>
			<li class="hover:text-[#F71111]">
				<a
					href="https://www.linkedin.com/in/anis000romzi"
					target="_blank"
					class="flex items-center justify-center gap-[8px] p-2"
				>
					<Icon icon="mdi:linkedin" width="15" height="15" />
					<span>LinkedIn</span>
				</a>
			</li>
			<li class="hover:text-[#F71111]">
				<!-- eslint-disable svelte/no-navigation-without-resolve -->
				<a
					href={resume}
					download="Anis Romzi - Resume.pdf"
					class="flex items-center justify-center gap-2 p-2"
				>
					<Icon icon="carbon:document" width="15" height="15" />
					<span>Résumé</span>
				</a>
				<!-- eslint-enable svelte/no-navigation-without-resolve -->
			</li>
		</ul>
	</div>
</div>
