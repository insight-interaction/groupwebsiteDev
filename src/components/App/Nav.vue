<template>
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
                    <li class="nav-item" :class="{ active: activeSection === 'courses' }">
                        <a class="nav-link" href="#courses" @click.stop="setActiveSection('courses')">Courses</a>
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

        const headerLogo = require(`@/assets/logos/headerlogo.svg`);

        const toggleNavbar = () => {
            state.navShow = !state.navShow;
        };

        const setActiveSection = (section: string) => {
            state.activeSection = section;
            // console.log(section);
        }

        const onScroll = () => {
            const scrollPosition = window.scrollY + 100;

            // const home = document.getElementById("home-sec");
            const themes = document.getElementById("themes");
            const team = document.getElementById("team");
            const pubs = document.getElementById("publications");
            const courses = document.getElementById("courses");

            // Logic to determine which section is in view
            if (themes && scrollPosition < themes.offsetTop) {
                setActiveSection('home');
            } else if (themes && team && scrollPosition >= themes.offsetTop && scrollPosition < team.offsetTop) {
                setActiveSection('themes');
            } else if (team && pubs && scrollPosition >= team.offsetTop && scrollPosition < pubs.offsetTop) {
                setActiveSection('team');
            } else if (pubs && courses && scrollPosition >= pubs.offsetTop && scrollPosition < Math.min(courses.offsetTop, document.documentElement.offsetHeight - document.documentElement.clientHeight - 100)) {
                setActiveSection('pubs');
            } else {
                setActiveSection('courses');
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
        };
    },
    computed: {}
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
        width: max-content;
        min-width: 200px;

        img {
            max-height: 18px;
            margin: 0 0 0 -10px;
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
        margin-top: 4px;
    }

}

@media all and (min-width: 768px) {
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

@media all and (min-width: 768px) {
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
        margin-left: 0px !important;
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

@media all and (max-width:450px) {
    .navbar {
        padding-top: 0.4rem;
        padding-bottom: 0.4rem;
    }

    .navbar-toggler {
        transform: scale(0.9);
    }

    .navbar-brand {
        margin-left: -10px !important;
    }

    .navbar-brand img {
        max-height: 16px !important;
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
