<template>
    <div class="section" id="section-project">
        <div class="container">
            <div class="section-head" id="themes"><span>Research Themes</span></div>
            <!-- Below is a list of our main research themes in the area of AI Interpretability, Human-Computer Interaction, and visualization. -->
            <div v-for="project in projects" :key="project.title">
                <Project :project="project" />
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

const projects = [
    {
        imgurl: "proj_transformer.png",
        title: "Applied Interpretability",
        about: "Applied interpretability focuses on understanding the inner workings of large language models, and based on these findings, improving the controllability of current model behavior to secure human benefits. It benefits from an endless pool of real-world problems derived from AI safety research, e.g., hallucination, privacy, and copyright. Previously, we have conducted preliminary explorations into the world models of toy GPT models and diffusion models, which were shown to be causal to the generation of these models. Building on this work, we anticipate a productive line of research ahead.",
        id: "proj_transform",
    },
    {
        imgurl: "proj_dashboard.png",
        title: "Human-LLM Interaction",
        about: "We ask if chatbot LLMs encode internal representations of the user and itself, and if true, how we should surface the internal mind of LLMs for reliable and safe use.",
        id: "proj_dashboard",
    },
    {
        imgurl: "proj_visualization.png",
        title: "Visualization",
        about: "We develop novel interactive visualization tools to study mechanisms in AI models such as transformers and embeddings.",
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
$blue: #263459;
$color1: #96351e;
$color2: #dbb98f;

#section-research {
    .ant-card-head {
        min-height: 30px;

        .ant-card-head-title {
            padding-top: 8px;
            padding-bottom: 8px;
        }
    }

    img {
        border: 1px solid #5e7595;
    }

    .ant-card-body {
        padding: 8px 24px;
    }

    .anticon {
        vertical-align: 0.1em;
    }

    .ant-tabs {
        font-size: 15px;

        .research-head {
            font-size: 1.2em;
            font-weight: 500;
            // text-decoration: underline;
            // text-decoration-color: $color1;
            // text-decoration-thickness: 2px;
        }

        span.work-short {
            // border-bottom: 2px solid $color1;

            // text-decoration: underline;
            // text-decoration-color: $color1;
            // text-decoration-thickness: 2px;
        }
    }
}
</style>
