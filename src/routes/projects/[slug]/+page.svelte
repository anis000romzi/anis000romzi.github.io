<script lang="ts">
	import { resolve } from '$app/paths';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>{data.project.title} — Case study — Anis Romzi</title>
	<meta name="description" content={data.project.description} />
</svelte:head>

<main class="section-x section-y min-h-[70vh]">
	<article class="mx-auto max-w-3xl">
		<a
			href={resolve('/projects')}
			class="inline-flex items-center font-mono text-sm text-[#929292] hover:text-[#F71111]"
			>← Back to projects</a
		>
		<header class="mt-10 mb-10 flex flex-col gap-6 border-b border-[#929292]/40 pb-10">
			<div class="flex flex-wrap items-center gap-4 font-mono text-xs text-[#929292]">
				<span class="border border-[#929292]/40 px-3 py-1">{data.project.type}</span>
				<time datetime={String(data.project.year)}>{data.project.year}</time>
				<span>Case study</span>
			</div>
			<h1 class="text-3xl leading-tight font-medium sm:text-4xl md:text-5xl">
				{data.project.title}
			</h1>
			<p class="text-lg text-[#929292]">{data.project.description}</p>
			<ul aria-label="Technologies used" class="flex flex-wrap gap-2">
				{#each data.project.skills as skill (skill)}
					<li class="border border-[#929292]/40 px-3 py-1 font-mono text-xs text-[#929292]">
						{skill}
					</li>
				{/each}
			</ul>
			{#if data.project.website || data.project.repository}
				<div class="flex flex-wrap gap-x-5 gap-y-3 font-mono text-sm">
					<!-- External catalog URLs do not use SvelteKit route resolution. -->
					<!-- eslint-disable svelte/no-navigation-without-resolve -->
					{#if data.project.website}
						<a
							href={data.project.website}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={`Visit ${data.project.title} website (opens in a new tab)`}
							class="text-[#F71111] underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F71111]"
							>Website <span aria-hidden="true">↗</span></a
						>
					{/if}
					{#if data.project.repository}
						<a
							href={data.project.repository}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={`View ${data.project.title} repository (opens in a new tab)`}
							class="text-[#F71111] underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F71111]"
							>Repository <span aria-hidden="true">↗</span></a
						>
					{/if}
					<!-- eslint-enable svelte/no-navigation-without-resolve -->
				</div>
			{/if}
		</header>
		<div
			class="case-study-body prose max-w-none wrap-break-word prose-invert prose-a:text-[#F71111] prose-pre:overflow-x-auto prose-img:h-auto prose-img:max-w-full"
		>
			<!-- eslint-disable-next-line svelte/no-at-html-tags -->
			{@html data.html}
		</div>
	</article>
</main>

<style>
	.case-study-body :global(video) {
		max-width: 100%;
		height: auto;
	}

	.case-study-body :global(iframe),
	.case-study-body :global(audio) {
		max-width: 100%;
	}
</style>
