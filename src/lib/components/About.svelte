<script lang="ts">
	let { sectionIndex }: { sectionIndex: number } = $props();

	import Icon from '@iconify/svelte';
	import Reveal from './Reveal.svelte';
	import profileImage from '$lib/assets/images/profile.jpeg';

	// https://icon-sets.iconify.design
	const skills: { name: string; icon: string }[] = [
		{ name: 'Node.js', icon: 'devicon:nodejs' },
		{ name: 'PHP', icon: 'material-icon-theme:php-elephant-pink' },
		{ name: 'Express.js', icon: 'skill-icons:expressjs-light' },
		{ name: 'NestJS', icon: 'devicon:nestjs' },
		{ name: 'Laravel', icon: 'devicon:laravel' },
		{ name: 'Codeigniter', icon: 'logos:codeigniter-icon' },
		{ name: 'MySQL', icon: 'devicon:mysql' },
		{ name: 'PostgreSQL', icon: 'devicon:postgresql' },
		{ name: 'MongoDB', icon: 'devicon:mongodb' },
		{ name: 'Redis', icon: 'devicon:redis' },
		{ name: 'HTML', icon: 'vscode-icons:file-type-html' },
		{ name: 'CSS', icon: 'skill-icons:css' },
		{ name: 'JavaScript', icon: 'devicon:javascript' },
		{ name: 'TypeScript', icon: 'devicon:typescript' },
		{ name: 'React.js', icon: 'devicon:react' },
		{ name: 'Vue.js', icon: 'devicon:vuejs' },
		{ name: 'Next.js', icon: 'devicon:nextjs' },
		{ name: 'Nuxt.js', icon: 'devicon:nuxt' },
		{ name: 'Tailwind CSS', icon: 'devicon:tailwindcss' },
		{ name: 'Git', icon: 'devicon:git' },
		{ name: 'Docker', icon: 'devicon:docker' }
	];
</script>

<div
	id="about"
	class="section-x section-y section-gap flex w-full flex-col justify-center [box-shadow:0_0.3px_0_0_#737373] md:flex-row"
>
	<div class="flex flex-col">
		<p class="shrink-0 font-mono text-xs tracking-widest text-[#CC2A2A] md:text-sm">
			{String(sectionIndex).padStart(2, '0')} — ABOUT
		</p>
		<img
			src={profileImage}
			alt="Anis Romzi"
			class="mt-5 h-72 w-40 object-cover md:mt-10 md:h-96 md:w-60"
		/>
	</div>

	<div class="flex w-full flex-col gap-10 md:max-w-xl lg:max-w-2xl">
		<p class="text-lg text-[#EEEEEE] md:text-2xl">
			I build software that earns trust through clarity. Two years working across insurance,
			ticketing SaaS, and enterprise systems — always at the intersection of backend reliability and
			considered front-end design.
		</p>
		<Reveal delay={150}>
			<p class="text-base text-[#737373] md:text-lg">
				Currently at bitcorp, maintaining BBoss and building BRISurf Care for insurance claims and
				refunds. Previously shipped TixFly, a ticketing SaaS platform, and supported MariPos at Mari
				Works Solution, and built internal tools at PT Nusantara Infrastructure. I care about clean
				APIs, resolving bugs fast, and features that hold up in production.
			</p>
		</Reveal>
		<Reveal delay={300}>
			<div class="flex flex-col gap-5">
				<p class="font-mono text-sm tracking-widest text-[#CC2A2A]">SKILLS</p>
				<div class="flex flex-wrap gap-2 font-mono text-xs text-[#737373]">
					{#each skills as skill (skill.name)}
						<div
							class="flex items-center justify-center gap-2 p-2 [box-shadow:0_0_0_0.3px_#737373] hover:text-[#CC2A2A] hover:[box-shadow:0_0_0_0.3px_#CC2A2A]"
						>
							<Icon icon={skill.icon} width="13" height="13" />
							<span>{skill.name}</span>
						</div>
					{/each}
				</div>
			</div>
		</Reveal>
	</div>
</div>
