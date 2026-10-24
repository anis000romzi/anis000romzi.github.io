<script lang="ts">
	import type { Pathname } from '$app/types';
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import { locales, localizeHref } from '$lib/paraglide/runtime';
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
	let pressedElement: HTMLElement | null = null;

	function clearPress() {
		pressedElement?.removeAttribute('data-pressed');
		pressedElement = null;
	}

	function showPress(event: PointerEvent) {
		clearPress();
		if (event.button !== 0 || !(event.target instanceof Element)) return;
		const element = event.target.closest<HTMLElement>('a[href], button');
		if (
			!element ||
			element.matches(':disabled, [aria-disabled="true"], [data-press-feedback="none"]')
		)
			return;
		pressedElement = element;
		pressedElement.setAttribute('data-pressed', '');
	}
</script>

<svelte:window
	onpointerdown={showPress}
	onpointerup={clearPress}
	onpointercancel={clearPress}
	onblur={clearPress}
	onscroll={clearPress}
/>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<Navbar />

{@render children()}

<Footer />

<div style="display:none">
	{#each locales as locale (locale)}
		<a href={resolve(localizeHref(page.url.pathname, { locale }) as Pathname)}>{locale}</a>
	{/each}
</div>
