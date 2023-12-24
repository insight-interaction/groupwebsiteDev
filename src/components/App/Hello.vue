<template>
    <div class="section" id="section-about">
        <div class="container" id="home-sec">
            <!-- <img class="section-about-logo" :src="require(`@/assets/logo.svg`)" /> -->
            <Logo />
            <!-- <div class="section-about-head">Insight + Interaction Lab</div> -->
            <div class="section-about-introtext">
                We seek to understand the inner workings of AI
                systems, and use these insights
                to enable better human-AI interaction. Key approaches in our research include <span class="emphasis">data
                    visualization</span>,
                <span class="emphasis">mechanistic interpretability</span>, and even <span class="emphasis">artistic
                    exploration</span>.
            </div>

            <a id="down-arrow" class="arrow-button" href="#themes" title="Go to main content">
                <i class="fa fa-angle-down" aria-hidden="true"></i>
            </a>
        </div>
    </div>
</template>

<script lang="ts">
import "bootstrap/dist/css/bootstrap.css";

import { defineComponent } from "vue";
import { useStore } from "vuex";

import Logo from "./Logo.vue";

import { onMounted, computed, reactive, toRefs, h, watch } from "vue";

export default defineComponent({
    name: "App",
    components: { Logo },
    setup() {
        const store = useStore();

        const state = reactive({});

        return {
            ...toRefs(state),
        };
    },
    computed: {}
});
</script>

<style rel="stylesheet" lang="scss">
div#section-about {
    background: $dark-accent;
    color: white;

    padding-bottom: 60px;
    padding-top: 60px;
    position: relative;

    img.section-about-logo {
        margin: 0px auto 20px;
        display: block;
        width: 100% // width: 300px;
            // height: 300px;
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

@media all and (max-width: 650px) {
    div.section-about-introtext {
        font-size: 16px;
    }
}


@media all and (max-width: 450px) {
    div.section-about-introtext {
        font-size: 14px;
    }
}

#down-arrow {
    text-align: center;
    display: block;
    color: white;
    margin-top: 20px;
    transition: 0.5s;
    font-size: larger;
}

#down-arrow:hover {
    opacity: 0.7;
}
</style>
