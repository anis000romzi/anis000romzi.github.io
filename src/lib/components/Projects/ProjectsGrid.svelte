<script lang="ts">
	import Reveal from '../Reveal.svelte';

	import type { Project } from '$lib/content/projects-and-case-studies/catalog';
	import { hasCaseStudy } from '$lib/content/projects-and-case-studies/projects';
	import { resolve } from '$app/paths';
	import Icon from '@iconify/svelte';

	let { items }: { items: readonly Project[] } = $props();
</script>

<div class="grid grid-cols-1 gap-2 md:grid-cols-2">
	{#each items as project (project.slug)}
		<Reveal>
			<div class="flex min-w-0 flex-col gap-6 border border-[#929292]/40 p-6 hover:bg-[#929292]/40">
				<div
					class="flex flex-wrap items-baseline justify-between gap-4 font-mono text-xs text-[#929292]"
				>
					<div class="border border-[#929292] p-1 px-3 font-mono text-sm text-[#929292]">
						<span>{project.type}</span>
					</div>
				</div>
				<div class="flex flex-col gap-4">
					<p class="text-lg font-medium">
						{project.title}
					</p>
					{#if project.description}
						<p class="text-[#929292]">{project.description}</p>
					{/if}
				</div>
				<div class="flex flex-wrap justify-between gap-3 font-mono text-sm">
					<div>{project.year}</div>
					<div class="flex flex-wrap gap-x-5 gap-y-3">
						{#if hasCaseStudy(project.slug)}
							<a
								href={resolve('/projects/[slug]', { slug: project.slug })}
								aria-label={`Read ${project.title} case study`}
								class="inline-flex items-center gap-2 text-[#F71111] underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F71111]"
							>
								Read case study
								<Icon icon="akar-icons:arrow-right" width="13" height="13" />
							</a>
						{/if}
						{#each [{ label: 'Website', url: project.website }, { label: 'Repository', url: project.repository }] as link (link.label)}
							{#if link.url}
								<!-- External project URLs do not use SvelteKit route resolution. -->
								<!-- eslint-disable svelte/no-navigation-without-resolve -->
								<a
									href={link.url}
									target="_blank"
									rel="noopener noreferrer"
									aria-label={`View ${project.title} ${link.label.toLowerCase()} (opens in a new tab)`}
									class="inline-flex items-center gap-2 text-[#F71111] underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F71111]"
								>
									{link.label} <span aria-hidden="true">↗</span>
								</a>
							{/if}
						{/each}
					</div>
				</div>
			</div>
		</Reveal>
	{:else}
		<div class="col-span-full text-[#929292]">No projects in this category yet.</div>
	{/each}
</div>
