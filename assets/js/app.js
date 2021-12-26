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

const skillComponent = {
    props:  {
        count: Number,
        label: String,
    },
    template: `<div class="skill">
            <h4>{{ label }}</h4>
            <div class="progress">
                <div class="progress-bar" role="progressbar" :data-transitiongoal="count"></div>
            </div>
        </div>`
};

const enterpriseComponent = {
    props:  {
        target: String,
        img: String,
    },
    template: `<a :href="target" target="_blank">
                <img :src="img" class="img-certif img-responsive" />
            </a>`
};

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
        </div>`
};

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
        </a>`
};

Vue.createApp({
    data() {
        return data;
    },
    components: {
        contact: contactComponent,
        stat: statComponent,
        enterprise: enterpriseComponent,
        skill: skillComponent,
        certif: certifComponent,
        service: serviceComponent,
    },
}).mount('#main');