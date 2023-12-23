<template>
    <div class="section" id="section-people">
        <div class="container">
            <div class="section-head" id="team"><span>Team</span></div>

            <div class="people-lists">
                <div>
                    <span class="emphasis">Current Members</span>
                    <div class="team-peoples">
                        <div v-for="p in finalPeopleList" class="team-people">
                            <div class="flip-card">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front">
                                        <img :src="p.img" class="team-people-img mx-auto d-block" />
                                    </div>
                                    <div class="flip-card-back"><img :src="p.hoverImg"
                                            class="team-people-img mx-auto d-block" />
                                    </div>
                                </div>
                            </div>
                            <a :href="p.url" target="_blank" :title="p.name">
                                <div class="team-people-name">{{ p.name }}</div>
                            </a>
                            <div class="team-people-role">{{ p.role }}</div>
                        </div>
                    </div>
                </div>

                <div>
                    <span class="emphasis">Alumni</span>
                    <div class="team-peoples alumni">
                        <div v-for="p in finalAlumList" class="team-people">
                            <img :src="p.img" class="team-people-img mx-auto d-block" />
                            <div>
                                <a :href="p.url" target="_blank" :title="p.name">
                                    <div class="team-people-name">{{ p.name }}</div>
                                </a>
                                <div class="team-people-role">{{ p.prev }} &rarr; {{ p.now }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import "bootstrap/dist/css/bootstrap.css";
import * as _ from "underscore";

import { defineComponent } from "vue";

import { reactive, toRefs } from "vue";

// define person type
type Person = {
    name: string;
    role: "Professor" | "Postdoc" | "PhD Student" | "Undergraduate";
    profile: string;
    alter: string;
    url: string;
}

// define alum type
type Alum = {
    name: string;
    prev: "Professor" | "Postdoc" | "PhD Student" | "Undergraduate";
    now: string;
    profile: string;
    url: string;
    year: number;
}

// CURRENT MEMBERS
// sort by role
const roleOrder = ["Professor", "Postdoc", "PhD Student", "Undergraduate"]

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
        alter: "martin.png",
        url: "https://www.bewitched.com/",
    },
    {
        name: "Fernanda Viégas",
        role: "Professor",
        profile: "fernanda.jpg",
        alter: "fernanda.png",
        url: "http://www.fernandaviegas.com/",
    },
    { name: "Yida Chen", role: "PhD Student", profile: "yida.jpg", alter: "yida.jpg", url: "https://yc015.github.io/" },
    {
        name: "Cynthia Chen",
        role: "Undergraduate",
        profile: "cynthia.jpeg",
        alter: "cynthia.png",
        url: "https://chenxcynthia.github.io/",
    },
    {
        name: "Kenneth Li",
        role: "PhD Student",
        profile: "kenneth.jpeg", alter: "kenneth.png",
        url: "https://likenneth.github.io/",
    },
    {
        name: "Shivam Raval",
        role: "PhD Student",
        profile: "shivam.png", alter: "shivam.png",
        url: "https://scholar.harvard.edu/shivamraval",
    },
    { name: "Aoyu Wu", role: "Postdoc", profile: "aoyu.jpg", alter: "aoyu.jpeg", url: "https://wowjyu.github.io/" },
    {
        name: "Catherine Yeh",
        role: "PhD Student",
        profile: "catherine.jpg", alter: "catherine.jpg",
        url: "https://catherinesyeh.github.io/",
    },
    { name: "Trevor DePodesta", role: "Undergraduate", profile: "trevor.png", alter: "trevor.png", url: "https://tdepodesta.github.io/" },
    { name: "Olivia Seow", role: "PhD Student", profile: "olivia.jpeg", alter: "olivia.jpg", url: "https://www.oliviaseow.com/" },
];

people.sort(comparePeople); // sort

// final person mapping
const finalPeopleList = people.map((x) => ({
    ...x,
    img: x.profile
        ? require(`@/assets/images/people/${x.profile}`)
        : require(`@/assets/images/people/placeholder.png`),
    hoverImg: x.alter ? require(`@/assets/images/alterego/${x.alter}`)
        : require(`@/assets/images/people/placeholder.png`),
}));

// ALUMNI
let alumni: Alum[] = [
    {
        name: "David Bau",
        prev: "Postdoc",
        now: "Professor @ Northeastern",
        profile: "david.jpg",
        url: "http://davidbau.com/research/",
        year: 2022
    }
]

const compareAlumni = (a: Alum, b: Alum) => {
    // Compare by year
    if (a.year > b.year) return -1;
    if (a.year < b.year) return 1;

    // If years are equal, compare by first name
    const firstNameA = a.name.split(" ")[0] || "";
    const firstNameB = b.name.split(" ")[0] || "";
    return firstNameA.localeCompare(firstNameB);
}

alumni.sort(compareAlumni); // sort

// final alumni mapping
const finalAlumList = alumni.map((x) => ({
    ...x,
    img: x.profile
        ? require(`@/assets/images/people/${x.profile}`)
        : require(`@/assets/images/people/placeholder.png`),
}));

export default defineComponent({
    name: "People",
    components: {},
    setup() {
        const state = reactive({});

        return {
            finalPeopleList,
            finalAlumList,
            ...toRefs(state),
        };
    },
    computed: {},
});
</script>

<style rel="stylesheet" lang="scss">
.people-lists {
    display: grid;
    grid-template-columns: 3fr 1fr;
    column-gap: 3rem;
}

.team-peoples {
    margin: 0 auto;
    display: grid;
    gap: 1rem;
    margin-top: 10px;
    margin-bottom: 10px;
    grid-template-columns: repeat(6, 1fr);

    a {
        color: inherit;
        /* blue colors for links too */
        text-decoration: inherit;
        /* no underline */
    }
}

.team-people {
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
        transition: 0.5s;
        // background: linear-gradient(transparent, transparent) padding-box,
        //     linear-gradient(0deg, $med-accent, $dark-accent) border-box;
    }

    // a:hover img.team-people-img {
    //     border: 2px solid rgb($dark-accent, 0.7);
    // }

    .team-people-name {
        color: $dark-accent;
        font-weight: 500;
        transition: 0.5s;
    }

    a:hover .team-people-name {
        opacity: 0.7;
        letter-spacing: 0.2px;
    }

    .team-people-role {
        font-style: italic;
        font-size: small;
    }
}

// div.team-people:nth-child(3n) img.team-people-img {
//     background: linear-gradient(transparent, transparent) padding-box,
//         linear-gradient(60deg, $med-accent, $dark-accent) border-box;
// }

// div.team-people:nth-child(3n+1) img.team-people-img {
//     background: linear-gradient(transparent, transparent) padding-box,
//         linear-gradient(120deg, $med-accent, $dark-accent) border-box;
// }

.team-peoples.alumni {
    grid-template-columns: 1fr;
    gap: 0.5rem;
    margin-bottom: 50px;

    .team-people {
        width: 100%;
        max-width: max-content;
        display: flex;
        align-items: center;
        text-align: left;
        gap: 1rem;
        font-size: 10px;
        padding: 0;
    }

    .team-people-name {
        color: $med-accent;
    }

    .team-people-role {
        font-size: x-small;
    }

    img.team-people-img {
        max-width: 50px;
        margin: 0px;
        border-color: $med-accent;
    }
}

@media (max-width: 1200px) {
    .team-peoples {
        grid-template-columns: repeat(5, 1fr);
    }
}

@media (max-width: 1000px) {
    .team-peoples {
        grid-template-columns: repeat(4, 1fr);
    }
}


@media (max-width: 900px) {
    .people-lists {
        grid-template-columns: 1fr;
    }

    .team-peoples {
        grid-template-columns: repeat(5, 1fr);
        margin-bottom: 0;
    }

    .team-peoples.alumni {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 650px) {
    .team-peoples {
        grid-template-columns: repeat(4, 1fr);
    }

    .team-peoples.alumni {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 550px) {
    .team-peoples {
        grid-template-columns: repeat(3, 1fr);
    }
}

@media (max-width: 450px) {
    .team-peoples {
        grid-template-columns: repeat(2, 1fr);
    }
}

/* The flip card container - set the width and height to whatever you want. We have added the border property to demonstrate that the flip itself goes out of the box on hover (remove perspective if you don't want the 3D effect */
.flip-card {
    background-color: transparent;
    width: 100%;
    perspective: 1000px;
    cursor: pointer;
    margin-bottom: 4px;
    /* Remove this if you don't want the 3D effect */
}

/* This container is needed to position the front and back side */
.flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
    aspect-ratio: 1 / 1;
}

/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
}

/* Position the front and back side */
.flip-card-front,
.flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    /* Safari */
    backface-visibility: hidden;

    border-radius: 100%;
}

/* Style the front side (fallback if image is missing) */
.flip-card-front {
    background-color: white;
    color: $text-color;
}

/* Style the back side */
.flip-card-back {
    background-color: $dark-accent;
    color: white;
    transform: rotateY(180deg);

    img {
        opacity: 0.7;
    }
}

span.emphasis {
    font-weight: 600;
}
</style>
