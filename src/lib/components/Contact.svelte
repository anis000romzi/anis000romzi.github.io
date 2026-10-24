<script lang="ts">
	import Icon from '@iconify/svelte';
	let { sectionIndex }: { sectionIndex: number } = $props();

	const whatsappNumber = '6283185275055';
</script>

<section
	id="contact"
	aria-labelledby="contact-heading"
	class="section-x section-y section-gap flex w-full flex-col justify-center border-b border-[#737373]/40 md:flex-row"
>
	<h2
		id="contact-heading"
		class="shrink-0 font-mono text-xs tracking-widest text-[#CC2A2A] md:text-sm"
	>
		{String(sectionIndex).padStart(2, '0')} — CONTACT
	</h2>

	<div class="flex w-full flex-col gap-10 md:max-w-xl lg:max-w-2xl">
		<p class="text-lg text-[#EEEEEE] md:text-xl">
			Have a project in mind? Let's build something together!
		</p>

		<div class="flex flex-col gap-4 sm:flex-row">
			<a
				href="mailto:anis000romzi@gmail.com"
				class="inline-flex flex-1 items-center justify-center gap-3 border border-[#CC2A2A] px-5 py-4 font-mono text-xs tracking-widest text-[#CC2A2A] transition-colors hover:bg-[#CC2A2A] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#CC2A2A]"
			>
				<span aria-hidden="true"><Icon icon="mdi:email-outline" width="18" height="18" /></span>
				EMAIL ME
			</a>
			<a
				href={`https://wa.me/${whatsappNumber}`}
				target="_blank"
				rel="noopener noreferrer"
				class="inline-flex flex-1 items-center justify-center gap-3 border border-[#737373]/40 px-5 py-4 font-mono text-xs tracking-widest text-[#EEEEEE] transition-colors hover:border-[#CC2A2A] hover:text-[#CC2A2A] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#CC2A2A]"
			>
				<span aria-hidden="true"><Icon icon="mdi:whatsapp" width="18" height="18" /></span>
				WHATSAPP
				<span class="sr-only">(opens in a new tab)</span>
			</a>
		</div>
	</div>
</section>
