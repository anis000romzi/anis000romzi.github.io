import { error } from '@sveltejs/kit';
import MarkdownIt from 'markdown-it';
import { projects } from '$lib/content/projects-and-case-studies/catalog';
import { hasCaseStudy, loadCaseStudy } from '$lib/content/projects-and-case-studies/projects';
import type { EntryGenerator, PageServerLoad } from './$types';

const markdown = new MarkdownIt({ html: true });

export const entries: EntryGenerator = () =>
	projects.filter(({ slug }) => hasCaseStudy(slug)).map(({ slug }) => ({ slug }));

export const load: PageServerLoad = async ({ params }) => {
	const project = projects.find(({ slug }) => slug === params.slug);
	if (!project) error(404, 'Project not found');

	const body = await loadCaseStudy(project.slug);
	if (!body) error(404, 'Case study not found');

	return { project, html: markdown.render(body) };
};
