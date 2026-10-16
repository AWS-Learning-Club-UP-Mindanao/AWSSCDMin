export interface Faq {
	question: string;
	answer: string;
}

/** Source of truth for the FAQ section, Ticket 13. */
export const faqs: Faq[] = [
	{
		question: 'What is AWS Student Community Day Mindanao 2026?',
		answer:
			'AWS Student Community Day Mindanao 2026 is the premier student-led cloud technology conference in Mindanao. It brings together over 200–300+ students, educators, industry professionals, and cloud enthusiasts for technical workshops, keynotes, panel discussions, and hands-on competitions focused on cloud computing, artificial intelligence, and cybersecurity.',
	},
	{
		question: 'When and where will the event take place?',
		answer:
			'The conference will take place on November 28, 2026. The venue is located in Davao City (specific venue location to be announced).',
	},
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
