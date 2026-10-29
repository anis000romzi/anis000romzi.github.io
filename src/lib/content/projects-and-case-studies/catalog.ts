import type { Category } from './projects';

export type Project = {
	slug: string;
	title: string;
	description: string;
	type: Category;
	year: number;
	skills: string[];
	website?: string;
	repository?: string;
	featured?: boolean;
};

export const projects: readonly Project[] = [
	{
		slug: 'my-restaurant-list',
		title: 'My Restaurant List',
		description:
			"A Restaurant cataloguing app for Dicoding's Frontend Development course final assignment using plain JavaScript, HTML, and CSS.",
		type: 'Personal',
		repository: 'https://github.com/anis000romzi/my-restaurant-list',
		website: 'https://my-restaurant-list.netlify.app/',
		skills: ['JavaScript', 'HTML', 'CSS'],
		year: 2022
	},
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
			"A backend API for a music application for Dicoding's Backend Development course final assignment using Node.js, Hapi.js, PostgreSQL, Redis, and RabbitMQ.",
		type: 'Personal',
		repository: 'https://github.com/anis000romzi/open-music-api',
		skills: ['Node.js', 'JavaScript', 'Hapi.js', 'PostgreSQL', 'Redis', 'RabbitMQ'],
		year: 2023
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
		skills: ['PHP', 'Laravel', 'JavaScript', 'React.js', 'Tailwind CSS'],
		year: 2026
	},
	{
		slug: 'bsm-pialang-asuransi-company-profile',
		title: 'BSM Pialang Asuransi Company Profile',
		description:
			"A corporate website for BSM Pialang Asuransi, presenting the company's profile, insurance brokerage services, and business information.",
		type: 'Professional',
		website: 'https://bsmpialangasuransi.com/id',
		skills: ['Go', 'TypeScript', 'React.js', 'Tailwind CSS', 'PostgreSQL'],
		year: 2026
	}
];

export const homeProjects = projects.slice(0, 5);
