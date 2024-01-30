<template>
    <div class="section" id="section-project">
        <div class="container">
            <div class="section-head" id="themes"><span>Research Themes</span></div>
            <!-- Below is a list of our main research themes in the area of AI Interpretability, Human-Computer Interaction, and visualization. -->
            <div class="project-outer-container">
                <div v-for="project in projects" :key="project.title" class="project-inner-container">
                    <Project :project="project" />
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

import { reactive, toRefs } from "vue";

const projects = [
    {
        imgurl: "proj_interpret.gif",
        title: "Mechanistic Interpretability",
        about: "We aim to understand the inner workings of complex machine learning models, and based on these findings, improving the controllability of current model behavior to secure human benefits. Our work targets real-world problems derived from AI safety research, e.g., hallucination, privacy, and copyright issues. Previously, we conducted preliminary explorations into the world models of toy GPT models and diffusion models, which were shown to causally impact model generations.",
        id: "proj_transform",
    },
    {
        imgurl: "proj_dashboard.png",
        title: "Human-Computer Interaction",
        about: "We are working to pioneer HCI technologies in the age of AI. A key aspect of our research is investigating novel interface designs for AI models. These interfaces aim to surface the inner workings of LLMs to public, ensuring their transparent, safe, and reliable utilization in a controlled manner. We are also interested in developing new techniques for practical applications such as language learning to enhance user experience and effectiveness.",
        id: "proj_dashboard",
    },
    {
        imgurl: "proj_vis.gif",
        title: "Data Visualization",
        about: "We investigate the use of data visualization for uncovering unseen patterns and communicating them in novel ways. To this aim, we develop innovative interactive visualizations for real-world applications, with focuses on critical fields such as artificial intelligence and healthcare. Additionally, we are eager to explore the integration of visualization techniques in the realm of art, aiming to enhance its revelatory and expressive power.",
        id: "proj_dashboard",
    }
] as any[];

export default defineComponent({
    name: "Projects",
    components: { Project, CommentOutlined },
    setup() {
        for (let p of projects) {
            p.img = require(`@/assets/images/${p.imgurl}`);
        }

        const state = reactive({
            yearFilter: [],
            currentTab: "All",
        });

        return {
            projects,
            ...toRefs(state),
        };
    },
    computed: {},
});
</script>

<style rel="stylesheet" lang="scss">
.project-outer-container {
    margin-top: 10px;
    margin-bottom: 10px;
}
</style>
