<template>
    <div class="section" id="section-people">
        <div class="anchor" id="courses"></div>
        <div class="container">
            <div class="section-head" id="my-courses"><span>Courses</span></div>
            <div class="row">
                <div v-for="course in courses" :key="course.id"
                    class="col-md-6 col-sm-12 d-flex flex-wrap align-items-center img-wrapper course-container">
                    <div class="course-inner">

                        <a :href="course.site" target="_blank" :title="course.number">
                            <img :src="course.img" class="mx-auto d-block" /></a>
                        <div class="caption">
                            <div class="course-title">

                                <a :href="course.site" target="_blank" title="Course Website">
                                    {{ course.number }}: {{ course.title }}

                                    <LinkOutlined :style="{ verticalAlign: 'middle' }" />
                                </a>
                            </div>

                            <p class="course-description">
                                {{ course.desc }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import "bootstrap/dist/css/bootstrap.css";
import * as _ from "underscore";

import { defineComponent } from "vue";

import { reactive, toRefs } from "vue";

import { LinkOutlined } from "@ant-design/icons-vue";

const courses = [
    {
        imgurl: "course_cs73.png",
        number: "COMPSCI 73",
        title: "Code, Data, and Art",
        site: "https://wattenberg.github.io/cs73/",
        desc: "A studio course where software is used as an artistic medium. The course is designed to expose students to current perspectives on the intersection of computer science and art, and to build skills that will allow them to express themselves creatively via software. An additional focus will be the role of data in modern artistic practice.",
        id: "cs73",
    },
    {
        imgurl: "course_hbs.jpg",
        number: "HBS 2135",
        site: "https://www.hbs.edu/coursecatalog/2135.html",
        title: "Data Visualization for Analysis and Communication",
        desc: "A course designed for students who expect to analyze or present data during their career—and these days, data is everywhere, from finance to management consulting. The course will discuss how to critically evaluate visualizations, and how to use them as a bridge between quantitative analysis and decision-making.",
        id: "hbs",
    },
] as any[];

export default defineComponent({
    name: "Courses",
    components: { LinkOutlined },
    setup() {
        const state = reactive({});

        for (let c of courses) {
            c.img = require(`@/assets/images/${c.imgurl}`);
        }

        return {
            courses,
            ...toRefs(state),
        };
    },
    computed: {},
});
</script>

<style rel="stylesheet" lang="scss">
div.course-container {
    position: relative;
    display: block;

    .course-inner {
        width: 100%;
        display: block;
        position: relative;
        margin-bottom: 10px;
    }

    img {
        width: 100%;
        display: block;
        aspect-ratio: 16/9;
        margin: 0 !important;

        // border: 2px solid $light-accent;
        border-radius: 2px;

        border: 2px solid transparent;
        // transition: 0.5s;
        background: linear-gradient(transparent, transparent) padding-box,
            linear-gradient(135deg, $dark-accent, $light-accent) border-box;
    }

    a {
        color: inherit;
    }

    .caption {
        font-family: $title-font;
        font-weight: 500;
        position: absolute;
        bottom: 2px;
        left: 2px;
        background: rgb($text-color, 0.7);
        /* Semi-transparent background */
        color: $light-accent;
        width: calc(100% - 4px);
        display: block;
        // text-align: center;
        padding: 12px 18px;

        .course-title {
            margin-bottom: 2px;

            a {

                display: flex;
                // align-items: center;
                justify-content: space-between;
                text-decoration: none;
                transition: 0.5s;

                &:hover {
                    opacity: 0.9;
                }

                svg {
                    margin-top: 4px;
                    margin-left: 4px;
                }
            }
        }

        p.course-description {
            font-size: smaller;
            font-weight: 300;
            font-family: $main-font;
            color: white;
            opacity: 0;
            transform: translateY(100%);
            transform-origin: top;
            transition: 0.5s;
            margin-bottom: 0;
            margin-top: -80px;
            // font-size: 0;
        }

        &:hover {
            p.course-description {
                opacity: 1;
                transform: translateY(0);
                margin-top: 0;
                // font-size: smaller;
                // height: 100%;
            }
        }
    }
}

@media all and (max-width: 1020px) {
    .course-container {
        width: 100% !important;

        &:not(:hover) {
            p.course-description {
                margin-top: -60px !important;
            }
        }
    }
}

@media all and (max-width: 900px) {
    .course-container {
        &:not(:hover) {
            p.course-description {
                margin-top: -70px !important;
            }
        }
    }
}

@media all and (max-width: 800px) {
    .course-container {
        &:not(:hover) {
            p.course-description {
                margin-top: -80px !important;
            }
        }
    }
}

@media all and (max-width: 600px) {
    #my-courses {
        margin-top: 20px;
    }
}

@media all and (max-width: 500px) {
    .course-container {
        &:not(:hover) {
            p.course-description {
                margin-top: -120px !important;
            }
        }
    }
}

@media all and (max-width: 400px) {
    .course-container {
        &:not(:hover) {
            p.course-description {
                margin-top: -160px !important;
            }
        }
    }
}
</style>
