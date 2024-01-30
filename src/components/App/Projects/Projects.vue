<template>
    <div class="section" id="section-project">
        <div class="container">
            <div class="section-head" id="themes"><span>Research Themes</span></div>
            <!-- Below is a list of our main research themes in the area of AI Interpretability, Human-Computer Interaction, and visualization. -->
            <div class="project-outer-container row">
                <div v-for="project in projects" :key="project.title" class="project-inner-container col-md-4 col-sm-12">
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
        title: "AI Interpretability",
        about: "We aim to understand the inner workings of complex machine learning models, and use these findings to improve the controllability of model behavior. Our work targets real-world problems, such as ensuring factuality and avoiding toxicity. We also explore basic scientific questions about neural network behavior, such as how they model the world that produces the data they see.",
        id: "proj_transform",
    },
    {
        imgurl: "proj_hci.gif",
        title: "Human-Computer Interaction",
        about: "How can we build human-centered systems in the age of AI? A core interest is interface design for AI language models. One of our current projects aims to build interfaces that surface the inner workings of LLMs to users.. We are also interested in developing new techniques for practical applications such as language learning to enhance user experiences and effectiveness.",
        id: "proj_dashboard",
    },
    {
        imgurl: "proj_vis.gif",
        title: "Data Visualization",
        about: "We investigate the use of data visualization for uncovering patterns and communicating them in novel ways. To this aim, we develop innovative interactive visualizations for real-world applications, with focuses on fields such as artificial intelligence and healthcare. Additionally, we explore the integration of visualization techniques in the realm of art, taking advantage of its revelatory and expressive power.",
        id: "proj_vis",
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
    // margin-top: 10px;
    margin-bottom: 10px;
}

@media all and (max-width: 600px) {
    .project-outer-container {
        margin-bottom: 0px;
    }
}
</style>
