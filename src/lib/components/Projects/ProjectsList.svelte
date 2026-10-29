<script lang="ts">
	import Reveal from '../Reveal.svelte';

	import type { Project } from '$lib/content/projects-and-case-studies/catalog';

	let { items }: { items: readonly Project[] } = $props();
</script>

<div class="mb-10 w-full">
	{#each items as project (project.slug)}
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
							<p class="text-sm leading-relaxed text-[#929292]">{project.description}</p>
						</div>
						<div class="flex min-w-0 flex-col gap-5">
							<ul aria-label={`${project.title} technologies`} class="flex flex-wrap gap-2">
								{#each project.skills as skill (skill)}
									<li class="border border-[#929292]/40 px-3 py-1 font-mono text-xs text-[#929292]">
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
