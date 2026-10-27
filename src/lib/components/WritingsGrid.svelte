<script lang="ts">
	import { resolve } from '$app/paths';
	import type { Writing } from '$lib/content/writings/writings';
	import Icon from '@iconify/svelte';
	import Reveal from './Reveal.svelte';

	let { items }: { items: Writing[] } = $props();

	function formatDate(iso: string): string {
		const d = new Date(iso);
		return Number.isNaN(d.getTime())
			? ''
			: d.toLocaleDateString('en-US', {
					year: 'numeric',
					month: 'short',
					day: 'numeric',
					timeZone: 'UTC'
				});
	}
</script>

<!-- Writings list -->
<div class="grid grid-cols-1 gap-2 md:grid-cols-2">
	{#each items as writing (writing.slug)}
		<Reveal>
			<a href={resolve('/writings/[slug]', { slug: writing.slug })}>
				<div
					class="flex min-w-0 flex-col gap-6 border border-[#929292]/40 p-6 hover:bg-[#929292]/40"
				>
					<div
						class="flex flex-wrap items-baseline justify-between gap-4 font-mono text-xs text-[#929292]"
					>
						<div class="border border-[#929292] p-1 px-3 font-mono text-sm text-[#929292]">
							<span>{writing.category}</span>
						</div>
					</div>
					<div class="flex flex-col gap-4">
						<p class="text-lg font-medium hover:underline">
							{writing.title}
						</p>
						{#if writing.excerpt}
							<p class="text-[#929292]">{writing.excerpt}</p>
						{/if}
					</div>
					<div class="flex flex-wrap justify-between gap-3 font-mono text-sm">
						<time datetime={writing.date}>{formatDate(writing.date)}</time>
						<div class="flex items-center justify-center gap-2 text-[#F71111]">
							<span>Read</span>
							<Icon icon="akar-icons:arrow-right" width="13" height="13" />
						</div>
					</div>
				</div>
			</a>
		</Reveal>
	{:else}
		<div class="col-span-full text-[#929292]">No writings in this category yet.</div>
	{/each}
</div>
