const app = Vue.createApp({
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
        sortObjectByKeys(objectUnsorted) {
            return Object.keys(objectUnsorted).sort().reduce(
                (obj, key) => { 
                    obj[key] = objectUnsorted[key]; 
                    return obj;
                }, 
                {}
            );
        },
        reverseSortObjectByKeys(objectUnsorted) {
            return Object.keys(objectUnsorted).sort().reverse().reduce(
                (obj, key) => { 
                    obj[key] = objectUnsorted[key]; 
                    return obj;
                }, 
                {}
            );
        },
        skillsFromExperiences(category) {
            const skills = {};

            Object.values(this.experiences).forEach(function (experience) {
                if (experience.type !== 'job' && experience.type !== 'freelance') {
                    return;
                }
                for(const skillFromEntry in experience.tags[category]) {
                    // Check if the skill is a key or value
                    const skill = Number.parseInt(skillFromEntry) >= 0? experience.tags[category][skillFromEntry] : skillFromEntry; 

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
                <h6 class="border p-3 font-weight-bold text-center text-light bg-dark">
                    <i class="fa fa-graduation-cap"></i> Formations & <i class="fa fa-award"></i> Certifications
                    <i class="fa fa-caret-down text-center"></i>
                </h6>
            </div>
            <div class="col-6 pl-0">
                <h6 class="border p-3 font-weight-bold text-center text-light bg-dark">
                    <i class="fa fa-code"></i> Professional Experience
                    <i class="fa fa-caret-down text-center"></i>
                </h6>
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
    template: `
    <div class="cd-timeline-block" :class="'timeline-block-'+align">
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
                    <h6 class="font-weight-bold">Description :</h6>
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
        tags: Object,
    },
    template: `<div class="mt-2">
        <h6 class="font-weight-bold">{{ title }} : </h6>
        <ul class="content-skills">
            <li v-for="(tag_value, tag_name) in tags">
                <template v-if="typeof tag_name === 'number'">
                    <!-- Simple tags -->
                    {{ tag_value }}
                </template>
                <template v-if="typeof tag_value === 'object'">
                    <!-- Versionned tags -->
                    {{ tag_name }} <span v-if="tag_value.length > 0">[{{ tag_value.join(", ")}}]</span>
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
            <div class="text-center">
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

const serviceComponent = {
    props:  {
        img: String,
        alt: String,
        label: String,
        description: String,
    },
    template: `<div class="service">
            <img :src="img" alt="{{ alt }}">
            <h4>{{ label }}</h4>
            <p v-html="description"></p>
        </div>`
};
app.component('service', serviceComponent);

const certifComponent = {
    props:  {
        target: String,
        img: String,
        label: String,
    },
    template: `<img class="img-responsive" :src="imgg" />
        <h4><a :href="target" target="_blank">
            {{ label }}
        </a></h4>`
};
app.component('certif', certifComponent);

const skillComponent = {
    props:  {
        count: Number,
        label: String,
    },
    template: `<button class="btn btn-secondary btn-sm m-1" :title="count+' professional experiences'">{{ label }}</button>`,
};
app.component('skill', skillComponent);

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
        <skill :label="label" :count="count" v-if="count >= minCount && count <= maxCount"></skill>
    </template>
    `,
};
app.component('skill-technical', skillTechnicalComponent);

const statComponent = {
    props:  {
        count: Number,
        speed: {
            type: Number,
            default: 2000,
        },
        label: String,
    },
    template: `<div>
            <p class="counter start" :data-to="count" :data-speed="speed">0</p>
            <h4>{{ label }}</h4>
        </div>`,
};
app.component('stat', statComponent);

const contactComponent = {
    props:  {
        target: String,
        img: String,
        label: String,
    },
    template: `<a :href="target" target="_blank">
            <div class="flex flex-column flex-center">
              <img :src="img" class="img-certif img-responsive" />
              <h4>{{ label }}</h4>
            </div>
        </a>`,
};
app.component('contact', contactComponent);

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

app.mount('#main');
