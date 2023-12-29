<template>
    <div class="section" id="section-project">
        <div class="container">
            <div class="section-head" id="themes"><span>Research Themes</span></div>
            <!-- Below is a list of our main research themes in the area of AI Interpretability, Human-Computer Interaction, and visualization. -->
            <div class="project-outer-container">
                <div v-for="project in projects" :key="project.title">
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
        imgurl: "proj_transformer.png",
        title: "Applied Interpretability",
        about: "We focus on understanding the inner workings of large language models (LLMs), and based on these findings, improving the controllability of current model behavior to secure human benefits. Our work targets real-world problems derived from AI safety research, e.g., hallucination, privacy, and copyright issues. Previously, we conducted preliminary explorations into the world models of toy GPT models and diffusion models, which were shown to causally impact model generations.",
        id: "proj_transform",
    },
    {
        imgurl: "proj_dashboard.png",
        title: "Human-LLM Interaction",
        about: "We ask if chatbot LLMs encode internal representations of the user and itself, and if true, how we should surface the internal mind of LLMs for safe and reliable use.",
        id: "proj_dashboard",
    },
    {
        imgurl: "proj_visualization.png",
        title: "Visualization",
        about: "We develop novel interactive visualization tools to study mechanisms in AI models such as transformer self-attention and contextual embeddings.",
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
