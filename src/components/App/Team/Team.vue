<template>
    <div class="section" id="section-project">
        <div class="container">
            <div class="section-head" id="team"><span>Team</span></div>

            <div class="team-peoples">
                <div v-for="p in finalPeopleList" class="team-people">
                    <a :href="p.url" target="_blank">
                        <img :src="p.img" class="team-people-img mx-auto d-block" />
                        <div class="team-people-name">{{ p.name }}</div>
                        <div class="team-people-role">{{ p.role }}</div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import "bootstrap/dist/css/bootstrap.css";
import * as _ from "underscore";

import { CommentOutlined } from "@ant-design/icons-vue";

import Project from "./Project.vue";

import { defineComponent } from "vue";
import { useStore } from "vuex";

import { onMounted, computed, reactive, toRefs, h, watch } from "vue";
import { groupBy } from "underscore";

// define person type
type Person = {
    name: string;
    role: "Professor" | "Postdoc" | "PhD Student" | "Undergraduate" | "Alumni";
    profile: string;
    url: string;
}

// sort by role
const roleOrder = ["Professor", "Postdoc", "PhD Student", "Undergraduate", "Alumni"]

const comparePeople = (a: Person, b: Person) => {
    // Compare by role
    if (roleOrder.indexOf(a.role) < roleOrder.indexOf(b.role)) return -1;
    if (roleOrder.indexOf(a.role) > roleOrder.indexOf(b.role)) return 1;

    // If roles are equal, compare by first name
    const firstNameA = a.name.split(" ")[0] || "";
    const firstNameB = b.name.split(" ")[0] || "";
    return firstNameA.localeCompare(firstNameB);
}

// list of people
let people: Person[] = [
    {
        name: "Martin Wattenberg",
        role: "Professor",
        profile: "martin.jpeg",
        url: "https://www.bewitched.com/",
    },
    {
        name: "Fernanda Viégas",
        role: "Professor",
        profile: "fernanda.jpg",
        url: "http://www.fernandaviegas.com/",
    },
    { name: "Yida Chen", role: "PhD Student", profile: "yida.jpg", url: "https://yc015.github.io/" },
    {
        name: "Cynthia Chen",
        role: "Undergraduate",
        profile: "cynthia.jpeg",
        url: "https://chenxcynthia.github.io/",
    },
    {
        name: "Kenneth Li",
        role: "PhD Student",
        profile: "kenneth.jpeg",
        url: "https://likenneth.github.io/",
    },
    {
        name: "Shivam Raval",
        role: "PhD Student",
        profile: "shivam.png",
        url: "https://scholar.harvard.edu/shivamraval",
    },
    { name: "Aoyu Wu", role: "Postdoc", profile: "aoyu.jpg", url: "https://wowjyu.github.io/" },
    {
        name: "Catherine Yeh",
        role: "PhD Student",
        profile: "catherine.jpg",
        url: "https://catherinesyeh.github.io/",
    },
    { name: "Trevor DePodesta", role: "Undergraduate", profile: "", url: "https://tdepodesta.github.io/" },
    { name: "Olivia Seow", role: "PhD Student", profile: "olivia.jpeg", url: "https://www.oliviaseow.com/" },
    {
        name: "David Bau",
        role: "Alumni",
        profile: "david.jpg",
        url: "http://davidbau.com/research/",
    },
];

people.sort(comparePeople); // sort

// final person mapping
const finalPeopleList = people.map((x) => ({
    ...x,
    img: x.profile
        ? require(`@/assets/images/people/${x.profile}`)
        : require(`@/assets/images/people/placeholder.png`),
}));

export default defineComponent({
    name: "Projects",
    components: { CommentOutlined },
    setup() {
        const state = reactive({});

        return {
            finalPeopleList,
            ...toRefs(state),
        };
    },
    computed: {},
});
</script>

<style rel="stylesheet" lang="scss">
div.team-peoples {
    margin: 0 auto;
    display: grid;
    gap: 1rem;
    margin-bottom: 10px;
    margin-top: 10px;

    a {
        color: inherit;
        /* blue colors for links too */
        text-decoration: inherit;
        /* no underline */
    }
}

div.team-people {
    padding: 0 0 1rem;
    text-align: center;
    font-size: smaller;

    img.team-people-img {
        object-fit: cover;
        width: 100%;
        aspect-ratio: 1 / 1;
        margin: 0px 30px 6px;
        border-radius: 100%;
        border: 2px solid $dark-accent;
        // background: linear-gradient(transparent, transparent) padding-box,
        //     linear-gradient(0deg, $med-accent, $dark-accent) border-box;
    }

    div.team-people-name {
        color: $dark-accent;
        font-weight: 500;
    }

    div.team-people-role {
        font-style: italic;
        font-size: small;
    }
}

div.team-people:nth-child(3n) img.team-people-img {
    background: linear-gradient(transparent, transparent) padding-box,
        linear-gradient(60deg, $med-accent, $dark-accent) border-box;
}

div.team-people:nth-child(3n+1) img.team-people-img {
    background: linear-gradient(transparent, transparent) padding-box,
        linear-gradient(120deg, $med-accent, $dark-accent) border-box;
}

@media (min-width: 700px) {
    div.team-peoples {
        grid-template-columns: repeat(6, 1fr);
    }
}

@media (max-width: 700px) {
    div.team-peoples {
        grid-template-columns: repeat(3, 1fr);
    }
}
</style>
