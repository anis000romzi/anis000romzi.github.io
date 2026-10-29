<script lang="ts">
	import { projects } from '$lib/content/projects-and-case-studies/catalog';
	import { resolve } from '$app/paths';
	import ProjectsList from '$lib/components/ProjectsList.svelte';
</script>

<svelte:head>
	<title>Projects — Anis Romzi</title>
	<meta
		name="description"
		content="A selection of professional, academic, and personal projects."
	/>
</svelte:head>

<main class="section-x section-y min-h-[70vh]">
	<div class="mx-auto flex max-w-6xl flex-col gap-10">
		<a
			href={resolve('/#projects')}
			class="self-start font-mono text-sm text-[#929292] hover:text-[#F71111]">← Back to home</a
		>
		<header class="flex flex-col gap-6 border-b border-[#929292]/40 pb-10">
			<h1 class="text-3xl leading-tight font-medium sm:text-4xl md:text-5xl">Projects</h1>
			<p class="max-w-2xl text-lg text-[#929292]">
				A selection of professional, academic, and personal projects.
			</p>
		</header>

		<ProjectsList items={projects} />
	</div>
</main>
