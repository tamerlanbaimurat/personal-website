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
			'An ongoing research prototype connecting speech recognition, transcript processing, document generation, and validation mechanisms for safer AI-assisted clinical documentation.',
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
			'Led a four-person team building an encoder-decoder that combines residual convolutions, temporal modeling, frequency attention, and a learned noise gate.',
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
		kicker: 'Sanitized experience case study',
		period: 'August 2025 - May 2026',
		summary:
			'Improved a production automation platform across its TimescaleDB queries, React interface, caching layer, and deployment workflow.',
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
			'Modular RTL that accepts standard 8-bit ASCII and emits variable-length Morse sequences while keeping the design in one 100 MHz clock domain.',
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
			'A tested local search platform with document ingestion, Qwen embeddings, Qdrant retrieval, and CLI, API, and browser interfaces.',
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
			'A pose and movement-assessment prototype that maps three-dimensional landmarks to exercise-specific posture signals without making a clinical diagnostic claim.',
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
			'An ergonomic split keyboard project spanning KiCad board and plate design, firmware adaptation, team leadership, and competition presentation.',
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
			'A smaller Telegram project combining live weather, semantic wardrobe retrieval, Docker deployment, and Prometheus/Grafana observability.',
		tracks: ['AI & research', 'Software & systems'],
		metrics: ['RAG pipeline', 'Observable deployment'],
		technologies: ['Python', 'Docker', 'Prometheus', 'Grafana'],
		href: 'https://github.com/tamerlanbaimurat/telegram-weather-bot',
		external: true,
		status: 'Secondary project',
	},
]

export const featuredProjects = projects.filter((project) => project.featured)

