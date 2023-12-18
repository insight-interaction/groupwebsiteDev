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

.publicationDiv i.fas {
    vertical-align: middle;
    width: 17px !important;
}

.proj_book {
    vertical-align: middle;
    color: $text-color;
    font-weight: 300;
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

.proj_award {
    font-size: 14px;
    color: #96351e;
}

.proj_author {
    font-size: 15px;
}

.proj_details {
    font-size: 0.9em;
}

.badge-j {
    color: #cf1322;
    background: #fff1f0;
    border: 1px solid #ffa39e;
    padding: 0.25em 0.35em !important;
    // background-color: #f58e85 !important;
}

.badge-c {
    color: #d46b08;
    background: #fff7e6;
    border: 1px solid #ffd591;
    padding: 0.25em 0.35em !important;

    // background-color: #f9ad45 !important;
}

.badge-o {
    color: #096dd9;
    background: #e6f7ff;
    border: 1px solid #91d5ff;
    padding: 0.25em 0.35em !important;

    // background-color: #90c7f5 !important;
}

.badge {
    font-weight: 400;
}

.badge-venue {
    margin-left: 2px;
    margin-right: 2px;
    display: inline-block;
    min-width: 10px;
    padding: 3px 7px;
    font-size: 12px;
    font-weight: 400;
    line-height: 1;
    color: #000000d9;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    background: #fafafa;
    border: 1px solid #d9d9d9;
    padding: 0.25em 0.35em !important;

    border-radius: 0.25rem;
}

.proj_icon {
    color: #333 !important;
    margin-right: 16px;
    font-size: 12px;
}

.ant-tooltip-inner {
    color: #263459;
    background-color: #e4eaf2;
    width: 400px;
}
</style>
