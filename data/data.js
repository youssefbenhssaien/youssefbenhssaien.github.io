const data = {
    profile: {
        title: 'Hi, My Name is Youssef BENHSSAIEN',
        introduction: 'Senior Full-Stack PHP/Javascript Developer, a PHP enthusiast, and a guy slighty obsessed for code quality.',
        picture: 'assets/img/profile_photo.jpg',
    },
    cvs: [
        { label: 'EN', href: '/data/cv/cv_en.pdf', img: '/assets/img/lang/en.png' },
        { label: 'FR', href: '/data/cv/cv_fr.pdf', img: '/assets/img/lang/fr.png' },
    ],
    experiences: [
        { label: 'Linkedin', href: 'https://www.linkedin.com/in/youssefbenhssaien/#experience-section', img: '/assets/img/social/linkedin-16.png' },
        { label: 'Stackoverflow', href: 'https://stackoverflow.com/story/youssef.benhssaien', img: '/assets/img/social/stack-overflow-16.png' },
    ],
    services: [
        { label: 'Back-end', description: 'Utilising php frameworks such as Symfony or creating bespoke code, I\'ve written services supporting thousands of users, including REST APIs, e-learning applications and more.', img: 'assets/img/back-end.svg', alt: 'Back End Developer' },
        { label: 'Front-end', description: 'As a javascript developer, I have experience in HTML5 and CSS3 techniques working with jQuery or more advanced javascript frameworks such as VueJs/ReactJs/Angular', img: 'assets/img/front-end.svg', alt: 'Front End Developer' },
        { label: 'Problem Solving', description: 'As a senior developer, solving problems needs more than writing code and getting results.<br />Design patterns, software architecture, performance, budget, target and understanding the big picture what yield results', img: 'assets/img/consultancy.svg', alt: 'Coding' },
    ],
    certifs: [
        { label: 'Zend Certified PHP Engineer (2017-PHP)', img: '/assets/img/certif/certif-php.gif', href: 'https://www.zend-zce.com/en/yellow-pages/ZEND032239' },
        { label: 'Symfony 5 Certified Developer', img: '/assets/img/certif/certif-symfony.png', href: 'https://connect.symfony.com/profile/moghreb' },
        { label: 'The Professional Scrum Master I (PSM I) ', img: '/assets/img/certif/certif-psmi.svg', href: 'https://www.scrum.org/user/345856' },
        { label: 'GitLab Certified Associate', img: '/assets/img/certif/certif-gitlab.png', href: 'https://badgr.com/public/assertions/ccH_dcC1T7eFD2MuGsu6_Q?identity__email=youssef.benhssaien@gmail.com' },
    ],
    skills : [
        { label: 'PHP', level: 90 },
        { label: 'MySQL', level: 70 },
        { label: 'Javascript', level: 70 },
        { label: 'Git', level: 70 },
        { label: 'HTML/CSS', level: 70 },
        { label: 'Docker', level: 50 },
    ],
    enterprises : [
        { href: 'https://atos.net', img: 'https://atos.net/wp-content/themes/atos/images/atos-logo-menu-bar.png' },
        { href: 'https://www.capgemini.com', img: 'https://www.capgemini.com/wp-content/themes/capgemini-komposite/assets/images/logo.svg' },
        { href: 'https://www.avito.ma', img: 'https://www.avito.ma/img/logo-rbnd.png' },
        { href: 'https://www.cgi.com', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/CGI_logo.svg/1200px-CGI_logo.svg.png' },
        { href: 'https://www.open.global', img: 'https://www.open.global/sites/all/themes/opengroupe_t/assets/img/logo_@2x.png' },
        { href: 'https://www.ausy.fr', img: '/assets/img/enterprises/ausy.png' },
        { href: 'https://www.al-enterprise.com', img: 'https://web-assets.al-enterprise.com/-/media/assets/internet/images/h-to-m/logo.png' },
        { href: 'https://www.laposte.fr', img: '/assets/img/enterprises/laposte.png' },
        { href: 'https://www.soprasteria.com', img: 'https://www.soprasteria.com/ResourcePackages/Bootstrap4/assets/dist/logos/logo-soprasteria.png' },
        { href: 'https://www.docaposte.com', img: '/assets/img/enterprises/docaposte.png' },
        { href: 'https://www.groupama.com/fr/fiche/groupama-supports-et-services', img: 'https://www.groupama.com/wp-content/themes/lp-theme/static/img/logo.png' },
        { href: 'https://bananacloud.fr', img: '/assets/img/enterprises/bananacloud.png' },
        { href: 'https://www.fnac.com', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Fnac_Logo.svg/1200px-Fnac_Logo.svg.png' },
        { href: 'https://www.orange.fr', img: 'https://c.woopic.com/logo-orange.png' },
    ],
    stats: [
        { label: 'Years Experience', count: Math.floor((Date.now() - new Date('03-03-2014'))/1000/60/60/24/365)},
        { label: 'professional Projects', count: 23 },
        { label: 'Personal projects', count: 16 },
        { label: 'Open source projects', count: 3 },
    ],
    contacts: [
        { label: 'E-mail', img: 'assets/img/social/gmail.png', href: 'mailto:youssef.benhssaien@gmail.com?subject=From youssefbenhssaien.me' },
        { label: 'Linkedin', img: 'assets/img/social/linkedin.png', href: 'https://www.linkedin.com/in/youssefbenhssaien' },
        { label: 'Github', img: 'assets/img/social/github.png', href: 'https://github.com/ybenhssaien' },
        { label: 'Medium', img: 'assets/img/social/medium.png', href: 'https://youssefbenhssaien.medium.com' },
        { label: 'Stackoverflow', img: 'assets/img/social/stack-overflow.png', href: 'https://stackoverflow.com/story/youssef.benhssaien' },
        { label: 'Twitter', img: 'assets/img/social/twitter.png', href: 'https://twitter.com/ysfbenhssaien' },
        { label: 'Dev.to', img: 'assets/img/social/devto.png', href: 'https://dev.to/ybenhssaien' },
        { label: 'Instagram', img: 'assets/img/social/instagram.png',  href: 'https://www.instagram.com/youssef.benhssaien' },
    ],
    experiences: [
        {
            client: {
                name: 'Orange (Devrap)',
            },
            mission: {
                location: 'Toulouse - France (Full Remote)',
                period: { start: 'September 2021', end: 'November 2021'},
                title: 'Senior PHP developer',
                description: 'Within the CCPHP (PHP Competencies Center) Team',
            },
            tasks: [
                'Applications audit',
                'Support for PHP developers',
                'Prepare the version 2.0 of EPO (21 bundles) based on the 5.4 Symfony\'s version',
                'Documentation',
            ],
            tags: {
                'Technical environment': {
                    PHP : ['7.3'],
                    Symfony : ['4.4', '5.4'],
                    Doctrine : ['2.x'],
                    Mysql: ['5.7'],
                    'EPO (Ecosystem PHP Orange)' : ['1.0', '2.0'],
                    Apache: ['2.4'],
                    Gitlab: [],
                    Docker: [],
                },
            },
        },
        {
            client: {
                name: 'Orange (DSI)',
            },
            mission: {
                location: 'Toulouse - France (Full Remote)',
                period: { start: 'September 2020', end: 'June 2021'},
                title: 'Senior Full-stack developer',
                description: '',
            },
            tasks: [
                'Maintain Front part of FiberControl application',
                'Maintain with team Backend part',
                'Integrate a new IHM along with a new system for data result filters',
                'Integrate front ACL rights management managed in the control panel (web service)',
                'Development of new PHP module to fetch an elastic search data (~150000 data)',
            ],
            tags: {
                'Technical environment': {
                    PHP : ['7.3'],
                    VueJs : ['2.6'],
                    Yarn : ['1.25'],
                    NodeJs : ['12.18'],
                    Mysql: ['5.7'],
                    ZendFramework : ['2.5'],
                    'OFT (Orange Framework)': ['4.6'],
                    Apache: ['2.4'],
                    Gitlab: [],
                },
                Methodology: ['SAFe', 'SCRUM'],
                Architecture: ['Monolothic'],
            },
        },
        {
            client: {
                name: 'Orange (Devrap)',
            },
            mission: {
                location: 'Toulouse - France (On-site + Full Remote)',
                period: { start: 'June 2019', end: 'July 2020'},
                title: 'Senior PHP developer',
                description: '',
            },
            tasks: [
                'Migrations of 7 applications to php 7.1 (from php 5.2, 5.4, 5.6)',
                'Management and development of functional changes in an SCRV finance application which manages campaigns to validate Orange offers.',
                'Development and maintenance of a finance application (CIFRA Reporting',
                'Recreating an HR application (ATEA) which manages the international mobility of Orange employees (Symfony 4.4.8 | PHP 7.3)',
                'Development from scratch of an HR application (WelcomeByeBye) which manages the monitoring of national mobility of Orange employees and email notifications to various managers (Symfony 4.4.10 | PHP 7.4)',
            ],
            tags: {
                'Technical environment': {
                    PHP : ['5.2', '5.4', '5.6', '7.1', '7.2', '7.3', '7.4'],
                    Symfony : ['4.4'],
                    Doctrine : ['2.x'],
                    'EPO (Ecosystem PHP Orange)' : ['1.0-beta'],
                    ZendFramework : ['1.10', '1.12', '2.4'],
                    'OFT (Orange Framework)': ['1.1', '2.2', '3.1'],
                    Mysql: ['5.7'],
                    Apache: ['2.2', '2.4'],
                    Nginx: ['1.15'],
                    Gitlab: [],
                    Docker: [],
                    Cloud: ['Cloudfoundry Paas'],
                },
                Architecture: ['Monolothic'],
            },
        },
        {
            client: {
                name: 'Banana cloud',
                logo: '/assets/img/enterprises/bananacloud.png',
                logo_style: 'height: 50px',
            },
            mission: {
                location: 'Grasse - France',
                period: { start: 'April 2019', end: 'May 2019'},
                title: 'PHP developer',
                description: 'Jungelvet.fr an e-commerce website offers animals products for sale, the website is composed by 2 parts (Front in Prestashop + Centrale in Laravel [API web services REST + Administration])',
            },
            tasks: [
                'Partial overhaul and improvement of the API code to support multi-supplier and multi-warehouse orders.',
                'Integration of a new coveto supplier',
                'Integration of elasticsearch on the administration part for product display.\n',
                'Integration of the placing of orders with 2 suppliers',
                'Redesign of the php scripts for importing catalogs from supplier csv and xml files by FTP',
                'Setting up a git workflow to support versions.',
                'Impact analyzes and costing of changes',
            ],
            tags: {
                'Technical environment': {
                    PHP : ['7.1', '7.3'],
                    Laravel : ['5.7'],
                    Prestashop : ['1.7'],
                    Elasticsearch: ['6.4'],
                    Mongodb: ['3.6'],
                    Mysql: ['5.7'],
                    Gitlab: [],
                    Docker: [],
                },
                'Operating System': ['MacOs 10.13', 'Debian 9.8'],
            },
        },
        {
            client: {
                name: 'GROUPAMA SUPPORTS & SERVICES',
            },
            mission: {
                location: 'Montpellier - France',
                period: { start: 'July 2018', end: 'February 2019'},
                title: 'Advanced PHP developer',
                description: 'Develop a new platform from scratch to regroup old workflows to manage network demands.',
            },
            tasks: [
                'Needs study',
                'Develop micro-services basics architecture',
                'Develop general platform to require all old workflows who manage network demands.',
                'Integrate IP service workflow who manage DNS, Switch et Cablage. ',
                'Write SFD',
                'Manage the project time',
            ],
            tags: {
                'Technical environment': {
                    PHP : ['7.1'],
                    Symfony : ['4.1'],
                    Apache: ['2.4'],
                    Mysql: ['5.6', '5.7'],
                    Gitlab: [],
                },
                'Operating system': ['Windows 7', 'RedHat 7.5'],
            },
        },
        {
            client: {
                name: 'OPEN groupe',
                logo: 'https://www.open.global/sites/all/themes/opengroupe_t/assets/img/logo_@2x.png',
                logo_style: 'height: 50px',
            },
            mission: {
                location: 'Aix-en-provence - France',
                period: { start: 'January 2018', end: 'April 2018'},
                title: 'Advanced Full-Stack developer',
                description: '',
            },
            tasks: [
                'Develop a web application to suggest security quiz for the new candidates',
            ],
            tags: {
                'Technical environment': {
                    PHP : ['7.0'],
                    Symfony : ['4.0'],
                    Apache: ['2.4'],
                    Angular: ['5.1'],
                    TypeScript: ['2.4'],
                    Firebase: [],
                    Bitbucket: [],
                },
                'Operating system': ['Windows 10'],
                API: ['REST + JSON', 'Session token']
            },
        },
        {
            client: {
                name: 'DOCAPOST',
                logo: '/assets/img/enterprises/docaposte.png',
                logo_style: 'height: 50px',
            },
            mission: {
                location: 'Aix-en-provence - France',
                period: { start: 'January 2018', end: '(1 week)'},
                title: 'Advanced Full-Stack developer',
                description: 'Automatize an existing web application to manage virtual hosts hosted on vMware.',
            },
            tasks: [
                'Analyse and develop a prototype to retrieve dynamically information about hosted machines from vMware by web services',
            ],
            tags: {
                'Technical environment': {
                    Python : ['2.7'],
                    AdonisJs : [],
                    Pyvmomi : [],
                    Redis: [],
                    Angular: ['4.x'],
                    TypeScript: ['2.4'],
                    NodeJs: ['6.x'],
                    Firebase: [],
                    Gitlab: [],
                    vMware: ['vSphere'],
                    Ansible: [],
                },
                'Operating system': ['Centos 6'],
            },
        },
        {
            client: {
                name: 'Sopra Steria',
                logo: 'https://www.soprasteria.com/ResourcePackages/Bootstrap4/assets/dist/logos/logo-soprasteria.png',
            },
            mission: {
                location: 'Aix-en-provence - France',
                period: { start: 'October 2017', end: 'November 2017'},
                title: 'Advanced PHP developer',
                description: 'Projects (Conseil de développement / Engagés au quotidien (EAQ) / Site internet / Portails / Devis maintenance / OSIS / Parking hub / Mobiles services.)',
            },
            tasks: [
                'Configure and fix Solr indexation',
                'Update STD.',
                'Analyse OSIS and databases performances and fix the reported bugs.',
                'Fix supervision scripts on Jenkins. ',
                'Maintain different applications',
                'Configure and install virtual hosts for qualification environment.',
                'Upgrade Joomla from 3.4.8 to 3.6.4',
            ],
            tags: {
                'Technical environment': {
                    PHP : ['5.3', '5.6', '7.1'],
                    Symfony : ['2.3', '3.3'],
                    Joomla : ['2.5', '3.4', '3.6'],
                    Apache: ['2.2', '2.4'],
                    Mysql: ['5.5', '5.6'],
                    PostgreSQL: ['10.1'],
                    SVN: [],
                    Solr: ['5.1'],
                    Jenkins: ['1.631'],
                    vMware: ['vSphere'],
                },
            },
        },
        {
            client: {
                name: 'La poste',
                logo: '/assets/img/enterprises/laposte.png',
                logo_style: 'height: 50px',
            },
            mission: {
                location: 'Casablanca - Morocco',
                period: { start: 'December 2016', end: 'September 2017'},
                title: 'Advanced Research and Development Engineer',
                description: 'Evolving maintenance of the OREST-WT (module U1) application which offers a REST XML API allows to return the data related to the path of the parcels towards its recipients according to the rules of the API consumers.Projects (Conseil de développement / Engagés au quotidien (EAQ) / Site internet / Portails / Devis maintenance / OSIS / Parking hub / Mobiles services.)',
            },
            tasks: [
                'Upgrade PHP from 5.3 to 5.6',
                'Upgrade Zend framework to 1.12.20 version',
                'Refactore shell script to split MySQL tables into dynamic partitions each month',
                'Maintain web services',
            ],
            tags: {
                'Technical environment': {
                    PHP : ['5.3', '5.6'],
                    ZendFramework : ['1.12'],
                    Apache: ['2.2', '2.4'],
                    Mysql: ['5.x'],
                    SVN: [],
                },
                API: ['REST + XML'],
                Tools: ['Jira', 'Confluence'],
                Communication: {
                    French: ['Spoken', 'Written'],
                },
            },
        },
        {
            client: {
                name: 'Avito.ma (Schibsted Media Group)',
                logo: 'https://www.avito.ma/img/logo-rbnd.png',
                logo_style: 'height: 50px',
            },
            mission: {
                location: 'Casablanca - Morocco',
                period: { start: 'November 2015', end: 'November 2016'},
                title: 'Full-Stack Web Developer',
                description: 'Suggest, Analyse, Design, Develop and Maintain paid services for the classified ads website Avito.ma to ameliorate the website revenues.',
            },
            tasks: [
                'Design functional and technical specifications for new paid products. ',
                'Design and develop database architecture to manage paid services and payment transactions',
                'Develop new paid products from the data storage into the UX integration',
                'Develop and integrate new payment methods (Credit Card, SMS, Cash)',
                'Production supervision',
            ],
            tags: {
                'Technical environment': {
                    PHP : ['5.x'],
                    Symfony : ['2.x'],
                    Apache: ['2.x'],
                    Redis: [],
                    C: [],
                    'Blocket Templating Language': [],
                    PostgreSQL: [],
                    Github: [],
                },
                API: ['REST + JSON', 'Session Token', 'MD5'],
                Cloud: ['AWS'],
                Tools: ['Jira', 'Confluence', 'Optimizely'],
                Communication: {
                    English: ['Spoken', 'Written'],
                    French: ['Written'],
                },
            },
        },
        {
            client: {
                name: 'Alcatel-Lucent',
                logo: 'https://web-assets.al-enterprise.com/-/media/assets/internet/images/h-to-m/logo.png',
                logo_style: 'height: 50px',
            },
            mission: {
                location: 'Casablanca - Morocco',
                period: { start: 'October 2014', end: 'November 2015'},
                title: 'Software Engineer',
                description: 'Develop a new cloud application named "Business Store" which manage the subscriptions on cloud solutions for the company Alcatel-Lucent',
            },
            tasks: [
                'Define client needs and write a Functional Specifications Document (SFD) before starting the development. ',
                'Develop and maintain the new cloud application.',
                'Develop Web Services APIs.',
                'Functional and cross test every sprint closure',
                'Write user guide for the usage of developed application.',
            ],
            tags: {
                'Technical environment': {
                    PHP : ['5.x'],
                    Symfony : ['2.x'],
                    Doctrine : [],
                    Apache: ['2.x'],
                    PostgreSQL: [],
                    Gitlab: [],
                },
                API: ['REST + JSON', 'Session Token'],
                Tools: ['Redmine'],
                Communication: {
                    French: ['Spoken', 'Written'],
                    English: ['Written'],
                },
            },
        },
        {
            client: {
                name: 'La FNAC',
                logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Fnac_Logo.svg/1200px-Fnac_Logo.svg.png',
                logo_style: 'height: 100px',
            },
            mission: {
                location: 'Casablanca - Morocco',
                period: { start: 'September 2014', end: 'October 2014'},
                title: 'Junior Research and Development Engineer',
                description: '',
            },
            tasks: [
                'Maintain an application managing service after sell (SAVTEK) for the french retail chain selling FNAC.',
            ],
            tags: {
                'Technical environment': {
                    PHP : ['5.x'],
                    Apache: ['2.x'],
                    Oracle: ['3.2'],
                    Smarty: [],
                    SVN: [],
                    Shell: [],
                },
                Communication: {
                    French: ['Spoken', 'Written'],
                },
            },
        },
        {
            client: {
                name: 'La FNAC',
                logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Fnac_Logo.svg/1200px-Fnac_Logo.svg.png',
                logo_style: 'height: 100px',
            },
            mission: {
                location: 'Casablanca - Morocco',
                period: { start: 'March 2014', end: 'September 2014'},
                title: 'Intern Research and Development Engineer',
                description: '',
            },
            tasks: [
                'Maintain an application managing service after sell (SAVTEK) for the french retail chain selling FNAC.',
            ],
            tags: {
                'Technical environment': {
                    PHP : ['5.x'],
                    Apache: ['2.x'],
                    Oracle: ['3.2'],
                    Smarty: [],
                    SVN: [],
                    Shell: [],
                },
                Communication: {
                    French: ['Spoken', 'Written'],
                },
            },
        },
        {
            client: {
                name: 'Megadata',
            },
            mission: {
                location: 'Tetouan - Morocco',
                period: { start: 'April 2012', end: 'June 2012'},
                title: 'Intern PHP Developer',
                description: '',
            },
            tasks: [
                'Concept and develop an application for hotel reservation from internet and local access.',
            ],
            tags: {
                'Technical environment': {
                    PHP : ['5.x'],
                    Apache: ['2.x'],
                    MySQL: [],
                },
            },
        },
    ],
};
