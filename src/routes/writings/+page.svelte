<script lang="ts">
	import { resolve } from '$app/paths';
	import WritingsGrid from '$lib/components/Writings/WritingsGrid.svelte';
	import { categories, writings, type Category } from '$lib/content/writings/writings';

	let selected = $state<Category | null>(null);
	const filtered = $derived(selected ? writings.filter((w) => w.category === selected) : writings);
</script>

<svelte:head>
	<title>Writings — Anis Romzi</title>
	<meta
		name="description"
		content="All writings by Anis Romzi: essays on software craft, systems thinking, and life adjacent to screens."
	/>
</svelte:head>

<main class="section-x section-y min-h-[70vh]">
	<div class="mx-auto flex max-w-6xl flex-col gap-10">
		<a
			href={resolve('/#writings')}
			class="self-start font-mono text-sm text-[#929292] hover:text-[#F71111]">← Back to home</a
		>
		<header class="flex flex-col gap-6 border-b border-[#929292]/40 pb-10">
			<h1 class="text-3xl leading-tight font-medium sm:text-4xl md:text-5xl">Writings</h1>
			<p class="max-w-2xl text-lg text-[#929292]">
				Occasional essays on software craft, systems thinking, and life adjacent to screens.
			</p>
		</header>

		<div class="flex flex-wrap gap-3" role="group" aria-label="Filter writings by category">
			{#each [null, ...categories] as category (category)}
				<button
					type="button"
					aria-pressed={selected === category}
					onclick={() => (selected = category)}
					class="cursor-pointer border px-3 py-1 font-mono text-sm {selected === category
						? 'border-[#F71111]/40 bg-[#F71111] text-white'
						: 'border-[#929292]/40 text-[#929292] hover:border-[#F71111] hover:text-[#F71111]'}"
				>
					{category ?? 'All'}
				</button>
			{/each}
		</div>

		<WritingsGrid items={filtered} />
	</div>
</main>
