<script lang="ts">
	import Reveal from '../Reveal.svelte';

	import type { Project } from '$lib/content/projects-and-case-studies/catalog';
	import Icon from '@iconify/svelte';

	let { items }: { items: readonly Project[] } = $props();
</script>

<div class="grid grid-cols-1 gap-2 md:grid-cols-2">
	{#each items as project (project.slug)}
		<Reveal>
				<div
					class="flex min-w-0 flex-col gap-6 border border-[#929292]/40 p-6 hover:bg-[#929292]/40"
				>
					<div
						class="flex flex-wrap items-baseline justify-between gap-4 font-mono text-xs text-[#929292]"
					>
						<div class="border border-[#929292] p-1 px-3 font-mono text-sm text-[#929292]">
							<span>{project.type}</span>
						</div>
					</div>
					<div class="flex flex-col gap-4">
						<p class="text-lg font-medium hover:underline">
							{project.title}
						</p>
						{#if project.description}
							<p class="text-[#929292]">{project.description}</p>
						{/if}
					</div>
					<div class="flex flex-wrap justify-between gap-3 font-mono text-sm">
						<div>{project.year}</div>
						<div class="flex items-center justify-center gap-2 text-[#F71111]">
							<span>Detail</span>
							<Icon icon="akar-icons:arrow-right" width="13" height="13" />
						</div>
					</div>
				</div>
		</Reveal>
	{:else}
		<div class="col-span-full text-[#929292]">No projects in this category yet.</div>
	{/each}
</div>
