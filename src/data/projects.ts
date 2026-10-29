export type ProjectTrack = 'AI & research' | 'Software & systems' | 'Hardware & DSP'

export interface Project {
	slug?: string
	title: string
	kicker: string
	period: string
	summary: string
	tracks: ProjectTrack[]
	metrics: string[]
	technologies: string[]
	href: string
	featured?: boolean
	external?: boolean
	status?: string
}

export const projects: Project[] = [
	{
		slug: 'medical-ai',
		title: 'Trustworthy AI for medical documentation',
		kicker: 'UROP-funded research',
		period: 'December 2025 - present',
		summary:
			'Researching ways to make AI-generated medical documentation more reliable.',
		tracks: ['AI & research', 'Software & systems'],
		metrics: ['Spring + Summer 2026 UROP funding', 'Ongoing research'],
		technologies: ['ASR', 'LLMs', 'Validation', 'Human-centered evaluation'],
		href: '/research',
		featured: true,
		status: 'Ongoing',
	},
	{
		slug: 'speech-denoising',
		title: 'Attention-based speech denoising',
		kicker: 'Deep learning + DSP',
		period: 'Spring 2026',
		summary:
			'An attention-based model that removes noise from speech, built with a four-person team.',
		tracks: ['AI & research', 'Hardware & DSP'],
		metrics: ['23,075 training pairs', '3 × 824-example test sets'],
		technologies: ['PyTorch', 'STFT', 'Gated DeltaNet', 'Attention'],
		href: '/projects/speech-denoising',
		featured: true,
		status: 'Case study',
	},
	{
		slug: 'performance-engineering',
		title: 'Production performance engineering',
		kicker: 'Software & systems',
		period: 'August 2025 - May 2026',
		summary:
			'Faster database queries, a lighter React interface, and quicker deployments.',
		tracks: ['Software & systems'],
		metrics: ['80% faster critical query', '70% faster deployment'],
		technologies: ['FastAPI', 'React', 'TimescaleDB', 'AWS'],
		href: '/projects/performance-engineering',
		featured: true,
		status: 'Case study',
	},
	{
		slug: 'fpga-morse',
		title: 'FPGA ASCII-to-Morse encoder',
		kicker: 'Digital hardware',
		period: '2026',
		summary:
			'A Verilog design that translates text into Morse code on an FPGA.',
		tracks: ['Hardware & DSP'],
		metrics: ['62 supported inputs', '100 MHz clock domain'],
		technologies: ['Verilog', 'Vivado', 'Artix-7', 'RTL verification'],
		href: '/projects/fpga-morse',
		featured: true,
		status: 'Case study',
	},
	{
		slug: 'greenlight-rag',
		title: 'Greenlight RAG',
		kicker: 'Local document search',
		period: '2025 - present',
		summary:
			'Local document search with embeddings, retrieval, and CLI, API, and web interfaces.',
		tracks: ['AI & research', 'Software & systems'],
		metrics: ['Local-first', '3 interfaces'],
		technologies: ['Qdrant', 'FastAPI', 'Vue 3', 'Docker'],
		href: '/projects/greenlight-rag',
		status: 'Case study',
	},
	{
		slug: 'cortexmd',
		title: 'CortexMD movement analysis',
		kicker: 'Computer vision',
		period: 'Project',
		summary:
			'A computer vision prototype for exercise posture and movement analysis.',
		tracks: ['AI & research', 'Software & systems'],
		metrics: ['33 landmarks per frame', '15+ exercises'],
		technologies: ['OpenCV', 'Pose estimation', 'Geometry', 'Python'],
		href: '/projects/cortexmd',
		status: 'Case study',
	},
	{
		title: 'TBZZ-44 split keyboard',
		kicker: 'Earlier engineering work',
		period: '2021 - 2022',
		summary:
			'An ergonomic split keyboard, from custom circuit boards to firmware.',
		tracks: ['Hardware & DSP'],
		metrics: ['Top 40 of 300 teams', 'KiCad + C'],
		technologies: ['KiCad', 'PCB design', 'C firmware', 'Prototyping'],
		href: 'https://github.com/tamerlanbaimurat/TBZZ-44',
		external: true,
		status: 'Earlier work',
	},
	{
		title: 'Weather Outfit Bot',
		kicker: 'Deployed systems',
		period: '2025 - present',
		summary:
			'A Telegram bot that recommends outfits using live weather and wardrobe search.',
		tracks: ['AI & research', 'Software & systems'],
		metrics: ['RAG pipeline', 'Observable deployment'],
		technologies: ['Python', 'Docker', 'Prometheus', 'Grafana'],
		href: 'https://github.com/tamerlanbaimurat/telegram-weather-bot',
		external: true,
		status: 'Secondary project',
	},
]

export const featuredProjects = projects.filter((project) => project.featured)

