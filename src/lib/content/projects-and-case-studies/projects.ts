const caseStudies = import.meta.glob<string>('./*.md', {
	query: '?raw',
	import: 'default'
});

// search if the project's slug has existing .md files
export function hasCaseStudy(slug: string): boolean {
	return Object.hasOwn(caseStudies, `./${slug}.md`);
}

// load .md files content
export async function loadCaseStudy(slug: string): Promise<string | null> {
	if (!hasCaseStudy(slug)) return null;
	return (await caseStudies[`./${slug}.md`]()).trim() || null;
}
