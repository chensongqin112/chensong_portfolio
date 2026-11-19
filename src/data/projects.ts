export type Project = {
	title: string;
	summary: string;
	repo: string;
	stack: string[];
};

export const projects: Project[] = [
	{
		title: 'Fantastic Battles army editor',
		summary:
			'Unofficial roster builder for Fantastic Battles. Armies stay in the browser and can be shared as compressed URLs.',
		repo: 'https://github.com/chensongqin112/fantastic-battles-army-editor',
		stack: ['TypeScript', 'React', 'Vite'],
	},
];
