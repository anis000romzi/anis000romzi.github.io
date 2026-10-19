<script lang="ts">
	import Icon from '@iconify/svelte';
	import Reveal from './Reveal.svelte';
	import resume from '$lib/assets/resume_muhammad_anis_romzi.pdf';
</script>

<div
	class="section-x section-y flex h-screen flex-col justify-center [box-shadow:0_0.3px_0_0_#737373]"
>
	<Reveal delay={0}>
		<p class="font-mono text-xs tracking-widest text-[#CC2A2A] md:text-sm">— FULLSTACK DEVELOPER</p>
	</Reveal>
	<Reveal delay={150}>
		<h1 class="my-4 text-6xl md:my-10 md:text-8xl">
			Anis <br /> <span class="text-[#CC2A2A]">Romzi.</span>
		</h1>
	</Reveal>
	<div class="flex flex-col items-center justify-between gap-10 md:flex-row md:items-end">
		<Reveal delay={300} class="md:w-6/12">
			<p class="text-base text-[#737373] md:text-lg">
				Full stack developer with 2 years' experience delivering scalable, user-focused web
				applications. Currently optimizing backend performance and APIs at bitcorp, Jakarta.
			</p>
		</Reveal>

		<ul
			class="flex w-full list-none flex-wrap items-start gap-2 font-mono text-xs font-light tracking-widest text-[#737373] uppercase md:w-auto md:items-center lg:gap-10"
		>
			<li class="hover:text-[#CC2A2A]">
				<a
					href="https://github.com/anis000romzi"
					target="_blank"
					class="flex items-center justify-center gap-[8px] p-2"
				>
					<Icon icon="mdi:github" width="15" height="15" />
					<span>Github</span>
				</a>
			</li>
			<li class="hover:text-[#CC2A2A]">
				<a
					href="https://www.linkedin.com/in/anis000romzi"
					target="_blank"
					class="flex items-center justify-center gap-[8px] p-2"
				>
					<Icon icon="mdi:linkedin" width="15" height="15" />
					<span>LinkedIn</span>
				</a>
			</li>
			<li class="hover:text-[#CC2A2A]">
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
