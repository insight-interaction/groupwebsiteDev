<template>
    <div id="p5-canvas" ref="canvasOutlet"></div>
</template>

<script lang="ts">
import "bootstrap/dist/css/bootstrap.css";

import { defineComponent } from "vue";

import { reactive, toRefs } from "vue";

import { makeWind } from "./wind";

let d: any;
export default defineComponent({
    name: "Wind",

    mounted() {
        setTimeout(() => {
            makeWind(this.$refs.canvasOutlet as HTMLElement);
        });
    },

    setup() {

        const state = reactive({});

        return {
            ...toRefs(state),
        };
    },
    computed: {}
});
</script>

<style rel="stylesheet" lang="scss">
#p5-canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
    object-fit: cover;
    opacity: 0.8;
    margin: 0 !important;
    z-index: -1;

    -webkit-mask-image: -webkit-gradient(linear, left bottom, left top, from(rgba(0, 0, 0, 1)), to(rgba(0, 0, 0, 0)));
    mask-image: linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%);
}

canvas {
    width: 100% !important;
}
</style>
