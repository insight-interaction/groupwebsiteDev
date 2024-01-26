<template>
    <div id="home">
        <Nav />

        <div id="body">
            <div class="col-sm-none">
                <Hello />

                <div class="myrow row">
                    <div class="col-12">
                        <Projects />
                        <Team />
                        <Publications />
                        <Teaching />
                    </div>
                    <!-- <div class="col-3">
                    <News />
                    <Teaching />
                </div> -->
                </div>
            </div>
        </div>

        <Footer />
    </div>
</template>

<script lang="ts">
import "bootstrap/dist/css/bootstrap.css";
import { useHead } from "@vueuse/head";
import { useStore } from "vuex";

import Publications from "./App/Publications/Publications.vue";
import Hello from "./App/Hello.vue";
import Projects from "./App/Projects/Projects.vue";
import Team from "./App/Team/Team.vue";
import Teaching from "./App/Teaching/Teaching.vue";
import Footer from "./App/Footer.vue";
import Nav from "./App/Nav.vue";

import { defineComponent, computed, reactive, toRefs } from "vue";

export default defineComponent({
    name: "App",
    components: {
        Publications,
        Hello,
        Projects,
        Teaching,
        Team,
        Footer,
        Nav
    },
    setup() {
        const store = useStore();

        const state = reactive({
            svgStr: computed(() => store.state.svgStr),
        });

        const siteData = reactive({
            title: `Insight + Interaction Lab`,
            description: ``,
        });

        useHead({
            title: computed(() => siteData.title),
            meta: [
                {
                    name: `description`,
                    content: computed(() => siteData.description),
                },
                {
                    name: "keywords",
                    content: "",
                },
            ],
            link: [
                {
                    rel: 'icon',
                    href: require(`@/assets/fav.png`), // Use the imported favicon
                    type: 'image/x-icon'
                }
            ],
        });

        return {
            ...toRefs(state)
        };
    }
});
</script>

<style rel="stylesheet" lang="scss">
// fonts
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

@import url("https://fonts.googleapis.com/css2?family=Abel&display=swap");

@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100;0,9..40,200;0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;0,9..40,800;0,9..40,900;0,9..40,1000;1,9..40,100;1,9..40,200;1,9..40,300;1,9..40,400;1,9..40,500;1,9..40,600;1,9..40,700;1,9..40,800;1,9..40,900;1,9..40,1000&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Rethink+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Afacad:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');

::-moz-selection {
    background: $light-accent;
    color: $text-color;
}

::selection {
    background: $light-accent;
    color: $text-color;
}

html,
body {
    // overflow-x: hidden;
    width: 100vw;

    font-family: $main-font;
    font-weight: 300;
    font-size: 16px;
    background: white;

    color: $text-color;
    height: auto;
}

div.container {
    max-width: 1280px;
    padding: 10px auto;
}

div.section {
    padding: 0px 60px;
    // margin-top: 30px;
}

@media all and (min-width: 768px) {

    // margin: 0px 100px;
    div.myrow {
        margin-left: 30px;
        margin-right: 30px;
        margin-top: 30px;
        margin-bottom: 30px;
    }
}

@media all and (max-width: 768px) {
    div.myrow {
        margin: 20px 10px;
    }

    .section:not(#section-about):not(.navbar) div.container {
        padding: 10px 0;
    }
}

@media all and (max-width: 600px) {
    div.section {
        padding: 10px 20px;
    }
}

div#body {
    width: 100vw;
    overflow: hidden;
}

.heading-text {
    font-weight: 500;
    font-size: 2.4em;
}

.section-sub-head {
    font-weight: 500;
    font-size: 1.2em;
    padding-bottom: 0.5em;
    color: $dark-accent;
}

.section-head {
    font-weight: 600;
    font-size: 1.6em;
    padding-bottom: 10px;

    color: $dark-accent; // $color1;

    &::before {
        display: block;
        height: 4rem;
        margin-top: -4rem;
        visibility: hidden;
        content: "";
    }

    &.section-head-padding {
        padding-top: 30px;
        padding-bottom: 10px;
    }


    &>span {
        padding: 8px 0;
    }
}
</style>
