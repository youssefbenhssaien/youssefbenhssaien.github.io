const app = Vue.createApp({
    data() {
        return data;
    },
});

const timelineComponent = {
    props:  {
        elements: Object,
    },
    template: `
    <section id="cd-timeline" class="cd-container text-left p-xl-0 pb-xl-4">
        <div id="cd-timeline-head" class="row">
            <div class="col-6 pr-0">
                <h5 class="border p-3 font-weight-bold text-center text-light bg-dark">
                    <i class="fa fa-graduation-cap"></i> Formations & <i class="fa fa-award"></i> Certifications
                    <i class="fa fa-caret-down text-center"></i>
                </h5>
            </div>
            <div class="col-6 pl-0">
                <h5 class="border p-3 font-weight-bold text-center text-light bg-dark">
                    <i class="fa fa-code"></i> Professional Experience
                    <i class="fa fa-caret-down text-center"></i>
                </h5>
            </div>
        </div>
        <template v-for="element in elements">
            <timeline-certification :certif="element" v-if="element.type === 'certification'" />
            <timeline-formation :formation="element" v-else-if="element.type === 'formation'" />
            <timeline-job :job="element" v-else />
        </template>
    </section>
    `
};
app.component('timeline', timelineComponent);

const timelineElementComponent = {
    props: {
        date: String,
        align: {
            type: String,
            required: false,
            default: 'right',
        },
        title: {
            type: String,
            required: false,
        },
        description: {
            type: String,
            required: false,
        },
        location: {
            type: String,
            required: false,
        },
        location_name: {
            type: String,
            required: false,
        },
    },
    computed: {
        dateToId() {
            return this.date.replaceAll(' ', '').replaceAll('/', '_');
        },
    },
    template: `
    <div class="cd-timeline-block" :class="'timeline-block-'+align" :id="dateToId">
        <div class="cd-timeline-img cd-picture text-center">
            <i class="fa fa-calendar-day"></i>
        </div>
        <div class="cd-timeline-date">
            {{ date }}
        </div>

        <div class="cd-timeline-content">
            <h5 class="font-weight-bold"><slot name="title">{{ title }}</slot></h5>
            <div class="row timeline-content-info">
                <slot name="location_infos">
                    <slot name="location_name">
                        <div class="col-auto" v-if="location_name">
                            <i class="fa fa-building" aria-hidden="true"></i> {{ location_name }}
                        </div>
                    </slot>
                    <slot name="location">
                        <div class="col-auto" v-if="location">
                            <i class="fa fa-map-marker" aria-hidden="true"></i> {{ location }}
                        </div>
                    </slot>
                </slot>
            </div>
            <slot name="description">
                <div v-if="description" class="mt-2">
                    <h6 class="font-weight-bold mr-1">Description :</h6>
                    <span>{{ description }}</span>
                </div>
            </slot>
            <slot></slot>
        </div>
    </div>
    `,
}
app.component('timeline-element', timelineElementComponent);

const timelineTagsComponent = {
    props:  {
        title: String,
        tags: Object | String,
    },
    template: `<div class="mt-2">
        <h6 class="font-weight-bold">{{ title }} : </h6>
        <ul class="content-skills">
            <li v-if="typeof tags !== 'object'">{{ tags }}</li>
            
                <li v-else v-for="(tag_value, tag_name) in tags">
                    <template v-if="typeof tag_name === 'number'">
                        <!-- Simple tags -->
                        {{ tag_value }}
                    </template>
                    <template v-else-if="typeof tag_value === 'object'">
                        <!-- Versionned tags -->
                        {{ tag_name }} <span v-if="tag_value.length > 0">[{{ tag_value.join(", ") }}]</span>
                    </template>
                    <template v-else>
                        <!-- Versionned tags -->
                        {{ tag_name }} {{ tag_value }}
                    </template>
                </li>
        </ul>
    </div>`
};
app.component('timeline-tags', timelineTagsComponent);

const timelineTasksComponent = {
    props:  {
        tasks: Object,
    },
    template: `<div class="mt-2">
        <h6 class="font-weight-bold">Tasks :</h6>
        <ul>
            <li v-for="task in tasks"><span>{{ task }}</span></li>
        </ul>
    </div>`
};
app.component('timeline-tasks', timelineTasksComponent);

const timelineJobComponent = {
    props:  {
        job: Object,
    },
    created: function () {
        this.mission = this.job.mission;
        this.period = this.job.mission.period;
        this.client = this.job.client;
        this.tasks = this.job.tasks;
        this.tags = this.job.tags;
    },
    template: `
    <timeline-element
        :date="period.start+' - '+period.end"
        :location_name="client.name"
        :location="mission.location"
        :description="mission.description"
    >
        <template #title>
            <i :class="typeof mission.icon !== 'undefined' ? mission.icon : 'fa fa-code'" aria-hidden="true"></i> {{ mission.title }}
        </template>
        <template v-if="tasks">
            <timeline-tasks :tasks="tasks" />
        </template>
        <template v-if="tags">
            <div v-for="(tag_tags, tag_title) in tags">
                <timeline-tags :title="tag_title" :tags="tag_tags" />
            </div>
        </template>
    </timeline-element>
    `,
};
app.component('timeline-job', timelineJobComponent);

const timelineCertificationComponent = {
    props:  {
        certif: Object,
    },
    template: `
    <timeline-element 
        align="left" 
        :date="certif.date"
        :location_name="certif.organisation"
    >
        <template #title>
            <i class="fa fa-award" aria-hidden="true"></i> {{ certif.name }}
        </template>
        <template #description v-if="certif.logo">
            <div class="text-center">
                <img :src="certif.logo" style="width: 200px; height: 200px; margin-top: 5px" />
            </div>
            <div class="text-center mt-2">
                <a class="btn btn-primary" :href="certif.url" target="__blank">
                    <i class="fa fa-share-square"></i> See credential
                </a>
            </div>
        </template>
    </timeline-element>
    `,
};
app.component('timeline-certification', timelineCertificationComponent);

const timelineFormationComponent = {
    props:  {
        formation: Object,
    },
    template: `
    <timeline-element 
        align="left" 
        :date="formation.date"
    >
        <template #title>
            <i class="fa fa-graduation-cap" aria-hidden="true"></i> {{ formation.name}}
        </template>
        <template #location_infos>
            <div class="col-12">
                <h6 class="font-weight-bold">{{ formation.title }}</h6>
            </div>
            <div class="col-auto">
                <i class="fa fa-building" aria-hidden="true"></i> {{ formation.school }}
            </div>
            <div class="col-auto">
                <i class="fa fa-map-marker" aria-hidden="true"></i> {{ formation.location }}
            </div>
        </template>
    </timeline-element>
    `,
};
app.component('timeline-formation', timelineFormationComponent);

const resumeSectionComponent = {
    data() {
        return data;
    },
    computed: {
        timelineElements () {
            return this.reverseSortObjectByKeys({
                ...this.experiences,
                ...this.certifications,
                ...this.formations,
            });
        },
    },
    methods: {
        reverseSortObjectByKeys(objectUnsorted) {
            return Object.keys(objectUnsorted).sort().reverse().reduce(
                (obj, key) => {
                    obj[key] = objectUnsorted[key];
                    return obj;
                },
                {}
            );
        },
    },
    mounted() {
        $(".section-counters .start").each(function() {
            if(!($(this).hasClass('counting'))) {
                $(this).addClass('counting');
                $(this).countTo();
            }
        });
    },
    template: `
        <section id="experience" class="site-section text-center mt-n5">
            <div class="section-counters mx-0">
                <div class="row no-gutters">
                    <div class="col-sm-3 col-xs-12" v-for="row in stats">
                        <div>
                            <p class="counter start" :data-to="row.count" data-speed="2000">0</p>
                            <h4>{{ row.label }}</h4>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="container">
                <div class="row mt-4">
                    <div class="col-md-12">
                        <h3>My Formations & Experience</h3>
                        <img src="assets/img/lines.svg" class="img-lines" alt="lines">
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <cv-download :cvs="cvs" />
                    </div>
                    <div class="col-md-12">
                        <timeline :elements="timelineElements" />
                    </div>
                </div>
            </div>
        </section><!-- /.section-form -->
    `,
};
app.component('resume-section', resumeSectionComponent);

const cvDownloadComponent = {
    props:  {
        cvs: Object,
    },
    template: `<div class="btn-group">
        <button type="button" class="btn btn-fill dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="fa fa-download"></i> Download my cv <span class="caret"></span>
        </button>
        <ul class="dropdown-menu">
            <li v-for="cv in cvs">
                <a class="dropdown-item" :href="cv.href" target="_blank">
                    <img class="fa fa-lg" :src="cv.img" />  {{ cv.label }}
                </a>
            </li>
        </ul>
    </div>`,
};
app.component('cv-download', cvDownloadComponent);

const skillTechnicalComponent = {
    props:  {
        skills: Object,
        minCount: {
            type: Number,
            required: false,
            default: 1,
        },
        maxCount: {
            type: Number,
            required: false,
            default: Number.MAX_SAFE_INTEGER,
        },
    },
    template: `
    <template v-for="(count, label) in skills">
        <button class="btn btn-secondary btn-sm m-1" v-if="count >= minCount && count <= maxCount" :title="count+' professional experiences'">
            {{ label }}
        </button>
    </template>
    `,
};
app.component('skill-technical', skillTechnicalComponent);

const skillSectionComponent = {
    data() {
        return data;
    },
    computed: {
        tagsFromExperiences() {
            const categories = [];

            // Extract all tags from experiences
            const allCategories = Object
                .values(this.experiences)
                .map((experience) => Object.keys(experience.tags));

            // Every tag contains an array of categories
            for (category in allCategories) {
                categories.push(...allCategories[category]);
            }

            // Return an unique array of categories
            return categories.filter((v, i, a) => a.indexOf(v) === i);
        },
    },
    methods: {
        skillsFromExperiences(category) {
            const skills = {};

            Object.values(this.experiences).forEach(function (experience) {
                if (experience.type !== 'job' && experience.type !== 'freelance') {
                    return;
                }
                for(const skillFromEntry in experience.tags[category]) {
                    // Check if the skill is a key or value
                    skill = Number.parseInt(skillFromEntry) >= 0
                        ? experience.tags[category][skillFromEntry]
                        : skillFromEntry;

                    // Initialise the skill count
                    if (typeof skills[skill] === 'undefined') {
                        skills[skill] = 0;
                    }

                    skills[skill]++;
                }
            });

            // Sort skills by count
            return Object.fromEntries(Object.entries(skills).sort().sort(([,a],[,b]) => a-b).reverse());
        },
        skillsFromExperiencesToString(category) {
            const skillsArray = [];
            const skillsEntries = Object.entries(this.skillsFromExperiences(category));

            for (let key in skillsEntries) {
                skillsArray.push(['"'+skillsEntries[key][0]+'"', skillsEntries[key][1]]);
            }

            return "[["+skillsArray.join("],[")+"]]";
        },
    },
    template: `
        <section id="skills" class="skills site-section section-services text-center">
            <div class="container">
                <div class="text-center">
                    <h3>My Skills</h3>
                    <img src="assets/img/lines.svg" class="img-lines" alt="lines">
                </div>
                <div class="row justify-content-center mb-3">
                    <div class="col-12">
                        <div class="word-cloud" style="width: 100%; height: 400px" :data-tags="skillsFromExperiencesToString('Technical environment')"></div>
                    </div>
                </div>
                <div class="clearfix separator"></div>
                <div class="row justify-content-center">
                    <div class="col-md-6">
                        <div class="row">
                            <div class="col-md-12">
                                <h4 class="alert alert-success"><i class="fa fa-star"></i> Primary skills</h4>
                            </div>
                            <div class="col-md-12">
                                <skill-technical :skills="skillsFromExperiences('Technical environment')" :min-count="2" />
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="row">
                            <div class="col-md-12">
                                <h4 class="alert alert-warning"><i class="far fa-star"></i> Secondary skills</h4>
                            </div>
                            <div class="col-md-12">
                                <skill-technical :skills="skillsFromExperiences('Technical environment')" :max-count="1" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-auto" v-for="category in tagsFromExperiences">
                        <div class="border m-1 pb-1" v-if="category !== 'Technical environment'">
                            <h4 class="bg-light p-2"><i class="fa fa-star"></i> {{ category }}</h4>
                            <div class="p-1">
                                <skill-technical :skills="skillsFromExperiences(category)" :min-count="1" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section><!-- /.secton-skills -->
    `,
};
app.component('skill-section', skillSectionComponent);

const aboutSectionComponent = {
    data() {
        return data;
    },
    template: `<section id="about" class="site-section section-services text-center">
        <div class="container">
            <div class="row justify-content-center align-items-center">
                <div class="col-md-12">
                    <h3>Who I am</h3>
                    <img src="assets/img/lines.svg" class="img-lines" alt="lines">
                </div>
                <div class="col-md-3 col-md-offset-3">
                    <div class="photo-profile-container mb-3"><img src="assets/img/profile.jpg" class="photo-profile" /></div>
                    <div class="clearfix visible-xxs"></div>
                    <router-link :to="'#skills'" class="btn btn-border m-1">
                        <i class="fa fa-code"></i> My skills
                    </router-link>
                    <router-link :to="{ name: 'resume', }" class="btn btn-border m-1">
                        <i class="fa fa-th-list"></i> My experience
                    </router-link>
                    <router-link :to="'#certifications'" class="btn btn-border m-1">
                        <i class="fa fa-award"></i> My certifications
                    </router-link>
                </div>
                <div class="col-md-9 col-md-offset-3">
                    <div class="console-container my-4">
                        <div class="console-title">{{ title }}</div>
                        <div class="console-body"><span class="typed" :data-strings="introduction"></span></div>
                    </div>
                </div>
            </div>
            <div class="clearfix separator"></div>
            <div class="row">
                <div class="col-md-12">
                    <h3>What I do</h3>
                    <img src="assets/img/lines.svg" class="img-lines" alt="lines">
                </div>
                <div class="col-sm-4" v-for="row in services">
                    <div class="service">
                        <img :src="row.img" alt="{{ row.alt }}">
                        <h4>{{ row.label }}</h4>
                        <p v-html="row.description"></p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <certification-section class="mt-3" />
    <skill-section class="mt-3" />`,
};
app.component('about-section', aboutSectionComponent);

const certificationSectionComponent = {
    data() {
        return {
            certifs: data.certifs,
        };
    },
    template: `
        <section id="certifications" class="certifications site-section section-services text-center">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h3>My professional certifications</h3>
                        <img src="assets/img/lines.svg" class="img-lines" alt="lines">
                    </div>
                </div>
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 justify-content-center align-items-end">
                    <div class="col mb-2" v-for="row in certifs">
                        <div class="my-1"><img class="img-responsive" :src="row.img" /></div>
                        <div class="my-1"><h5>{{ row.label }}</h5></div>
                        <div class="text-center mt-2">
                            <a class="btn btn-primary" :href="row.href" target="__blank">
                                <i class="fa fa-share-square"></i> See credential
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `,
};
app.component('certification-section', certificationSectionComponent);

const contactSectionComponent = {
    data() {
        return {
            contacts: data.contacts,
        };
    },
    template: `
        <section id="contact" class="contact site-section section-form text-center">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h3>Contact</h3>
                        <img src="assets/img/lines.svg" class="img-lines" alt="lines">
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-3 col-xs-12" v-for="row in contacts">
                        <a :href="row.href" target="_blank">
                            <div class="flex flex-column flex-center">
                              <img :src="row.img" class="img-certif img-responsive" />
                              <h4>{{ row.label }}</h4>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section><!-- /.section-contact -->
    `,
};
app.component('contact-section', contactSectionComponent);

const routes = [
    { path:'/', name:'about', component: aboutSectionComponent, meta: { transition: 'slide-left' }, },
    { path: '/skills', name:'skills', component: skillSectionComponent, meta: { transition: 'slide-left' } },
    { path: '/resume', name:'resume', component: resumeSectionComponent, meta: { transition: 'slide-left' } },
    { path: '/contact', name:'contact', component: contactSectionComponent, meta: { transition: 'slide-left' } },
];

const router = VueRouter.createRouter({
    routes,
    history: VueRouter.createWebHashHistory(),
    scrollBehavior(to, from, savedPosition) {
        return { el: to.hash ? to.hash : '#main', behavior: 'smooth', };
    },
});
app.use(router);

router.beforeEach((to, from, next) => {
    if (typeof from.name === 'undefined' && typeof to.name === 'undefined') {
        return  next({ name: 'about' });
    } else if (typeof to.name === 'undefined' && typeof from.name !== 'undefined') {
        return next(from);
    }

    return next();
});

router.afterEach(() => {
    $(function() {
    if ($('.typed') && Typed) {
        $('.typed').each(function (id) {
            if ($(this).is('.typing, .completed')) {
                return;
            }

            if (!$(this).attr('id')) {
                $(this).attr('id', 'typed'+id);
            }
            new Typed(
                '#'+$(this).attr('id'),
                {
                    strings: [$(this).data('strings')],
                    typeSpeed: 50,
                    onBegin: function(el) {
                        $(el.el).addClass('typing');
                    },
                    onComplete: function(el) {
                        $(el.el).removeClass('typing');
                        $(el.el).addClass('completed');
                    },
                    onReset: function(el) {
                        $(el.el).html('');
                    },
                },
            );
        });
    }
    if ($('.word-cloud')) {
        if (WordCloud.isSupported) {
            $('.word-cloud').each(function () {
                WordCloud($(this)[0], {
                    list: $(this).data('tags'),
                    gridSize: 18,
                    weightFactor: 9,
                    fontWeight: 'bold',
                    fontFamily: 'Finger Paint, cursive, sans-serif',
                    color: 'random-dark',
                    hover: window.drawBox,
                    shape: 'star',
                    click: function (skill) {
                        alert(skill[1] + ' professional experiences with the skill "' + skill[0] + '"');
                    }
                });
            });
        } else {
            $('.word-cloud').remove();
        }
    }
    });
})

app.mount('#app');
