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
				'Maintain and enhance BBoss, resolving bugs and improving application stability and performance.',
				'Designed, developed, and deployed BRISurf Care for insurance claim and refund registration.',
				'Deliver feature adjustments and application maintenance based on client requests and business needs.'
			],
			products: ['BBoss', 'BRISurf Care']
		},
		{
			company: 'Mari Works Solution',
			role: 'Full Stack Developer',
			period: 'Sep 2024 — Jan 2026',
			location: 'South Jakarta, Indonesia',
			note: 'Internship & Contract',
			highlights: [
				'Improved TixFly’s backend API reliability, security, and performance, and resolved admin dashboard bugs.',
				'Built modules for digital video transactions and event bookings, implemented password recovery, and customized email and ticket workflows.',
				'Supported MariPos with backend fixes for seat availability, transactions, and promo codes, and maintained APIs for the mobile team.'
			],
			products: ['TixFly', 'MariPos']
		},
		{
			company: 'PT Nusantara Infrastructure',
			role: 'Full Stack Developer Intern',
			period: 'Aug 2023 — Dec 2023',
			location: 'South Jakarta, Indonesia',
			note: '',
			highlights: [
				'Developed features for NISA, an internal self-assessment application.',
				'Refactored the codebase for readability and maintainability, and built a repair flow API aligned with operational procedures.',
				'Resolved bugs and improved the application’s user experience.'
			],
			products: ['NISA']
		}
	];
</script>

<section
	id="experience"
	aria-labelledby="experience-heading"
	class="section-x section-y flex flex-col gap-16 border-b border-[#737373]/40 md:gap-20"
>
	<div class="section-gap flex w-full flex-col justify-center md:flex-row">
		<h2
			id="experience-heading"
			class="shrink-0 font-mono text-xs tracking-widest text-[#CC2A2A] md:text-sm"
		>
			{String(sectionIndex).padStart(2, '0')} — EXPERIENCE
		</h2>
		<div class="flex w-full flex-col gap-7 md:max-w-xl lg:max-w-2xl">
			<p class="text-lg text-[#737373]">
				My work across insurance, ticketing SaaS, and enterprise systems — building features,
				maintaining APIs, and improving the software people use every day.
			</p>
		</div>
	</div>

	<ol class="w-full">
		{#each experiences as experience (experience.company)}
			<li class="border-t border-[#737373]/40 last:border-b">
				<Reveal>
					<article
						class="grid gap-6 py-8 sm:py-10 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-10 lg:gap-16"
					>
						<div class="flex flex-col gap-3 font-mono text-xs text-[#737373]">
							<p class="text-[#EEEEEE]">{experience.period}</p>
							<p>{experience.location}</p>
						</div>
						<div class="flex min-w-0 flex-col gap-5">
							<div class="flex flex-col gap-2">
								<h3 class="text-xl font-medium sm:text-2xl">{experience.role}</h3>
								<p class="text-[#CC2A2A]">{experience.company}</p>
								{#if experience.note}<p class="text-sm text-[#737373]">{experience.note}</p>{/if}
							</div>
							<ul
								class="list-disc space-y-3 pl-5 text-sm leading-relaxed text-[#737373] marker:text-[#CC2A2A] sm:text-base"
							>
								{#each experience.highlights as highlight (highlight)}
									<li>{highlight}</li>
								{/each}
							</ul>
							<ul aria-label="Products worked on" class="flex flex-wrap gap-2">
								{#each experience.products as product (product)}
									<li class="border border-[#737373]/40 px-3 py-1 font-mono text-xs text-[#737373]">
										{product}
									</li>
								{/each}
							</ul>
						</div>
					</article>
				</Reveal>
			</li>
		{/each}
	</ol>
</section>
