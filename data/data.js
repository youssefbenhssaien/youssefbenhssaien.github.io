const data = {
    title: 'Senior Full Stack PHP/Javascript Developer',
    introduction: '$ Hello !<br/>' +
        '$ I\'m <b>Youssef BENHSSAIEN.</b><br/>' +
        '$ <b>Symfony</b> 5/6 and <b>PHP</b> 7 certified with 10+ years of web development experience with a career spanning 14 years in PHP.<br/>' +
        '$ I am committed to delivering innovative solutions and tackling challenges with creativity and precision.<br/>' +
        '$ Passionate about crafting innovative solutions and seeking new challenges to grow further in the field.',
    location: 'Toulouse, France',
    cvs: [
        { label: 'EN', href: 'mailto:youssef.benhssaien@gmail.com?subject=From youssefbenhssaien.me - CV download', img: '/assets/img/lang/en.png' },
        { label: 'FR', href: 'mailto:youssef.benhssaien@gmail.com?subject=Source youssefbenhssaien.me - demande de CV', img: '/assets/img/lang/fr.png' },
    ],
    services: [
        { label: 'Backend', description: 'My experience focuses on <b>PHP</b> and <b>Symfony</b> development, where I specialize in creating robust and scalable server-side solutions.<br/>With a deep understanding of database management and employing software architecture principles such as <b>microservices</b> and <b>hexagonal</b> architecture, I ensure seamless functionality and optimal performance for web applications.<br/>From designing efficient <b>APIs</b> to implementing complex business logic, I am dedicated to delivering backend systems that meet the highest standards of reliability and efficiency.', img: 'assets/img/back-end.svg', alt: 'Back End Developer' },
        { label: 'Frontend', description: 'On the frontend, I excel in crafting engaging user experiences through cutting-edge technologies such as <b>HTML</b>, <b>CSS</b> (including frameworks such as <b>Bootstrap</b> and <b>TailwindCss</b>), and <b>JavaScript</b> frameworks like <b>Vue</b> and <b>React</b>.<br/>With a keen eye for design and usability, I transform concepts into visually stunning and intuitive interfaces.<br/>From responsive layouts to interactive elements, I focus on delivering frontend solutions that captivate users and elevate the overall user experience.', img: 'assets/img/front-end.svg', alt: 'Front End Developer' },
        { label: 'Problem Solving', description: 'Beyond coding, I thrive on solving <b>complex</b> problems and overcoming technical challenges.<br/>Whether it\'s <b>optimizing performance</b> bottlenecks, troubleshooting <b>bugs</b>, or <b>refactoring</b> and <b>migrating</b> from legacy to new technologies, I approach every obstacle with a strategic mindset and a relentless drive for excellence.<br/>Through effective problem-solving techniques and a collaborative approach, I ensure that projects are <b>delivered on time</b> and exceed expectations.', img: 'assets/img/consultancy.svg', alt: 'Coding' },
    ],
    certifs: [
        { label: 'Zend Certified PHP Engineer (2017-PHP)', img: '/assets/img/certif/certif-php.gif', href: 'https://www.zend-zce.com/en/yellow-pages/ZEND032239' },
        { label: 'Symfony 5 Certified Developer', img: '/assets/img/certif/certif-symfony.png', href: 'https://connect.symfony.com/profile/moghreb' },
        { label: 'The Professional Scrum Master I (PSM I)', img: '/assets/img/certif/certif-psmi.svg', href: 'https://www.scrum.org/user/345856' },
        { label: 'GitLab Certified Associate', img: '/assets/img/certif/certif-gitlab.png', href: 'https://badgr.com/public/assertions/ccH_dcC1T7eFD2MuGsu6_Q?identity__email=youssef.benhssaien@gmail.com' },
        { label: 'Symfony 6 Certified Developer', img: '/assets/img/certif/certif-symfony6.png', href: 'https://connect.symfony.com/profile/moghreb' },
    ],
    skills : [
        { label: 'PHP', count: 90 },
        { label: 'Symfony', count: 80 },
        { label: 'MySQL', count: 70 },
        { label: 'Javascript', count: 70 },
        { label: 'Git', count: 70 },
        { label: 'HTML/CSS', count: 70 },
        { label: 'Docker', count: 50 },
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
        { href: 'https://www.safti.fr', img: 'https://www.safti.fr/assets/diverged/svg/saftilogo.svg' },
    ],
    stats: [
        { label: 'Years Experience', count: Math.floor((Date.now() - new Date('03-03-2014'))/1000/60/60/24/365) || 10},
        { label: 'professional Projects', count: 24 },
        { label: 'Personal projects', count: 16 },
        { label: 'Open source projects', count: 3 },
    ],
    contacts: [
        { label: 'E-mail', img: 'assets/img/social/gmail.png', href: 'mailto:youssef.benhssaien@gmail.com?subject=From youssefbenhssaien.me -' },
        { label: 'Linkedin', img: 'assets/img/social/linkedin.png', href: 'https://www.linkedin.com/in/youssefbenhssaien' },
        { label: 'Stackoverflow', img: 'assets/img/social/stack-overflow.png', href: 'https://stackoverflow.com/users/7326498/ybenhssaien' },
        { label: 'Twitter', img: 'assets/img/social/twitter.png', href: 'https://twitter.com/ysfbenhssaien' },
        { label: 'Github', img: 'assets/img/social/github.png', href: 'https://github.com/ybenhssaien' },
        { label: 'Gitlab', img: 'assets/img/social/gitlab.png',  href: 'https://gitlab.com/ybenhssaien' },
        { label: 'Medium', img: 'assets/img/social/medium.png', href: 'https://youssefbenhssaien.medium.com' },
        { label: 'Dev.to', img: 'assets/img/social/devto.png', href: 'https://dev.to/ybenhssaien' },
    ],
    experiences: {
        '2024-02-01': {
            type: 'announcement',
            show: false,
            title: '🚀 Looking for a New Freelance Mission! 🚀',
            client: {
                name: 'Senior PHP/Symfony developer / Full-Stack developer / Lead developer',
            },
            mission: {
                location: 'Toulouse - France / Full Remote',
                period: { start: 'Immediately', end: '(>= 6 months)'},
                title: 'Looking for a new freelance mission',
                icon: 'fa fa-exclamation-triangle text-warning',
            },
            tags: {
                'Technical environment': {
                    PHP : ['5.x', '7.x', '8.x'],
                    Symfony : ['2.x', '3.x', '4.x', '5.x', '6.x', '7.x'],
                    Doctrine : [],
                    VueJs: ['2.x', '3.x'],
                    ReactJs: [],
                    MySQL: [],
                    PostgreSQL: [],
                    Redis: [],
                    Mongodb: [],
                    Apache: '2.x',
                    Nginx: [],
                    Git: [],
                    Docker: [],
                },
                Tools: ['Gitlab', 'Github'],
                Cloud: ['Iaas', 'Paas', 'AWS'],
                API: ['REST'],
                Architecture: ['Legacy', 'Front-Back', 'Multilayered', 'Monolothic', 'Microservices', 'Hexagonal', 'Event-Driven'],
                Communication: {
                    French: ['Spoken', 'Written'],
                    English: ['Spoken', 'Written'],
                },
            },
        },
        /*'2022-01-17'*/'2024-01-23': {
            type: 'job',
            client: {
                name: 'New Immo group (safti.fr, safti.es, safeti-immobilien.de)',
            },
            mission: {
                location: 'Toulouse - France',
                period: { start: '01/2022', end: '01/2024'},
                title: 'Symfony Senior developer',
                description: 'Legacy migration to hexagonal architecture based on Symfony for the main CRM Omega',
                icon: 'fab fa-php',
            },
            tasks: [
            ],
            tags: {
                'Technical environment': {
                    PHP : ['7.4', '8.1'],
                    Symfony : ['5.4', '6.1'],
                    Doctrine : '2.x',
                    Mariadb: '10.3',
                    ReactJs: '18.x',
                    Nginx: [],
                    Git: [],
                    Docker: [],
                },
                Architecture: ['Hexagonal', 'Monolothic'],
                'Operating system': {
                    Ubuntu: '22',
                },
                Tools: ['Gitlab', 'Jira', 'Dynatrace'],
                Communication: {
                    French: ['Spoken', 'Written'],
                    English: ['Spoken', 'Written'],
                },
            },
        },
        '2021-11-26': {
            type: 'job',
            client: {
                name: 'Orange (Devrap)',
            },
            mission: {
                location: 'Toulouse - France (Full Remote)',
                period: { start: '09/2021', end: '11/2021'},
                title: 'Senior PHP developer',
                description: 'Within the CCPHP (PHP Competencies Center) Team',
                icon: 'fab fa-php',
            },
            tasks: [
                'Applications audit',
                'Support for PHP developers',
                'Prepare the version 2.0 of EPO (21 bundles) based on the 5.4 Symfony\'s version',
                'Documentation',
            ],
            tags: {
                'Technical environment': {
                    PHP : '7.3',
                    Symfony : ['4.4', '5.4'],
                    Doctrine : '2.x',
                    MySQL: '5.7',
                    //'EPO (Ecosystem PHP Orange)' : ['1.0', '2.0'],
                    Apache: '2.4',
                    Git: [],
                    Docker: [],
                },
                'Operating system': {
                    Windows: '10',
                    Ubuntu: '20',
                },
                Tools: ['Gitlab', 'vMware', 'Solr'],
                Communication: {
                    French: ['Spoken', 'Written'],
                },
            },
        },
        '2021-06-30': {
            type: 'job',
            client: {
                name: 'Orange (DSI)',
            },
            mission: {
                location: 'Toulouse - France (Full Remote)',
                period: { start: '09/2020', end: '06/2021'},
                title: 'Senior Full-stack developer',
                icon: 'fab fa-js',
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
                    PHP : '7.3',
                    VueJs : '2.6',
                    MySQL: '5.7',
                    Zend : '2.5',
                    //'OFT (Orange Framework)': ['4.6'],
                    Apache: '2.4',
                    Git: [],
                },
                Methodology: ['SAFe', 'Scrum'],
                Architecture: ['Monolothic'],
                Tools: ['Gitlab'],
                Communication: {
                    French: ['Spoken', 'Written'],
                },
                API: {
                    REST: 'JSON',
                    'JWT Token': [],
                },
            },
        },
        '2020-07-30': {
            type: 'job',
            client: {
                name: 'Orange (Devrap)',
            },
            mission: {
                location: 'Toulouse - France (On-site + Full Remote)',
                period: { start: '06/2019', end: '07/2020'},
                title: 'Senior PHP developer',
                icon: 'fab fa-php',
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
                    Symfony : '4.4',
                    Doctrine : '2.x',
                    //'EPO (Ecosystem PHP Orange)' : ['1.0-beta'],
                    Zend : ['1.10', '1.12', '2.4'],
                    //'OFT (Orange Framework)': ['1.1', '2.2', '3.1'],
                    MySQL: '5.7',
                    Apache: ['2.2', '2.4'],
                    Nginx: '1.15',
                    Git: [],
                    Docker: [],
                },
                Architecture: ['Monolothic'],
                Cloud: {
                    Cloudfoundry: 'Paas',
                },
                'Operating system': {
                    Windows: '10',
                    Ubuntu: '20',
                },
                Tools: ['Gitlab', 'vMware'],
                Communication: {
                    French: ['Spoken', 'Written'],
                },
            },
        },
        '2019-05-30': {
            type: 'job',
            client: {
                name: 'Banana cloud',
                logo: '/assets/img/enterprises/bananacloud.png',
                logo_style: 'height: 50px',
            },
            mission: {
                location: 'Grasse - France',
                period: { start: '04/2019', end: '05/2019'},
                title: 'PHP developer',
                icon: 'fab fa-php',
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
                    Laravel : '5.7',
                    Prestashop : '1.7',
                    Elasticsearch: '6.4',
                    Mongodb: '3.6',
                    MySQL: '5.7',
                    Git: [],
                    Docker: [],
                },
                'Operating system': {
                    MacOs: '10',
                    Debian: '9',
                },
                Tools: ['Gitlab'],
                Communication: {
                    French: ['Spoken', 'Written'],
                },
            },
        },
        '2019-02-15': {
            type: 'job',
            client: {
                name: 'GROUPAMA SUPPORTS & SERVICES',
            },
            mission: {
                location: 'Montpellier - France',
                period: { start: '07/2018', end: '02/2019'},
                title: 'Advanced PHP developer',
                icon: 'fab fa-php',
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
                    PHP : '7.1',
                    Symfony : '4.1',
                    Apache: '2.4',
                    MySQL: ['5.6', '5.7'],
                    Git: [],
                },
                'Operating system': {
                    Windows: '7',
                    RedHat: '7',
                },
                Tools: ['Gitlab'],
                Communication: {
                    French: ['Spoken', 'Written'],
                },
            },
        },
        '2018-04-30': {
            type: 'job',
            client: {
                name: 'OPEN groupe',
                logo: 'https://www.open.global/sites/all/themes/opengroupe_t/assets/img/logo_@2x.png',
                logo_style: 'height: 50px',
            },
            mission: {
                location: 'Aix-en-provence - France',
                period: { start: '01/2018', end: '04/2018'},
                title: 'Advanced Full-Stack developer',
                icon: 'fab fa-js',
            },
            tasks: [
                'Develop a web application to suggest security quiz for the new candidates',
            ],
            tags: {
                'Technical environment': {
                    PHP : '7.0',
                    Symfony : '4.0',
                    Apache: '2.4',
                    Angular: '5.1',
                    Firebase: [],
                },
                'Operating system': {
                    Windows: '10',
                },
                API: {
                    REST: 'JSON',
                    'Session Token':[],
                },
                Tools: ['Bitbucket'],
                Communication: {
                    French: ['Spoken', 'Written'],
                },
            },
        },
        '2018-01-10': {
            type: 'job',
            client: {
                name: 'DOCAPOST',
                logo: '/assets/img/enterprises/docaposte.png',
                logo_style: 'height: 50px',
            },
            mission: {
                location: 'Aix-en-provence - France',
                period: { start: '01/2018', end: '(1 week)'},
                title: 'Advanced Full-Stack developer',
                icon: 'fab fa-js',
                description: 'Automatize an existing web application to manage virtual hosts hosted on vMware.',
            },
            tasks: [
                'Analyse and develop a prototype to retrieve dynamically information about hosted machines from vMware by web services',
            ],
            tags: {
                'Technical environment': {
                    Python : '2.7',
                    AdonisJs : [],
                    Pyvmomi : [],
                    Redis: [],
                    Angular: '4.x',
                    NodeJs: '6.x',
                    Firebase: [],
                    Git: [],
                    Ansible: [],
                },
                'Operating system': {
                    Centos: '6',
                },
                Tools: ['Gitlab', 'vSphere'],
                Communication: {
                    French: ['Spoken', 'Written'],
                },
            },
        },
        '2017-11-30': {
            type: 'job',
            client: {
                name: 'Sopra Steria',
                logo: 'https://www.soprasteria.com/ResourcePackages/Bootstrap4/assets/dist/logos/logo-soprasteria.png',
            },
            mission: {
                location: 'Aix-en-provence - France',
                period: { start: '10/2017', end: '11/2017'},
                title: 'Advanced PHP developer',
                icon: 'fab fa-php',
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
                    MySQL: ['5.5', '5.6'],
                    PostgreSQL: '10.1',
                    SVN: [],
                    //Solr: ['5.1'],
                    //Jenkins: ['1.631'],
                },
                Tools: ['vSphere', 'Jenkins', 'Solr'],
                Communication: {
                    French: ['Spoken', 'Written'],
                },
            },
        },
        '2017-09-30': {
            type: 'job',
            client: {
                name: 'La poste',
                logo: '/assets/img/enterprises/laposte.png',
                logo_style: 'height: 50px',
            },
            mission: {
                location: 'Casablanca - Morocco',
                period: { start: '12/2016', end: '09/2017'},
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
                    Zend : '1.12',
                    Apache: ['2.2', '2.4'],
                    MySQL: '5.x',
                    SVN: [],
                },
                API: {
                    REST: 'XML',
                },
                Tools: ['Jira', 'Confluence'],
                Communication: {
                    French: ['Spoken', 'Written'],
                },
            },
        },
        '2016-11-30': {
            type: 'job',
            client: {
                name: 'Avito.ma (Schibsted Media Group)',
                logo: 'https://www.avito.ma/img/logo-rbnd.png',
                logo_style: 'height: 50px',
            },
            mission: {
                location: 'Casablanca - Morocco',
                period: { start: '11/2015', end: '11/2016'},
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
                    PHP : '5.x',
                    Symfony : '2.x',
                    Apache: '2.x',
                    Redis: [],
                    C: [],
                    //'Blocket Templating Language': [],
                    PostgreSQL: [],
                    Git: [],
                },
                API: {
                    REST: 'JSON',
                    'Session Token': [],
                },
                Cloud: {
                    'AWS': 'Iaas',
                },
                Tools: ['Github', 'Jira', 'Confluence', 'Optimizely'],
                Communication: {
                    English: ['Spoken', 'Written'],
                    French: 'Written',
                },
                Methodology: ['Scrum'],
                Architecture: ['Microservices'],
            },
        },
        '2015-11-15': {
            type: 'job',
            client: {
                name: 'Alcatel-Lucent',
                logo: 'https://web-assets.al-enterprise.com/-/media/assets/internet/images/h-to-m/logo.png',
                logo_style: 'height: 50px',
            },
            mission: {
                location: 'Casablanca - Morocco',
                period: { start: '10/2014', end: '11/2015'},
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
                    PHP : '5.x',
                    Symfony : '2.x',
                    Doctrine : [],
                    Apache: '2.x',
                    PostgreSQL: [],
                    Git: [],
                    Gitlab: [],
                },
                API: {
                    REST: 'JSON',
                    'Session Token': [],
                },
                Tools: ['Redmine'],
                Methodology: ['Scrum'],
                Communication: {
                    French: ['Spoken', 'Written'],
                    English: 'Written',
                },
            },
        },
        '2014-10-15': {
            type: 'job',
            client: {
                name: 'La FNAC',
                logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Fnac_Logo.svg/1200px-Fnac_Logo.svg.png',
                logo_style: 'height: 100px',
            },
            mission: {
                location: 'Casablanca - Morocco',
                period: { start: '07/2014', end: '10/2014'},
                title: 'Junior Research and Development Engineer',
                description: '',
            },
            tasks: [
                'Maintain an application managing service after sell (SAVTEK) for the french retail chain selling FNAC.',
            ],
            tags: {
                'Technical environment': {
                    PHP : '5.x',
                    Apache: '2.x',
                    Oracle: '3.2',
                    Smarty: [],
                    SVN: [],
                    Shell: [],
                },
                Communication: {
                    French: ['Spoken', 'Written'],
                },
            },
        },
        '2014-06-30': {
            type: 'internship',
            client: {
                name: 'La FNAC',
                logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Fnac_Logo.svg/1200px-Fnac_Logo.svg.png',
                logo_style: 'height: 100px',
            },
            mission: {
                location: 'Casablanca - Morocco',
                period: { start: '03/2014', end: '06/2014'},
                title: 'Intern Research and Development Engineer',
                description: '',
            },
            tasks: [
                'Maintain an application managing service after sell (SAVTEK) for the french retail chain selling FNAC.',
            ],
            tags: {
                'Technical environment': {
                    PHP : '5.x',
                    Apache: '2.x',
                    Oracle: '3.2',
                    Smarty: [],
                    SVN: [],
                    Shell: [],
                },
                Communication: {
                    French: ['Spoken', 'Written'],
                },
            },
        },
        '2012-06-30': {
            type: 'internship',
            client: {
                name: 'Megadata',
            },
            mission: {
                location: 'Tetouan - Morocco',
                period: { start: '04/2012', end: '06/2012'},
                title: 'Intern PHP Developer',
                description: '',
            },
            tasks: [
                'Concept and develop an application for hotel reservation from internet and local access.',
            ],
            tags: {
                'Technical environment': {
                    PHP : '5.x',
                    Apache: '2.x',
                    MySQL: [],
                },
            },
        },
    },
    certifications: {
        '2023-06-30': {
            type: 'certification',
            name: 'Symfony 6 Certified Developer',
            organisation: 'Symfony SAS',
            date: '06/2023',
            logo: '/assets/img/certif/certif-symfony6.png',
            url: 'https://connect.symfony.com/profile/moghreb',
        },
        '2021-04-27': {
            type: 'certification',
            name: 'GitLab Certified Associate',
            organisation: 'Gitlab',
            date: '04/2021',
            logo: '/assets/img/certif/certif-gitlab.png',
            url: 'https://badgr.com/public/assertions/ccH_dcC1T7eFD2MuGsu6_Q?identity__email=youssef.benhssaien@gmail.com',
        },
        '2020-12-26': {
            type: 'certification',
            name: 'Symfony 5 Certified Developer',
            organisation: 'Symfony SAS',
            date: '12/2020',
            logo: '/assets/img/certif/certif-symfony.png',
            url: 'https://connect.symfony.com/profile/moghreb',
        },
        '2020-08-26': {
            type: 'certification',
            name: 'The Professional Scrum Master I (PSM I)',
            organisation: 'Scrum.org',
            date: '08/2020',
            logo: '/assets/img/certif/certif-psmi.svg',
            url: 'https://www.scrum.org/user/345856',
        },
        '2020-02-22': {
            type: 'certification',
            name: 'Zend Certified PHP Engineer (2017-PHP)',
            organisation: 'Zend by Perforce',
            date: '02/2020',
            logo: '/assets/img/certif/certif-php.gif',
            url: 'https://www.zend-zce.com/en/yellow-pages/ZEND032239',
        },
    },
    formations: {
        '2023-07-13': {
            type: 'formation',
            name: 'Professional formation',
            title: 'Blockchain - introduction',
            date: '07/2023',
            school: 'M2I',
            location: 'Montpellier - France (Remotely)',
        },
        '2014-06-31': {
            type: 'formation',
            name: 'Specialised Master Degree',
            title: 'Software Quality',
            date: '06/2014',
            school: 'DHAR El MEHRAZ Faculty',
            location: 'Fez - Morocco',
        },
        '2012-06-31': {
            type: 'formation',
            name: 'Professional License Degree (LP)',
            title: 'Web Development (DW)',
            date: '06/2012',
            school: 'normal superior university',
            location: 'Tetouan - Morocco',
        },
        '2011-06-31': {
            type: 'formation',
            name: 'Superior Technician Degree (BTS)',
            title: 'Computer Engineering (GI)',
            date: '06/2011',
            school: 'normal superior university',
            location: 'Tetouan - Morocco',
        },
    },
};
