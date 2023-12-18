<template>
    <div class="section" id="section-about">
        <div class="container" id="home">
            <img class="section-about-logo" :src="require(`@/assets/grouplogo.png`)" />
            <div class="section-about-head">Insight + Interaction Lab</div>
            <div class="section-about-introtext">
                We seek to understand the inner workings of AI
                systems, and use these insights
                to enable better human-AI interaction. Key approaches in our research include <span class="emphasis">data
                    visualization</span>,
                <span class="emphasis">mechanistic interpretability</span>, and even <span class="emphasis">artistic
                    exploration</span>.
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import "bootstrap/dist/css/bootstrap.css";

import { defineComponent } from "vue";
import { useStore } from "vuex";

import { onMounted, computed, reactive, toRefs, h, watch } from "vue";

export default defineComponent({
    name: "App",
    components: {},
    setup() {
        const store = useStore();

        const state = reactive({});

        return {
            ...toRefs(state),
        };
    },
    computed: {},
});
</script>

<style rel="stylesheet" lang="scss">
div#section-about {
    background: $dark-accent;
    color: white;

    padding-bottom: 60px;
    padding-top: 60px;

    img.section-about-logo {
        margin: 0px auto;
        display: block;

        width: 300px;
        height: 300px;
    }
}

div.section-about-head {
    text-align: center;
    font-size: 40px;
    font-weight: 600;
    font-family: $title-font;
    padding-top: 20px;
    margin-bottom: 4px;
}

div.section-about-introtext {
    text-align: center;
    font-size: 18px;

    span.emphasis {
        font-weight: 500;
        // font-family: $accent-font;
        letter-spacing: 0.2px;
        // font-style: italic;
        // color: $light-accent;

        background: -webkit-linear-gradient(45deg, white, $light-accent);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
}
</style>
