<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import About from '$lib/components/About.svelte';
	import Projects from '$lib/components/Projects/Projects.svelte';
	import Writings from '$lib/components/Writings/Writings.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Reveal from '$lib/components/Reveal.svelte';
	import Experience from '$lib/components/Experience.svelte';

	const sections = [
		aboutSection,
		experienceSection,
		projectSection,
		writingsSection,
		contactSection
	];
</script>

{#snippet aboutSection(index: number)}
	<About sectionIndex={index} />
{/snippet}

{#snippet experienceSection(index: number)}
	<Experience sectionIndex={index} />
{/snippet}

{#snippet projectSection(index: number)}
	<Projects sectionIndex={index} />
{/snippet}

{#snippet writingsSection(index: number)}
	<Writings sectionIndex={index} />
{/snippet}

{#snippet contactSection(index: number)}
	<Contact sectionIndex={index} />
{/snippet}

<svelte:head>
	<title>Personal Portfolio — Anis Romzi</title>
</svelte:head>

<div>
	<Reveal>
		<Hero />
	</Reveal>
	{#each sections as section, index (section)}
		<Reveal>
			{@render section(index)}
		</Reveal>
	{/each}
</div>
