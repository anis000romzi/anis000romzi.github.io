<script lang="ts">
	import { resolve } from '$app/paths';
	import { categories, writings, type Category } from '$lib/content/writings/writings';
	import Icon from '@iconify/svelte';
	import WritingsGrid from './WritingsGrid.svelte';

	let { sectionIndex }: { sectionIndex: number } = $props();
	let selected = $state<Category | null>(null);
	const filtered = $derived(selected ? writings.filter((w) => w.category === selected) : writings);

	function toggle(category: Category) {
		selected = selected === category ? null : category;
	}
</script>

<div
	id="writings"
	class="section-x section-y section-gap flex w-full flex-col justify-center border-b border-[#929292]/40"
>
	<div class="section-gap flex w-full flex-col justify-center md:flex-row">
		<p class="shrink-0 font-mono text-xs tracking-widest text-[#F71111] md:text-sm">
			{String(sectionIndex).padStart(2, '0')} — WRITINGS
		</p>

		<div class="flex w-full flex-col gap-7 md:max-w-xl lg:max-w-2xl">
			<p class="text-lg text-[#929292]">
				Occasional essays on software craft, systems thinking, and life adjacent to screens.
			</p>

			<div class="flex flex-wrap gap-3">
				{#each categories as category (category)}
					<button
						type="button"
						aria-pressed={selected === category}
						onclick={() => toggle(category)}
						class="cursor-pointer border border-[#929292]/40 p-1 px-3 font-mono text-sm hover:border-[#F71111] hover:text-[#F71111]
							{selected === category
							? 'border-[#F71111]/40 bg-[#F71111] text-white hover:text-white'
							: 'text-[#929292]'}"
					>
						{category}
					</button>
				{/each}
			</div>
		</div>
	</div>

	<WritingsGrid items={filtered.slice(0, 4)} />

	<div class="flex justify-center">
		<a
			href={resolve('/writings')}
			class="inline-flex items-center justify-center gap-3 border border-[#929292]/40 px-6 py-3 font-mono text-sm text-[#929292] hover:border-[#F71111] hover:text-[#F71111]"
		>
			See more writings
			<Icon icon="akar-icons:arrow-right" width="16" height="16" />
		</a>
	</div>
</div>
