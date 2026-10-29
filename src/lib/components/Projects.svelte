<script lang="ts">
	import { homeProjects } from '$lib/content/projects-and-case-studies/catalog';
	import Icon from '@iconify/svelte';
	import { resolve } from '$app/paths';
	import ProjectsList from './ProjectsList.svelte';

	let { sectionIndex }: { sectionIndex: number } = $props();
</script>

<section
	id="projects"
	aria-labelledby="projects-heading"
	class="section-x section-y flex flex-col gap-16 border-b border-[#929292]/40 md:gap-20"
>
	<div class="section-gap flex w-full flex-col justify-center md:flex-row">
		<h2
			id="projects-heading"
			class="shrink-0 font-mono text-xs tracking-widest text-[#F71111] md:text-sm"
		>
			{String(sectionIndex).padStart(2, '0')} — PROJECTS
		</h2>
		<div class="flex w-full flex-col gap-7 md:max-w-xl lg:max-w-2xl">
			<p class="text-lg text-[#929292]">
				A selection of professional, academic, and personal projects.
			</p>
		</div>
	</div>

	<ProjectsList items={homeProjects} />

	<div class="flex justify-center">
		<a
			href={resolve('/projects')}
			class="inline-flex items-center justify-center gap-3 border border-[#929292]/40 px-6 py-3 font-mono text-sm text-[#929292] hover:border-[#F71111] hover:text-[#F71111]"
		>
			See more projects
			<Icon icon="akar-icons:arrow-right" width="16" height="16" />
		</a>
	</div>
</section>
