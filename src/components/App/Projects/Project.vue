<template>
    <div class="row project-container" ref="pub" v-bind:id="project.id">
        <div class="col-md-5 col-sm-12 d-flex flex-wrap align-items-center">
            <img :src="project.img" class="proj_img mx-auto d-block" />
        </div>
        <div class="col-md-7 col-sm-12" style="">
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
import { useStore } from "vuex";

import { ref, onMounted, computed, reactive, toRefs, h, watch } from "vue";

export default defineComponent({
    name: "Project",
    props: ["project"],
    components: {},
    setup(props) {
        const store = useStore();

        const state = reactive({
            svgStr: computed(() => store.state.svgStr),
        });
        const pub = ref(null);

        onMounted(() => { });

        return {
            ...toRefs(state),
            pub,
        };
    },
    computed: {},
});
</script>

<style rel="stylesheet" lang="scss">
.project-container {
    padding: 0 0 1.4em;

    // border-bottom: 1px solid black;
    a {
        color: $text-color;
        text-decoration: none;
    }
}

.proj_img {
    max-width: 100%;
}

.proj_title {
    font-size: 1.2em;
    font-weight: 600;
    font-family: $title-font;
    margin-bottom: 2px;
    margin-top: 2px;
}

.proj_details {
    font-size: 0.9em;
    // font-family: $title-font;
}
</style>
