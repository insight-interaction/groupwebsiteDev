<template>
    <div id="page">
        <nav class="navbar navbar-expand-lg sticky-top section" v-bind:class="{ navbarOpen: navShow }">
            <div class="container">
                <a class="navbar-brand" href="#" style="margin-left: 30px">Insight and Interaction</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    @click.stop="toggleNavbar()">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent" v-bind:class="{ show: navShow }">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#home">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#themes">Themes</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#team">Team</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#publications">Publications</a>
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
            <div class="align-middle justify-content-center align-self-center text-center">
                Last updated: Dec 2023
            </div>
        </footer>
    </div>
</template>

<script lang="ts">
import $ from "jquery";
import "bootstrap/dist/css/bootstrap.css";
import { useHead } from "@vueuse/head";
// import { Head } from "@egoist/vue-head";

import { defineComponent } from "vue";
import { useStore } from "vuex";

import Publications from "./App/Publications/Publications.vue";
import Hello from "./App/Hello.vue";
import Projects from "./App/Projects/Projects.vue";
import Team from "./App/Team/Team.vue";

import { onMounted, computed, reactive, toRefs, h, watch } from "vue";

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
        });

        const toggleNavbar = () => {
            state.navShow = !state.navShow;
        };

        return {
            ...toRefs(state),
            toggleNavbar,
        };
    },
    computed: {},
});
</script>

<style rel="stylesheet" lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");

@import url("https://fonts.googleapis.com/css2?family=Abel&display=swap");

$blue: #263459;
$color1: #96351e;
$color2: #dbb98f;

html,
body {
    overflow-x: hidden;

    width: 100vw;

    font-family: "Abel", sans-serif;
    font-size: 18px;
    background: white;

    color: #1d1d1f;

    scroll-behavior: smooth;
}

div.container {
    max-width: 1280px;
    padding: 10px auto;
}

nav {
    // height: 10px;
    // width: 100%;
    background-color: #194787;
    padding: 0px 20px;

    a {
        color: #f5f5f7 !important;
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
    color: $blue;
}

.section-head {
    font-weight: 500;
    font-size: 1.6em;
    padding-bottom: 10px;

    color: $blue; // $color1;

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
    background-color: $blue;
    height: 40px;
    color: white;
}
</style>
