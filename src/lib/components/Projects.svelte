<script lang="ts">
	let { sectionIndex }: { sectionIndex: number } = $props();

	import Reveal from './Reveal.svelte';

	type Project = {
		slug: string;
		title: string;
		description: string;
		type: 'Professional' | 'Academic' | 'Personal';
		role?: string;
		company?: string;
		year: number;
		skills: string[];
		contributions?: string[];
		website?: string;
		repository?: string;
		featured?: boolean;
	};

	const projects: Project[] = [
		{
			slug: 'billies-hotel',
			title: 'Billies Hotel',
			description:
				'A hotel reservation and management web application developed as a college final project using PHP, CodeIgniter, JavaScript, and MySQL.',
			type: 'Academic',
			repository: 'https://github.com/anis000romzi/billies-hotellll',
			skills: ['PHP', 'Codeigniter', 'JavaScript', 'MySQL'],
			year: 2022
		},
		{
			slug: 'nisa',
			title: 'NISA',
			description:
				'An internal toll road operations platform for monitoring road conditions, infrastructure damage, maintenance activities, CCTV, and toll rates across Indonesia.',
			type: 'Professional',
			skills: ['PHP', 'Laravel', 'JavaScript', 'MySQL'],
			year: 2023
		},
		{
			slug: 'open-music-api',
			title: 'Open Music API',
			description:
				'A backend API for a music application, developed as an undergraduate thesis using Node.js, Hapi.js, PostgreSQL, Redis, and RabbitMQ.',
			type: 'Academic',
			repository: 'https://github.com/anis000romzi/open-music-api',
			skills: ['Node.js', 'JavaScript', 'Hapi.js', 'PostgreSQL', 'Redis', 'RabbitMQ'],
			year: 2024
		},
		{
			slug: 'tixfly',
			title: 'TixFly',
			description:
				'A SaaS ticketing platform that enables businesses and event organizers to manage ticket bookings, sales, and digital transactions.',
			type: 'Professional',
			website: 'https://tixfly.id',
			skills: ['Node.js', 'TypeScript', 'NestJS', 'PostgreSQL', 'Redis', 'RabbitMQ'],
			year: 2024
		},
		{
			slug: 'mari-chat-landing-page',
			title: 'Mari Chat Landing Page',
			description:
				'A marketing website for MariChat, an AI-powered conversational commerce platform that enables businesses to engage with customers and facilitate shopping through WhatsApp.',
			type: 'Professional',
			website: 'https://mari.chat',
			skills: ['Node.js', 'TypeScript', 'Vue.js'],
			year: 2024
		},
		{
			slug: 'bboss',
			title: 'BBoss',
			description:
				'An internal enterprise management system for BSM Pialang Asuransi, supporting cross-departmental operations including human resources, marketing, insurance placement, and claims management.',
			type: 'Professional',
			skills: ['PHP', 'Codeigniter', 'JavaScript', 'PostgreSQL'],
			year: 2026
		},
		{
			slug: 'brisurf-care',
			title: 'BRISurf Care',
			description:
				'An internal insurance management application that centralizes claim and refund records, allowing the Claims and Wholesale Business teams to register requests and track their progress.',
			type: 'Professional',
			skills: ['PHP', 'Codeigniter', 'JavaScript', 'PostgreSQL'],
			year: 2026
		},
		{
			slug: 'portal-klaim',
			title: 'Portal Klaim',
			description:
				'A self-service insurance claims portal that allows insured participants to check their claim status using their participant number.',
			type: 'Professional',
			website: 'https://layanan.bsmpialangasuransi.com',
			skills: ['PHP', 'Laravel', 'JavaScript', 'React.js', 'Tailwind.js'],
			year: 2026
		},
		{
			slug: 'bsm-pialang-asuransi-company-profile',
			title: 'BSM Pialang Asuransi Company Profile',
			description:
				"A corporate website for BSM Pialang Asuransi, presenting the company's profile, insurance brokerage services, and business information.",
			type: 'Professional',
			website: 'https://bsmpialangasuransi.com/id',
			skills: ['Go', 'TypeScript', 'React.js', 'Tailwind.js', 'PostgreSQL'],
			year: 2026
		}
	];
</script>

<section
	id="projects"
	aria-labelledby="projects-heading"
	class="section-x section-y flex flex-col gap-16 border-b border-[#929292]/40 md:gap-20"
>
	<div class="section-gap flex w-full flex-col justify-center md:flex-row">
		<h2
			id="projects-heading"
			class="shrink-0 font-mono text-xs tracking-widest text-[#F71111] md:text-sm"
		>
			{String(sectionIndex).padStart(2, '0')} — PROJECTS
		</h2>
		<div class="flex w-full flex-col gap-7 md:max-w-xl lg:max-w-2xl">
			<p class="text-lg text-[#929292]">
				A selection of professional, academic, and personal projects.
			</p>
		</div>
	</div>

	<div class="mb-10 w-full">
		{#each projects as project (project.slug)}
			<div class="border-t border-[#929292]/40 last:border-b">
				<Reveal>
					<article
						aria-labelledby={`project-${project.slug}`}
						class="group grid gap-5 p-5 transition-colors duration-200 hover:bg-[#F71111]/5 sm:p-7 md:grid-cols-[2rem_minmax(0,1fr)] md:gap-8 lg:gap-12"
					>
						<span aria-hidden="true" class="font-mono text-sm text-[#929292]"></span>
						<div class="grid min-w-0 gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] lg:gap-12">
							<div class="flex min-w-0 flex-col gap-4">
								<div class="flex flex-wrap items-center gap-3 font-mono text-xs text-[#929292]">
									<span class="border border-[#929292]/40 px-3 py-1">{project.type}</span>
									<time datetime={String(project.year)}>{project.year}</time>
									{#if project.featured}
										<span class="text-[#F71111]">Featured</span>
									{/if}
								</div>
								<h3
									id={`project-${project.slug}`}
									class="text-xl transition-colors duration-200 group-hover:text-[#F71111]"
								>
									{project.title}
								</h3>
								{#if project.role || project.company}
									<p class="text-sm text-[#EEEEEE]">
										{[project.role, project.company].filter(Boolean).join(' · ')}
									</p>
								{/if}
								<p class="text-sm leading-relaxed text-[#929292]">{project.description}</p>
								{#if project.contributions?.length}
									<div class="flex flex-col gap-2">
										<h4 class="font-mono text-xs text-[#EEEEEE]">Contributions</h4>
										<ul
											class="list-disc space-y-2 pl-5 text-sm leading-relaxed text-[#929292] marker:text-[#F71111]"
										>
											{#each project.contributions as contribution, index (index)}
												<li>{contribution}</li>
											{/each}
										</ul>
									</div>
								{/if}
							</div>
							<div class="flex min-w-0 flex-col gap-5">
								<ul aria-label={`${project.title} technologies`} class="flex flex-wrap gap-2">
									{#each project.skills as skill (skill)}
										<li
											class="border border-[#929292]/40 px-3 py-1 font-mono text-xs text-[#929292]"
										>
											{skill}
										</li>
									{/each}
								</ul>
								{#if project.website || project.repository}
									<div class="flex flex-wrap gap-x-5 gap-y-3 font-mono text-sm">
										{#if project.website}
											<!-- External project URLs do not use SvelteKit route resolution. -->
											<!-- eslint-disable svelte/no-navigation-without-resolve -->
											<a
												href={project.website}
												target="_blank"
												rel="noopener noreferrer"
												aria-label={`Visit ${project.title} website (opens in a new tab)`}
												class="text-[#F71111] underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F71111]"
												>Website <span aria-hidden="true">↗</span></a
											>
										{/if}
										{#if project.repository}
											<!-- External repository URLs do not use SvelteKit route resolution. -->
											<!-- eslint-disable svelte/no-navigation-without-resolve -->
											<a
												href={project.repository}
												target="_blank"
												rel="noopener noreferrer"
												aria-label={`View ${project.title} repository (opens in a new tab)`}
												class="text-[#F71111] underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F71111]"
												>Repository <span aria-hidden="true">↗</span></a
											>
										{/if}
									</div>
								{/if}
							</div>
						</div>
					</article>
				</Reveal>
			</div>
		{/each}
	</div>
</section>
