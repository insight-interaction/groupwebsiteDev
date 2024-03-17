<template>
    <div class="row project-container" ref="proj" v-bind:id="project.id">
        <div class="col-md-12 col-sm-12 d-flex flex-wrap align-items-center img-wrapper">
            <img :src="project.img" class="proj_img mx-auto d-block" :title="project.title" />
        </div>
        <div class="col-md-12 col-sm-12 proj">
            <div class="proj_title">{{ project.title }}</div>
            <span class="proj_details">
                {{ project.about }}</span>
        </div>
    </div>
</template>

<script lang="ts">
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

import { defineComponent } from "vue";

import { ref, onMounted, reactive, toRefs, } from "vue";

export default defineComponent({
    name: "Project",
    props: ["project"],
    components: {},
    setup() {

        const state = reactive({
        });
        const proj = ref(null);

        onMounted(() => { });

        return {
            ...toRefs(state),
            proj,
        };
    },
    computed: {},
});
</script>

<style rel="stylesheet" lang="scss">
.project-container {
    padding: 0 0 1.4em;
    align-items: center;

    // border-bottom: 1px solid black;
    a {
        color: $text-color;
        text-decoration: none;
    }
}

.img-wrapper {
    max-width: 100%;
    overflow: hidden;

    aspect-ratio: 16 / 9;
    object-fit: contain;
}

.proj_img {
    max-width: 100%;
    transition: 0.5s;
    box-shadow: 0 4px 8px #ccc;
    border-radius: 2px;
    margin-bottom: 12px;
    margin-top: 4px;
}

.proj_title {
    font-size: 1.2em;
    color: $med-accent;
    font-weight: 600;
    font-family: $title-font;
    width: max-content;
    margin-bottom: 2px;
    margin-top: 2px;
    position: relative;
    z-index: 10;
}

// .proj_title::before {
//     // background-color: rgb($tag-color-2, 0.3);
//     background-color: rgb($med-accent, 0.3) !important;

//     content: "";
//     position: absolute;
//     width: calc(100% + 8px);
//     height: 50%;
//     left: -4px;
//     bottom: 0px;
//     z-index: -1;
//     // transform: rotate(-2deg);
// }

// .project-inner-container:nth-child(2) .proj_title::before {
//     background-color: rgb($tag-color-3, 0.3);
// }

// .project-inner-container:nth-child(3) .proj_title::before {
//     background-color: rgb($tag-color-1, 0.3);
// }

.proj_details {
    font-size: 0.9em;
    // font-family: $title-font;
}

@media all and (max-width: 1080px) {
    .project-inner-container {
        width: 50% !important;
    }
}

@media all and (max-width: 576px) {
    .project-inner-container {
        width: 100% !important;
    }
}
</style>
