export type Experience = {
	role: string;
	organization: string;
	location: string;
	dates: string;
	summary: string;
	points: string[];
};

export const experiences: Experience[] = [
	{
		role: 'Staff Engineer',
		organization: 'Care1 Telemedicine',
		location: 'Vancouver, British Columbia',
		dates: 'Oct 2016 – Present',
		summary:
			'Joined as the first full-time engineer and later moved into a staff role, responsible for the clinical web platform used by optometrists and ophthalmologists.',
		points: [
			'Rebuilt the older Django and jQuery product in React and Redux and moved it onto AWS.',
			'Led a new backend and database design. The system grew past 50,000 patients and 150,000 exams, with background work handled by Celery and Redis.',
			'Shipped a separate clinic app for ordering contact lenses, including card payments, and ran it in Docker on AWS.',
			'Split newer features into EC2, ECS, and Lambda services, and connected clinics to Zeiss FORUM through an event-driven integration.',
			'Stopped a pattern of daily outages caused by resource limits, and reduced cloud and database cost by removing unused capacity.',
			'Hired and coached more than ten developers, facilitated Scrum, and worked with an ophthalmologist on diagnostic logic for images and clinical text. Later added large language models to the platform.',
		],
	},
	{
		role: 'Senior Software Developer',
		organization: 'Willowglen Systems',
		location: 'Edmonton, Alberta',
		dates: 'Mar 2016 – Oct 2016',
		summary: 'Built supervisory control software on Red Hat Linux with Qt.',
		points: [
			'Compared OPC servers and client libraries and recommended which one the project should buy.',
			'Added an OPC client to the existing SCADA application, and encouraged unit tests with Google Test.',
		],
	},
	{
		role: 'Senior Software Developer',
		organization: 'Mobile Data Technologies',
		location: 'Acheson, Alberta',
		dates: 'Jan 2014 – Feb 2016',
		summary:
			'Designed oilfield data-acquisition software, from operator screens to real-time controller code.',
		points: [
			'Built WinForms screens for hydraulic-fracturing stages, then a later WPF version organized with MVVM.',
			'Extended C++ controllers for chemical pumps, mixers, and engines over hardware I/O and CAN bus.',
			'Defined JSON messages between controllers and screens, stored the data in MySQL, and introduced NUnit while mentoring newer developers.',
		],
	},
	{
		role: 'Advanced Developer',
		organization: 'GE Intelligent Platforms',
		location: 'Edmonton, Alberta',
		dates: 'Jun 2000 – Dec 2013',
		summary:
			'Spent thirteen years on tools for industrial controllers, starting as a software engineer and later leading and mentoring a team. The group was formerly Total Control Products.',
		points: [
			'Built features in a Windows IDE for programming PLCs and industrial controllers on Windows NT and Windows CE.',
			'Led one team on the next configuration product in an Agile group, then shifted into mentoring developers on PLC requirements.',
			'Designed a later version of that tool for Windows Azure, with supporting services in ASP.NET MVC.',
		],
	},
];
