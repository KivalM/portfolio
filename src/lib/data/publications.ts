export interface Publication {
	id: string;
	title: string;
	authors: readonly string[];
	venue: string;
	year: number;
	type: 'Journal article' | 'Preprint';
	url?: string;
	urlLabel?: string;
}

export const scholarProfileUrl = 'https://scholar.google.com/citations?user=cKpKQGoAAAAJ&hl=en';

export const publications: readonly Publication[] = [
	{
		id: 'solms-2026-affective-consciousness',
		title: 'Inferring Affective Consciousness in an Artificial Agent: A Case Study',
		authors: [
			'Mark Solms',
			'St John Grimbly',
			'Bruce Bassett',
			'Evert Boonstra',
			'Rowan Hodson',
			'Nicolas Kuske',
			'Kival Mahadew',
			'Benjamin Rosman',
			'Charel van Hoof',
			'Jonathan Shock'
		],
		venue: 'Journal of Consciousness Studies, 33(7–8), 14–34',
		year: 2026,
		type: 'Journal article'
	},
	{
		id: 'mahadew-2026-intention-inference',
		title: 'Intention Inference Under Execution Noise: Separating Aleatoric and Epistemic Uncertainty in Social Dilemmas',
		authors: ['Kival Mahadew', 'Jonathan Shock'],
		venue: 'arXiv preprint arXiv:2608.02440',
		year: 2026,
		type: 'Preprint',
		url: 'https://arxiv.org/abs/2608.02440',
		urlLabel: 'Read on arXiv'
	}
];
