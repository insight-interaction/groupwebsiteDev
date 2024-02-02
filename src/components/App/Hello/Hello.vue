<template>
    <div class="section" id="section-about" title="tap to change the wind!">
        <!-- <img class="home-bg" src="https://sites.harvard.edu/insight-lab/files/2022/10/wind_map-e1665190001416.jpg" /> -->
        <Wind />

        <div class="container">
            <div id="home-sec">
                <!-- <img class="section-about-logo" :src="require(`@/assets/logo.svg`)" /> -->
                <Logo />
                <!-- <div class="section-about-head">Insight + Interaction Lab</div> -->
                <div class="section-about-introtext">
                    We seek to understand the inner workings of AI systems, and use these insights
                    to enable better human-AI interaction. Key approaches in our research include
                    <span class="emphasis orange">data visualization</span>,
                    <span class="emphasis green">mechanistic interpretability</span>, and even
                    <span class="emphasis">artistic exploration</span>.
                </div>

                <a id="down-arrow" class="arrow-button" href="#themes" title="Go to main content">
                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                </a>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import "bootstrap/dist/css/bootstrap.css";

import { defineComponent } from "vue";

import Logo from "./Logo.vue";
import Wind from "./Wind.vue";

import { reactive, toRefs } from "vue";

export default defineComponent({
    name: "Hello",
    components: { Logo, Wind },
    setup() {
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

    padding-bottom: 20px;
    padding-top: 20px;

    margin-top: 0px !important;
    position: relative;
    overflow: hidden;
    z-index: 1;

    iframe.home-bg {
        width: 100%;
        margin-top: -90px;
        min-height: 50vh;

        canvas {
            width: 100% !important;
            height: 100% !important;
        }
    }

    img.home-bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0.1;
        margin: 0 !important;
        z-index: -1;

        -webkit-mask-image: -webkit-gradient(linear,
                left bottom,
                left top,
                from(rgba(0, 0, 0, 1)),
                to(rgba(0, 0, 0, 0)));
        mask-image: linear-gradient(to top, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 0) 100%);
    }

    img.section-about-logo {
        margin: 0px auto 20px;
        display: block;
        width: 100%;
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
    // text-align: center;
    font-size: 18px;
    color: $lightest-accent;
    transition: 0.5s;

    span.emphasis {
        font-weight: 300;
        // letter-spacing: 0.2px;
        // color: $lightest-accent;

        // background: -webkit-linear-gradient(45deg, white, $tag-color-3);
        // background: -webkit-linear-gradient(45deg, white, $light-accent) !important;
        // -webkit-background-clip: text !important;
        // background-clip: text !important;
        // -webkit-text-fill-color: transparent !important;
        transition: 0.5s;
        font-family: $main-font;

        &:hover {
            letter-spacing: 0.2px;
            color: white;
        }
    }

    // span.orange {
    //     background: -webkit-linear-gradient(45deg, white, $tag-color-1);
    // }

    // span.green {
    //     background: -webkit-linear-gradient(45deg, white, $tag-color-2);
    // }

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
    transition: 0.5s;
    font-size: larger;
    width: max-content;
    margin: 20px auto 0;
}

#down-arrow:hover {
    opacity: 0.7;
}
</style>
