<script lang="ts">
	import Reveal from './Reveal.svelte';

	let { sectionIndex }: { sectionIndex: number } = $props();

	// Professional experience from the résumé in src/lib/assets.
	const experiences = [
		{
			company: 'bitcorp. (PT. Bringin Inti Teknologi)',
			role: 'Backend Developer',
			period: 'Jan 2026 — Present',
			location: 'South Jakarta, Indonesia',
			note: 'Outsourced to PT BRIngin Sejahtera Makmur Pialang Asuransi.',
			highlights: [
				'Maintain backend applications, resolve bugs, and improve reliability and performance.',
				'Designed, built, and deployed a web application to support customer service workflows.',
				'Work with client requirements to refine features and support day-to-day operations.'
			]
		},
		{
			company: 'Mari Works Solution',
			role: 'Full Stack Developer',
			period: 'Sep 2024 — Jan 2026',
			location: 'South Jakarta, Indonesia',
			note: 'Internship & Contract',
			highlights: [
				'Improved API reliability, security, and performance, and resolved issues in administrative interfaces.',
				'Developed transaction workflows, account recovery features, and automated email communications.',
				'Resolved backend issues across booking and payment workflows, and maintained APIs for mobile applications.'
			]
		},
		{
			company: 'PT Nusantara Infrastructure',
			role: 'Full Stack Developer Intern',
			period: 'Aug 2023 — Dec 2023',
			location: 'South Jakarta, Indonesia',
			note: '',
			highlights: [
				'Developed features for internal tools that support employee workflows.',
				'Refactored code for readability and maintainability, and built APIs to support operational processes.',
				'Fixed application bugs and refined interfaces to make everyday tasks easier.'
			]
		}
	];
</script>

<section
	id="experience"
	aria-labelledby="experience-heading"
	class="section-x section-y flex flex-col gap-16 border-b border-[#929292]/40 md:gap-20"
>
	<div class="section-gap flex w-full flex-col justify-center md:flex-row">
		<h2
			id="experience-heading"
			class="shrink-0 font-mono text-xs tracking-widest text-[#F71111] md:text-sm"
		>
			{String(sectionIndex).padStart(2, '0')} — EXPERIENCE
		</h2>
		<div class="flex w-full flex-col gap-7 md:max-w-xl lg:max-w-2xl">
			<p class="text-lg text-[#929292]">
				Experience building and maintaining web applications, from developing new features to
				improving the reliability and usability of existing systems.
			</p>
		</div>
	</div>

	<ol class="w-full">
		{#each experiences as experience (experience.company)}
			<li class="border-t border-[#929292]/40 last:border-b">
				<Reveal>
					<article
						class="grid gap-6 py-8 sm:py-10 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-10 lg:gap-16"
					>
						<div class="flex flex-col gap-3 font-mono text-xs text-[#929292]">
							<p class="text-[#EEEEEE]">{experience.period}</p>
							<p>{experience.location}</p>
						</div>
						<div class="flex min-w-0 flex-col gap-5">
							<div class="flex flex-col gap-2">
								<h3 class="text-xl font-medium sm:text-2xl">{experience.role}</h3>
								<p class="text-[#F71111]">{experience.company}</p>
								{#if experience.note}<p class="text-sm text-[#929292]">{experience.note}</p>{/if}
							</div>
							<ul
								class="list-disc space-y-3 pl-5 text-sm leading-relaxed text-[#929292] marker:text-[#F71111] sm:text-base"
							>
								{#each experience.highlights as highlight (highlight)}
									<li>{highlight}</li>
								{/each}
							</ul>
						</div>
					</article>
				</Reveal>
			</li>
		{/each}
	</ol>
</section>
