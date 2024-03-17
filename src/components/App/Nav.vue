<template>
    <nav class="navbar navbar-expand-lg sticky-top section" v-bind:class="{ navbarOpen: navShow }">
        <div class="container">
            <div class="navbar-brand">
                <a href="https://seas.harvard.edu/" target="_blank" title="Harvard SEAS"><img :src="harvardLogo" /></a>
                <a-divider id="nav-divider" type="vertical" class="nav-hide" style="
                            height: 36px;
                            background-color: white;
                            opacity: 0.5;
                            width: 2px;
                            margin: 0 10px;
                            transform: rotate(15deg);
                            transition: 0.5s;
                        " />
                <a id="nav-headlogo" href="#" title="Insight + Interaction" class="nav-hide"><img
                        :src="headerLogo" /></a>
            </div>

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
                    <li class="nav-item" :class="{ active: activeSection === 'courses' }">
                        <a class="nav-link" href="#courses" @click.stop="setActiveSection('courses')">Courses</a>
                    </li>
                    <li class="nav-item" :class="{ active: activeSection === 'contact' }">
                        <a class="nav-link" href="#contact" @click.stop="setActiveSection('contact')">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script lang="ts">
import "bootstrap/dist/css/bootstrap.css";

import { defineComponent, reactive, toRefs, onMounted, onBeforeUnmount } from "vue";

export default defineComponent({
    name: "Nav",
    setup() {
        const state = reactive({
            navShow: false,
            activeSection: "home",
        });

        const headerLogo = require(`@/assets/logos/footerlogo.svg`);
        const harvardLogo = require(`@/assets/logos/harvardlogo.svg`);

        const toggleNavbar = () => {
            state.navShow = !state.navShow;
        };

        const setActiveSection = (section: string) => {
            state.activeSection = section;
            // console.log(section);
        };

        const onScroll = () => {
            const scrollPosition = window.scrollY + 100;

            // const home = document.getElementById("home-sec");
            const themes = document.getElementById("themes");
            const team = document.getElementById("team");
            const pubs = document.getElementById("publications");
            const courses = document.getElementById("courses");
            const contact = document.getElementById("contact");

            // Logic to determine which section is in view
            if (themes && scrollPosition < themes.offsetTop) {
                setActiveSection("home");
            } else if (
                themes &&
                team &&
                scrollPosition >= themes.offsetTop &&
                scrollPosition < team.offsetTop
            ) {
                setActiveSection("themes");
            } else if (
                team &&
                pubs &&
                scrollPosition >= team.offsetTop &&
                scrollPosition < pubs.offsetTop
            ) {
                setActiveSection("team");
            } else if (
                pubs &&
                courses &&
                scrollPosition >= pubs.offsetTop &&
                scrollPosition <
                courses.offsetTop
            ) {
                setActiveSection("pubs");
            } else if (courses && contact && scrollPosition >= courses.offsetTop && scrollPosition <
                Math.min(
                    contact.offsetTop,
                    document.documentElement.offsetHeight -
                    document.documentElement.clientHeight -
                    100
                )) {
                setActiveSection("courses");
            } else {
                setActiveSection("contact");
            }

            if (scrollPosition - 100 > 80) {
                document.querySelectorAll(".navbar-brand img").forEach((el) => {
                    const img = el as HTMLImageElement;
                    img.style.maxHeight = "48px";
                    img.style.minWidth = "160px";
                });

                document.querySelectorAll(".navbar-brand .nav-hide").forEach((el) => {
                    if ((el as any).id === "nav-divider") {

                        (el as any).style.opacity = "0.5";
                    } else {

                        (el as any).style.opacity = "1";
                    }
                    (el as any).style.visibility = "visible";
                    (el as any).style.pointerEvents = "auto";
                    (el as any).style.width = "auto";
                });
            } else {
                document.querySelectorAll(".navbar-brand img").forEach((el) => {
                    const img = el as HTMLImageElement;
                    img.style.maxHeight = "60px";
                    img.style.minWidth = "200px";
                });

                document.querySelectorAll(".navbar-brand .nav-hide").forEach((el) => {
                    (el as any).style.opacity = "0";
                    (el as any).style.visibility = "hidden";
                    (el as any).style.pointerEvents = "none";
                    (el as any).style.width = "0";
                });
            }
        };

        onMounted(() => {
            window.addEventListener("scroll", onScroll);
        });

        onBeforeUnmount(() => {
            window.removeEventListener("scroll", onScroll);
        });

        return {
            ...toRefs(state),
            toggleNavbar,
            setActiveSection,
            onScroll,
            headerLogo,
            harvardLogo,
        };
    },
    computed: {},
});
</script>

<style rel="stylesheet" lang="scss">
nav {
    // height: 10px;
    // width: 100%;
    padding: 0px 20px;
    font-family: $title-font;
    background-color: $dark-accent;

    a {
        color: white !important;
        transition: 0.5s !important;
    }

    a:hover {
        opacity: 0.7 !important;
    }

    .navbar-brand {
        font-weight: 500;
        font-size: 1.1em;
        margin-left: 10px;
        transition: 0.5s;
        width: max-content;
        // min-width: 300px;
        display: flex;
        align-items: center;

        .nav-hide {
            opacity: 0;
            visibility: hidden;
            pointer-events: none;
        }

        img {
            max-height: 60px;
            width: auto;
            min-width: 200px;
            margin: 0 0 0 -10px;
            transition: 0.5s;
        }

        #nav-headlogo img {
            padding: 2px;
            margin-left: 4px !important;
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
        // margin-right: 10px;
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
        margin-top: 4px;
    }
}

@media all and (max-width: 920px) {
    .navbar-brand img {
        max-height: 48px !important;
        min-width: 160px !important;
    }
}

@media all and (max-width: 830px) {
    .navbar-brand img {
        max-height: 36px !important;
        min-width: 120px !important;
    }
}

@media all and (min-width: 890px) {
    nav {
        padding: 0px 60px;
    }

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
    .navbar-brand {
        // margin-left: 10px !important;
        padding: 0;
        // min-width: 120px !important;
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

    #nav-divider {
        height: 28px !important;
        margin: 0 6px !important;
    }
}

@media all and (max-width: 450px) {
    .navbar {
        padding: 0.4rem 10px;
    }

    .navbar-toggler {
        transform: scale(0.9);
    }

    .navbar-brand {
        margin-left: 10px !important;
    }

    // .navbar-brand img {
    //     max-height: 16px !important;
    // }
}

@media all and (max-width: 400px) {
    .navbar {
        padding-left: 0;
        padding-right: 0;
    }
}

@media all and (max-width: 350px) {
    .navbar-brand img {
        max-height: 32px !important;
    }
}

@media all and (max-width: 300px) {
    .navbar-brand {
        margin-top: -2px;

        img {
            max-height: 24px !important;
        }
    }

    #nav-divider {
        height: 20px !important;
        margin: 4px 2px 0 !important;
    }

    .navbar-toggler {
        transform: scale(0.7);
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
    -webkit-transition: 0.5s ease-in-out;
    -moz-transition: 0.5s ease-in-out;
    -o-transition: 0.5s ease-in-out;
    transition: 0.5s ease-in-out;
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
    -webkit-transition: 0.25s ease-in-out;
    -moz-transition: 0.25s ease-in-out;
    -o-transition: 0.25s ease-in-out;
    transition: 0.25s ease-in-out;
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
