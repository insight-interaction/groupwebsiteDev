<template>
    <div id="home">
        <nav class="navbar navbar-expand-lg sticky-top section" v-bind:class="{ navbarOpen: navShow }">
            <div class="container">
                <a class="navbar-brand" href="#home" style="margin-left: 30px" title="Insight + Interaction">Insight +
                    Interaction</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    @click.stop="toggleNavbar()">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent" v-bind:class="{ show: navShow }">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#home" title="Home">Home<span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#themes" title="Themes">Themes</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#team" title="Team">Team</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#publications" title="Publications">Publications</a>
                        </li>
                        <!-- <li class="nav-item">
                        <a class="nav-link" href="#sec-press">Course</a>
                    </li> -->
                    </ul>
                </div>
            </div>
        </nav>

        <div id="body">
            <div class="col-sm-none">
                <Hello />

                <div class="myrow row">
                    <div class="col-12">
                        <Projects />
                        <Team />
                        <Publications />
                    </div>
                    <!-- <div class="col-3">
                    <News />
                    <Teaching />
                </div> -->
                </div>
            </div>

            <div class="col-sm-only">
                <Hello />
                <div class="row myrow" id="row-profile">
                    <div class="col-12">
                        <Projects />
                        <Team />
                        <Publications />
                    </div>
                </div>
            </div>
        </div>

        <footer class="footer h-100">
            <div class="container">
                <a id="up-arrow" class="arrow-button" href="#home" title="Back to top"><img :src="toTop" /></a>
                <div class="footer-imgs">
                    <a href="#home" title="Insight + Interaction"><img :src="footerLogo" /></a>
                    <a-divider type="vertical"
                        style="height: 40px; background-color: white; opacity: 0.5; width: 2px; margin: 0 20px; transform: rotate(15deg);" />
                    <a href="https://seas.harvard.edu/" target="_blank" title="Harvard SEAS"><img :src="harvardLogo" /></a>
                </div>
                <!-- <div class="align-middle justify-content-center align-self-center text-center">
                <p class="update">
                    Last updated: Dec 2023
                </p>
            </div> -->
            </div>
        </footer>
    </div>
</template>

<script lang="ts">
import "bootstrap/dist/css/bootstrap.css";
import { useHead } from "@vueuse/head";
// import { Head } from "@egoist/vue-head";

import { defineComponent } from "vue";
import { useStore } from "vuex";

import Publications from "./App/Publications/Publications.vue";
import Hello from "./App/Hello.vue";
import Projects from "./App/Projects/Projects.vue";
import Team from "./App/Team/Team.vue";

import { computed, reactive, toRefs } from "vue";

export default defineComponent({
    name: "App",
    components: {
        Publications,
        Hello,
        Projects,
        Team,
    },
    setup() {
        const store = useStore();

        const state = reactive({
            svgStr: computed(() => store.state.svgStr),
            navShow: false,
        });

        const footerLogo = require(`@/assets/footerlogo.svg`);
        const harvardLogo = require(`@/assets/harvardlogo.svg`);
        const toTop = require(`@/assets/backtotop.svg`);

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

        const toggleNavbar = () => {
            state.navShow = !state.navShow;
        };

        return {
            ...toRefs(state),
            toggleNavbar,
            footerLogo,
            harvardLogo,
            toTop
        };
    },
    computed: {},
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
    overflow-x: hidden;

    width: 100vw;

    font-family: $main-font;
    font-weight: 300;
    font-size: 16px;
    background: white;

    color: $text-color;

    scroll-behavior: smooth;
}

div.container {
    max-width: 1280px;
    padding: 10px auto;
}

nav {
    // height: 10px;
    // width: 100%;
    background-color: $dark-accent;
    padding: 0px 20px;
    font-family: $title-font;

    a {
        color: white !important;
    }

    a:hover {
        color: $light-accent !important;
        transition: 0.5s;
    }

    .navbar-brand {
        font-weight: 500;
        font-size: 1.1em;
    }

    .nav-link {
        font-size: smaller;
    }
}

@media all and (min-width: 768px) {

    // margin: 0px 100px;
    div.myrow {
        margin-left: 30px;
        margin-right: 30px;
        margin-top: 30px;
        margin-bottom: 30px;
    }

    div.col-sm-only {
        display: none;
    }

    div.section {
        padding: 0px 60px;
        // margin-top: 30px;
    }
}

@media all and (max-width: 768px) {
    div.myrow {
        margin: 20px 10px;
    }

    div.col-sm-none {
        display: none;
    }

    div.section {
        padding: 10px 20px;
    }

    .section:not(#section-about):not(.navbar) div.container {
        padding: 10px 0;
    }

    .navbar-brand {
        margin-left: 0 !important;
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
        // background: url("~@/assets/background.png");

        // background: url(/assets/background.png);
        background-repeat: no-repeat;
        background-size: 100% 100%;
        padding: 8px 0;
    }
}


.footer {
    margin-top: 20px;
    background-color: $dark-accent;
    height: 40px;
    padding-top: 12px;
    padding-bottom: 12px;
    color: white;
    font-size: smaller;
    text-align: center;
    position: relative;

    img {
        max-height: 40px;
        width: auto;
        margin: 0 !important;
        transition: 0.5s;
    }

    .footer-imgs img:hover {
        opacity: 0.7;
    }

    p {
        margin-bottom: 0;
    }

    p.update {
        font-size: x-small;
        margin-bottom: 0;
        font-weight: 200;
        // font-style: italic;
    }

    #up-arrow {
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
        transition: 0.5s;
    }

    #up-arrow img {
        max-height: 20px;
    }

    #up-arrow:hover {
        opacity: 0.7;
    }
}

@media (max-width: 500px) {
    .footer {
        img {
            max-height: 35px;
        }

        #up-arrow {
            right: 12px;
        }
    }
}
</style>
