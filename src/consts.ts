// ---------------------------------------------------------------------------
// All personal content lives here. Edit this file — the pages read from it.
// Sourced from resume (2026), github.com/DeclanMWorley, linkedin.com/in/declanworley.
// ---------------------------------------------------------------------------

export const SITE = {
	name: 'Declan Worley',
	title: 'Network Engineer',
	headline: ['About me.'],
	tagline:
		'Network engineer with hands-on experience managing and optimizing enterprise-scale DoD networks — advanced routing, VPN technologies, and 802.1x authentication across classified and unclassified environments. I document my labs as write-ups here, and I’m currently leveling toward data center networking.',
	description:
		'Portfolio and lab write-ups of Declan Worley — CCNP Security–certified network engineer specializing in routing, VPN technologies, 802.1x, and network security.',
	email: 'declanmworley@gmail.com',
	github: 'https://github.com/DeclanMWorley',
	linkedin: 'https://www.linkedin.com/in/declanworley/',
	location: 'Kapolei, HI',
	avatar: '/avatar.jpg',
	resume: '/WorleyDeclanResume.pdf',
};

// Credentials ticker under the hero.
export const TICKER = [
	'CCNP Security certified',
	'SCOR 350-701 · SVPN 300-730',
	'CCNA',
	'CompTIA Security+',
	'802.1x · ISE · ForeScout',
	'Cisco SD-Access',
	'IPsec · IKE · GRE',
	'Ansible · NETCONF · Python',
	'Active Secret clearance',
];

// Big counters in the credentials section. All sourced from the resume.
export const STATS = [
	{ value: '300+', label: 'enterprise network devices supported' },
	{ value: '3', label: 'certifications · CCNP-S · CCNA · Sec+' },
	{ value: '5+', label: 'years of hands-on IT experience' },
	{ value: '57th', label: 'worldwide · DarkCTF 2021 · PantherSec' },
];

export interface Skill {
	name: string;
	icon: string; // key into the icon set in SkillIcon.astro
	level: number; // shown as level/99, OSRS stats-tab style
	xp: string; // shown in the hover tooltip (99 = 13,034,431 like the game)
	next?: string; // "next level at" XP — only for skills still in training
	details: string[]; // shown in the hover tooltip
}

export const SKILLS: Skill[] = [
	{
		name: 'Routing & Switching',
		icon: 'routing',
		level: 99,
		xp: '13,034,431',
		details: ['OSPF · EIGRP · BGP', 'STP · NAT · QoS · PIM', 'Cisco IOS · LAN/WAN'],
	},
	{
		name: 'VPN & Tunneling',
		icon: 'vpn',
		level: 99,
		xp: '13,034,431',
		details: ['IPsec · ISAKMP / IKEv1', 'GRE · AnyConnect', 'CCNP Secure VPN specialization'],
	},
	{
		name: 'Network Security',
		icon: 'security',
		level: 99,
		xp: '13,034,431',
		details: ['AAA · 802.1x · Cisco TrustSec', 'Cisco ISE · ForeScout', 'STIGs · segmentation'],
	},
	{
		name: 'Cisco SD-Access',
		icon: 'fabric',
		level: 99,
		xp: '13,034,431',
		details: ['Catalyst Center', 'Fabric sites · border & edge nodes', 'Enterprise SDA operations'],
	},
	{
		name: 'Automation',
		icon: 'automation',
		level: 99,
		xp: '13,034,431',
		details: ['Ansible · NETCONF', 'Python · PowerShell', 'C · C++ · JavaScript · SQL'],
	},
	{
		name: 'Cloud',
		icon: 'cloud',
		level: 99,
		xp: '13,034,431',
		details: ['AWS & Azure deployments', 'Cloud-hosted security tooling', 'Nginx · Docker'],
	},
	{
		name: 'Security Operations',
		icon: 'troubleshoot',
		level: 99,
		xp: '13,034,431',
		details: ['Nessus · Microsoft Sentinel', 'Trellix · T-Pot honeypots', 'Wireshark · packet analysis'],
	},
	{
		name: 'Systems',
		icon: 'systems',
		level: 99,
		xp: '13,034,431',
		details: ['Active Directory · SCCM · O365', 'VMware · Docker', 'SolarWinds monitoring'],
	},
	{
		name: 'Data Center Networking',
		icon: 'homelab',
		level: 62,
		xp: '333,804',
		next: '368,599',
		details: ['In training — working toward CCNP DC', 'Spine-leaf · VXLAN · EVPN'],
	},
];

export interface Cert {
	name: string;
	status: 'completed' | 'in-progress' | 'planned';
	year?: string;
	note?: string;
}

export const CERTS: Cert[] = [
	{
		name: 'CCNP Security — SCOR 350-701 + SVPN 300-730',
		status: 'completed',
		year: 'July 2025',
		note: 'DoD 8570.01-M IAT Level III',
	},
	{
		name: 'CCNA — Cisco Certified Network Associate',
		status: 'completed',
		year: 'July 2024',
	},
	{
		name: 'CompTIA Security+',
		status: 'completed',
		year: 'October 2023',
		note: 'DoD 8570.01-M IAT Level II',
	},
];

export const EDUCATION = {
	degree: 'B.S. Computer Science',
	details: 'Cybersecurity concentration · Physics minor',
	school: 'High Point University',
	where: 'High Point, NC',
	years: '2018 – 2022',
};

export interface Project {
	name: string;
	kicker: string; // "LAB-01 · Azure" style line above the title
	description: string;
	outcome: string; // the "→ result" line
	url: string;
	tags: string[];
}

// Pulled from github.com/DeclanMWorley + resume "Technical Projects".
export const PROJECTS: Project[] = [
	{
		name: 'Nessus vulnerability scanner on a live network',
		kicker: 'LAB-01 · Nessus',
		description:
			'Configured Nessus to run vulnerability assessments against a live network, then wired the scans into a security-operations workflow.',
		outcome: 'Automated detection and prioritization, with remediation reports',
		url: 'https://github.com/DeclanMWorley/VulnerabilityScannerLab',
		tags: ['Nessus', 'VulnMgmt'],
	},
	{
		name: 'Cloud-hosted password manager',
		kicker: 'LAB-02 · AWS',
		description:
			'Deployed Passbolt behind Nginx on AWS with modern encryption standards, MFA, and strict access-control policies.',
		outcome: 'Hardened credential storage, MFA-gated access only',
		url: 'https://github.com/DeclanMWorley/PasswordMangerHostedinCloud',
		tags: ['AWS', 'Passbolt', 'Nginx'],
	},
	{
		name: 'T-Pot honeypot in Azure',
		kicker: 'LAB-03 · Azure',
		description:
			'Deployed a multi-sensor T-Pot honeypot on Azure to watch real attacks land — tracking attack vectors and analyzing malware activity.',
		outcome: 'Live attack telemetry feeding refined detection measures',
		url: 'https://github.com/DeclanMWorley/Honeypot-Hosted-in-Azure-Cloud',
		tags: ['Azure', 'T-Pot'],
	},
	{
		name: 'Microsoft Sentinel SIEM deployment',
		kicker: 'LAB-04 · Sentinel',
		description:
			'Stood up Microsoft Sentinel with custom analytics rules, then ran simulated attack scenarios against it to test the monitoring.',
		outcome: 'Proactive threat detection with faster remediation times',
		url: 'https://github.com/DeclanMWorley/MicrosoftSentinelSIEMDeployment',
		tags: ['Azure', 'Sentinel', 'SIEM'],
	},
	{
		name: 'AI-enhanced SIEM incident management',
		kicker: 'LAB-05 · Sentinel + AI',
		description:
			'Integrated ChatGPT into Microsoft Sentinel to automate incident enrichment during triage.',
		outcome: 'Faster, more accurate threat identification and response',
		url: 'https://github.com/DeclanMWorley/ChatGPT-Integration-Microsoft-Sentinel',
		tags: ['Sentinel', 'AI', 'SOAR'],
	},
];

export interface Experience {
	role: string;
	org: string;
	where: string;
	when: string;
	summary: string; // one-liner shown in the timeline
}

export const EXPERIENCE: Experience[] = [
	{
		role: 'NetOps Specialist (Mid/Senior)',
		org: 'Avening MTS · Leidos NGEN-R SMIT',
		where: 'MCBH Kaneohe Bay, HI',
		when: '2025 — 26',
		summary:
			'300+ devices on the MCEN. Resolved years-old routing and IKEv1/ISAKMP tunnel issues, led 802.1x troubleshooting with ISE and ForeScout, and ran SD-Access fabric provisioning in Catalyst Center with Ansible/NETCONF.',
	},
	{
		role: 'IT Specialist',
		org: 'Avening MTS · Leidos NGEN-R SMIT',
		where: 'MCBH Kaneohe Bay, HI',
		when: '2024 — 25',
		summary:
			'Asset integration and 802.1x hardening across NIPR and SIPR. PowerShell automation, Active Directory, SCCM, and Trellix endpoint security to DoD standards.',
	},
	{
		role: 'IT Assistant',
		org: 'Triad Math and Science Academy',
		where: 'Greensboro, NC',
		when: '2015 — 18',
		summary:
			'Campus network administration — device installs, firewall updates, and connectivity troubleshooting across the school.',
	},
];

// Clubs, teams, and other non-employment experience — shown separately.
export const OTHER_EXPERIENCE: Experience[] = [
	{
		role: 'CTF Team Member — PantherSec',
		org: 'High Point University (club)',
		where: 'High Point, NC',
		when: '2019 — 22',
		summary:
			'Led the team in CTF competitions — 57th worldwide in DarkCTF 2021. Trained members on Wireshark, Burp Suite, OSINT, and Metasploit; authored exploitation write-ups.',
	},
];

// Difficulty scale used for write-ups (set `difficulty` in a post's frontmatter).
export const DIFFICULTIES = ['Beginner', 'Intermediate', 'Advanced', 'Expert'] as const;
