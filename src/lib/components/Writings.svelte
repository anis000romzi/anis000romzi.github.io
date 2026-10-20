<script lang="ts">
	import { resolve } from '$app/paths';
	import { categories, writings, type Category } from '$lib/content/writings/writings';
	import Icon from '@iconify/svelte';
	import Reveal from './Reveal.svelte';

	let { sectionIndex }: { sectionIndex: number } = $props();
	let selected = $state<Category | null>(null);
	const filtered = $derived(selected ? writings.filter((w) => w.category === selected) : writings);

	function toggle(category: Category) {
		selected = selected === category ? null : category;
	}

	function formatDate(iso: string): string {
		const d = new Date(iso);
		return Number.isNaN(d.getTime())
			? ''
			: d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
	}
</script>

<div
	id="writings"
	class="section-x section-y section-gap flex w-full flex-col justify-center border-b border-[#737373]/40"
>
	<div class="section-gap flex w-full flex-col justify-center md:flex-row">
		<p class="shrink-0 font-mono text-xs tracking-widest text-[#CC2A2A] md:text-sm">
			{String(sectionIndex).padStart(2, '0')} — WRITINGS
		</p>

		<div class="flex w-full flex-col gap-7 md:max-w-xl lg:max-w-2xl">
			<p class="text-lg text-[#737373]">
				Occasional essays on software craft, systems thinking, and life adjacent to screens.
			</p>

			<div class="flex gap-3">
				{#each categories as category (category)}
					<button
						type="button"
						aria-pressed={selected === category}
						onclick={() => toggle(category)}
						class="cursor-pointer border border-[#737373]/40 p-1 px-3 font-mono text-sm hover:border-[#CC2A2A] hover:text-[#CC2A2A]
							{selected === category ? 'bg-[#CC2A2A] text-white hover:text-white' : 'text-[#737373]'}"
					>
						{category}
					</button>
				{/each}
			</div>
		</div>
	</div>

	<!-- Writings list -->
	<div class="grid grid-cols-1 gap-2 md:grid-cols-2">
		{#each filtered as writing (writing.slug)}
			<Reveal>
				<a href={resolve('/writings/[slug]', { slug: writing.slug })}>
					<div
						class="flex min-w-0 flex-col gap-6 border border-[#737373]/40 p-6 hover:bg-[#737373]/40"
					>
						<div
							class="flex flex-wrap items-baseline justify-between gap-4 font-mono text-xs text-[#737373]"
						>
							<div class="border border-[#737373] p-1 px-3 font-mono text-sm text-[#737373]">
								<span>{writing.category}</span>
							</div>
						</div>
						<div class="flex flex-col gap-4">
							<p class="text-lg font-medium hover:underline">
								{writing.title}
							</p>
							{#if writing.excerpt}
								<p class="text-[#737373]">{writing.excerpt}</p>
							{/if}
						</div>
						<div class="flex justify-between font-mono text-sm">
							<time datetime={writing.date}>{formatDate(writing.date)}</time>
							<div class="flex items-center justify-center gap-2 text-[#CC2A2A]">
								<span>Read</span>
								<Icon icon="akar-icons:arrow-right" width="13" height="13" />
							</div>
						</div>
					</div>
				</a>
			</Reveal>
		{:else}
			<div class="col-span-full text-[#737373]">No writings in this category yet.</div>
		{/each}
	</div>
</div>
