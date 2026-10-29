import type { Action } from 'svelte/action';

interface InViewOptions {
	onEnter: () => void;
	threshold?: number;
	rootMargin?: string;
	once?: boolean;
}

export const inView: Action<HTMLElement, InViewOptions> = (node, options) => {
	// Whole sections can be taller than the viewport, especially on mobile.
	// Reveal on entry so their height cannot prevent the animation from starting.
	const { onEnter, threshold = 0, rootMargin = '0px 0px -10% 0px', once = true } = options;

	const observer = new IntersectionObserver(
		([entry]) => {
			if (entry.isIntersecting) {
				onEnter();
				if (once) observer.unobserve(node);
			}
		},
		{ threshold, rootMargin }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
};
