import profile from "./50316081.jpeg";
import {
	faGithub,
	faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faGlobe } from "@fortawesome/free-solid-svg-icons";

export const navigation = {
	name: "Parthkumar Khant",
	links: [],
};
export const intro = {
	title: "Hey, I'm Parthkumar",
	description:
		"Full Stack, Node.js & React.js Developer",
	image: profile.src,
	buttons: [
		{
			title: "Contact Me",
			link: "#contact",
			isPrimary: true,
		},
		{
			title: "Resume",
			link: "https://docs.google.com/document/d/1Y9mQS8jBaAt504fk7Iu5ZlUZUh-i2n7EFIafNz_k6Q4/edit?usp=sharing",
			isPrimary: false,
		},
	],
};

export const about = {
	title: "Who I am",
	description: [
		"I'm a passionate Full Stack web developer having an experience of developing Full Stack web applications with Node.js, React.js, Cloud Technologies. I have a strong interest in learning new technologies and implementing them in my projects. I'm a self-motivated and hardworking individual who is always ready to learn new things and work in a team.",
		"I am specialized in developing Full Stack Websites, Backend APIs."
	],
};

export const work = {
	title: "What I do",
	isIconify: true,
	cards: [
		{
			title: "Full Stack Development",
			description:
				"I create full stack SPAs, REST APIs, Websockets using Node.js & React.js.",
			icons: [
				"logos:node",
				"logos:react",
				"logos:typescript-icon",
				"logos:mongodb-icon",
			],
		},
		{
			title: "Cloud Infra-Architecture",
			description:
				"I deployee and configured sites on different Cloud Servers",
			icons: [
				"logos:aws",
				"logos:docker-icon",
				"logos:heroku-icon",
				"logos:vercel-icon",
			],
		},
		{
			title: "UI UX Development",
			description:
				"I create Smart designs for landing page websites",
			icons: [
				"logos:figma"
			],
		},
	],
};

export const projects = {
	title: "Projects",
	cards: [
		{
			title: "Developer Portfolio",
			description:
				"Software Developer Portfolio Template that helps you showcase your work and skills as a software developer.",
			icons: [
				{
					icon: faGlobe,
					link: "https://khantparthkumar.github.io",
				},
			],
		},
		{
			title: "Firecamp",
			description:
				" API platform for your favorite API-style. Yes, you heard it right, You can run, test, collaborate to build Any Kind Of APIs",
			icons: [
				{
					icon: faGlobe,
					link: "https://firecamp.io",
				}
			],
		},
		{
			title: "Holy Reads",
			description:
				`Read, listen, or watch summaries of your favorite books on multiple devices – offline or online, anytime and anywhere.`,
			icons: [
				{
					icon: faGlobe,
					link: "https://holyreads.com",
				},
			],
		},
		{
			title: "Alinea Invest",
			description:
				`Alinea is a socially responsible investing platform. We offer fractional investing, $0 commission on investments, and a minimum as low as $1.`,
			icons: [
				{
					icon: faGlobe,
					link: "https://www.alinea-invest.com/",
				},
			],
		},
		{
			title: "Sangam Web",
			description:
				`Sangam is a collective that helps all those committed towards the Constitutional vision of India,
				discover and act upon their politics
		 `,
			icons: [
				{
					icon: faGlobe,
					link: "https://sarvodayasangam.com ",
				},
			],
		},
	],
};

export const contact = {
	title: "Reach Out to me!",
	description:
		"DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL",
	icons: [
		{
			icon: faLinkedin,
			link: "https://www.linkedin.com/in/parthkumar-khant-8765b5130/",
		},
		{
			icon: faGithub,
			link: "https://github.com/KhantParthkumarA",
		},
		{
			icon: faEnvelope,
			link: "mailto:parthkhant1@gmail.com",
		},
	],
};
// SEARCH ENGINE
export const SEO = {
	title: "Parthkumar Khant",
	description:
		"A passionate Full Stack Web Developer",
	author: "Parthkumar Khant",
	image: profile.src,
	url: "https://parthkumar.github.io",
	keywords: [
		"Hanzla",
		"Parthkumar Khant",
		"@1hanzla100",
		"1hanzla100",
		"Portfolio",
		"Hanzla Portfolio ",
		"Parthkumar Khant Portfolio",
	],
};
