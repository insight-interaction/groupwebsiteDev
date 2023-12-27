<template>
    <div id="home">
        <nav class="navbar navbar-expand-lg sticky-top section" v-bind:class="{ navbarOpen: navShow }">
            <div class="container">
                <a class="navbar-brand" href="#" title="Insight + Interaction"><img :src="headerLogo" /></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    @click.stop="toggleNavbar()">
                    <div id="nav-icon" :class="{ open: navShow }">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent" v-bind:class="{ show: navShow }">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item" :class="{ active: activeSection === 'home' }">
                            <a class="nav-link" href="#" title="Home" @click.stop="setActiveSection('home')">Home</a>
                        </li>
                        <li class="nav-item" :class="{ active: activeSection === 'themes' }">
                            <a class="nav-link" href="#themes" title="Themes"
                                @click.stop="setActiveSection('themes')">Themes</a>
                        </li>
                        <li class="nav-item" :class="{ active: activeSection === 'team' }">
                            <a class="nav-link" href="#team" title="Team" @click.stop="setActiveSection('team')">Team</a>
                        </li>
                        <li class="nav-item" :class="{ active: activeSection === 'pubs' }">
                            <a class="nav-link" href="#publications" title="Publications"
                                @click.stop="setActiveSection('pubs')">Publications</a>
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
        </div>

        <footer class="footer h-100">
            <div class="container">
                <a id="up-arrow" class="arrow-button" href="#" title="Back to top"><img :src="toTop" /></a>
                <div class="footer-imgs">
                    <a href="#" title="Insight + Interaction"><img :src="footerLogo" /></a>
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
import { useStore } from "vuex";

import Publications from "./App/Publications/Publications.vue";
import Hello from "./App/Hello.vue";
import Projects from "./App/Projects/Projects.vue";
import Team from "./App/Team/Team.vue";

import { defineComponent, computed, reactive, toRefs, onMounted, onBeforeUnmount } from "vue";

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
            activeSection: "home"
        });

        const headerLogo = require(`@/assets/headerlogo.svg`);
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

        const setActiveSection = (section: string) => {
            state.activeSection = section;
        }

        const onScroll = () => {
            const scrollPosition = window.scrollY + 50;

            // const home = document.getElementById("home-sec");
            const themes = document.getElementById("themes");
            const team = document.getElementById("team");
            const pubs = document.getElementById("publications");

            // Logic to determine which section is in view
            if (themes && scrollPosition < themes.offsetTop) {
                setActiveSection('home');
            } else if (themes && team && scrollPosition >= themes.offsetTop && scrollPosition < team.offsetTop) {
                setActiveSection('themes');
            } else if (team && pubs && scrollPosition >= team.offsetTop && scrollPosition < pubs.offsetTop) {
                setActiveSection('team');
            } else {
                setActiveSection('pubs');
            }
        };

        onMounted(() => {
            window.addEventListener('scroll', onScroll);
        });

        onBeforeUnmount(() => {
            window.removeEventListener('scroll', onScroll);
        });

        return {
            ...toRefs(state),
            toggleNavbar,
            setActiveSection,
            onScroll,
            headerLogo,
            footerLogo,
            harvardLogo,
            toTop
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
        opacity: 0.7;
        transition: 0.5s;
    }

    .navbar-brand {
        font-weight: 500;
        font-size: 1.1em;
        margin-left: 10px;
        transition: 0.5s;

        img {
            max-height: 18px;
            margin: 0;
            transition: 0.5s;
        }
    }

    .nav-link {
        font-size: smaller;
        transition: 0.5s;
    }

    .nav-item.active .nav-link {
        color: $light-accent !important;
        pointer-events: none;
    }

    .navbar-toggler {
        padding: 0.25rem 0;
        margin-right: 10px;
        display: flex;
        align-items: center;
        transition: 0.5s;

        :hover {
            opacity: 0.7;
        }
    }

    .navbar-toggler:focus {
        box-shadow: none !important;
    }

    .navbar-collapse {
        transition: 0.5s;
    }

    .navbar-collapse.show {
        padding: 0 10px;
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

    .navbar-expand-lg .navbar-toggler {
        display: none;
    }

    .navbar-expand-lg .navbar-collapse {
        display: flex !important;
        flex-basis: auto;
    }

    .navbar-expand-lg .navbar-nav {
        flex-direction: row;
    }

    .navbar-expand-lg .navbar-nav .nav-link {
        padding-right: 0.5rem;
        padding-left: 0.5rem;
    }
}

@media all and (max-width: 768px) {
    div.myrow {
        margin: 20px 10px;
    }

    .section:not(#section-about):not(.navbar) div.container {
        padding: 10px 0;
    }

    .navbar-brand {
        margin-left: 0 !important;
        padding: 0;
    }

    .navbar-toggler {
        margin-right: 0 !important;
    }

    .navbar-collapse.show {
        padding: 0 !important;
    }

    nav.navbarOpen {
        box-shadow: 0px 3px 15px rgb($med-accent, 0.5);
    }
}

@media all and (max-width: 600px) {
    div.section {
        padding: 10px 20px;
    }
}

@media all and (max-width:450px) {
    .navbar {
        padding-top: 0.4rem;
        padding-bottom: 0.4rem;
    }

    .navbar-toggler {
        transform: scale(0.9);
    }

    .navbar-brand img {
        max-height: 16px !important;
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
        max-height: 25px;
        transition: 0.5s;
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

        #up-arrow img {
            max-height: 20px;
        }
    }
}

#nav-icon {
    width: 20px;
    height: 17px;
    position: relative;
    margin: 0px auto;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .5s ease-in-out;
    -moz-transition: .5s ease-in-out;
    -o-transition: .5s ease-in-out;
    transition: .5s ease-in-out;
    cursor: pointer;
}

#nav-icon span {
    display: block;
    position: absolute;
    height: 2px;
    width: 100%;
    background: white;
    border-radius: 2px;
    opacity: 1;
    left: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .25s ease-in-out;
    -moz-transition: .25s ease-in-out;
    -o-transition: .25s ease-in-out;
    transition: .25s ease-in-out;
}

#nav-icon span:nth-child(1) {
    top: 0px;
    -webkit-transform-origin: left center;
    -moz-transform-origin: left center;
    -o-transform-origin: left center;
    transform-origin: left center;
}

#nav-icon span:nth-child(2) {
    top: 7.5px;
    -webkit-transform-origin: left center;
    -moz-transform-origin: left center;
    -o-transform-origin: left center;
    transform-origin: left center;
}

#nav-icon span:nth-child(3) {
    top: 15px;
    -webkit-transform-origin: left center;
    -moz-transform-origin: left center;
    -o-transform-origin: left center;
    transform-origin: left center;
}

#nav-icon.open span:nth-child(1) {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg) scaleX(1.2);
    top: -1px;
    left: 1px;
}

#nav-icon.open span:nth-child(2) {
    width: 0%;
    opacity: 0;
}

#nav-icon.open span:nth-child(3) {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg) scaleX(1.2);
    top: 16px;
    left: 1px;
}
</style>
