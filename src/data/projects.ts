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
	{
		title: 'Hua Rong Dao 华容道游戏 Sliding Block Game',
		summary:
			'The classic Chinese sliding blocks game built in Godot. Assets for game pieces are created from photographs taken from a physical wooden set.',
		repo: 'https://github.com/chensongqin112/hua-rong-dao',
		stack: ['GDScript'],
	},
];
