<script lang="ts">
	import { resolve } from '$app/paths';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	const date = $derived(new Date(data.writing.date));
	const formattedDate = $derived(
		Number.isNaN(date.getTime())
			? ''
			: date.toLocaleDateString('en-US', {
					year: 'numeric',
					month: 'long',
					day: 'numeric',
					timeZone: 'UTC'
				})
	);
</script>

<svelte:head>
	<title>{data.writing.title} — Anis Romzi</title>
	<meta name="description" content={data.writing.excerpt} />
</svelte:head>

<main class="section-x section-y min-h-[70vh]">
	<article class="mx-auto max-w-3xl">
		<a
			href={resolve('/writings')}
			class="inline-flex items-center font-mono text-sm text-[#929292] hover:text-[#F71111]"
			>← Back to writings</a
		>
		<header class="mt-10 mb-10 flex flex-col gap-6 border-b border-[#929292]/40 pb-10">
			<div class="flex flex-wrap items-center gap-4 font-mono text-xs text-[#929292]">
				<span class="border border-[#929292]/40 px-3 py-1">{data.writing.category}</span>
				{#if formattedDate}<time datetime={data.writing.date}>{formattedDate}</time>{/if}
			</div>
			<h1 class="text-3xl leading-tight font-medium sm:text-4xl md:text-5xl">
				{data.writing.title}
			</h1>
			{#if data.writing.excerpt}<p class="text-lg text-[#929292]">{data.writing.excerpt}</p>{/if}
		</header>
		<div
			class="writing-body prose max-w-none break-words prose-invert prose-a:text-[#F71111] prose-pre:overflow-x-auto prose-img:h-auto prose-img:max-w-full"
		>
			<!-- eslint-disable-next-line svelte/no-at-html-tags -->
			{@html data.html}
		</div>
	</article>
</main>

<style>
	.writing-body :global(video) {
		max-width: 100%;
		height: auto;
	}

	.writing-body :global(iframe),
	.writing-body :global(audio) {
		max-width: 100%;
	}
</style>
