export interface Faq {
	question: string;
	answer: string;
}

/** Source of truth for the FAQ section, Ticket 13. */
export const faqs: Faq[] = [
	{
		question: 'Who is organizing this event?',
		answer:
			'The event is co-organized by the AWS Student Builder Group at University of the Philippines Mindanao and the AWS Student Builder Group Apex at Ateneo de Davao University.',
	},
	{
		question: 'What is the theme of AWS SCD Mindanao 2026?',
		answer:
			'The theme is "Build Beyond. Dream Limitless." with the core tagline "Cultivating the Next Generation of Builders."',
	},
	{
		question: 'Who can attend the conference?',
		answer:
			'While primarily geared toward university students, tech enthusiasts, engineering majors, IT student leaders, academic faculty, and industry practitioners across Mindanao are welcome to attend.',
	},
	{
		question: 'How can I contact the event organizers?',
		answer:
			'You can reach the organizing team via email at awscc.upmindanao@gmail.com or awssbg.addu@gmail.com.',
	},
];
