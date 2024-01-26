<template>
    <div class="section" id="section-people">
        <div class="container">
            <div class="section-head" id="courses"><span>Courses</span></div>
            <div class="row">
                <div class="col-md-6 col-sm-12 d-flex flex-wrap align-items-center img-wrapper course-container">
                    <div class="course-inner">

                        <img :src="require(`@/assets/images/course_cs73.png`)" class="mx-auto d-block" />
                        <div class="caption">
                            <div class="course-title">
                                COMPSCI 73: Code, Data, and Art

                                <a href="https://wattenberg.github.io/cs73/" target="_blank" title="Course Website">
                                    <LinkOutlined :style="{ verticalAlign: 'middle' }" />
                                </a>
                            </div>

                            <p class="course-description">
                                A studio course where software is used as an artistic medium. The course
                                is designed to expose students to current perspectives on the
                                intersection of computer science and art, and to build skills that will
                                allow them to express themselves creatively via software. An additional
                                focus will be the role of data in modern artistic practice.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-sm-12 d-flex flex-wrap align-items-center img-wrapper course-container">
                    <div class="course-inner">
                        <img :src="require(`@/assets/images/course_hbs.jpg`)" class="mx-auto d-block" />
                        <div class="caption">
                            <div class="course-title">
                                HBS 2135: Data Visualization for Analysis and Communication

                                <a href="https://www.hbs.edu/coursecatalog/2135.html" target="_blank"
                                    title="Course Website">
                                    <LinkOutlined :style="{ verticalAlign: 'middle' }" />
                                </a>
                            </div>

                            <p class="course-description">
                                A course designed for students who expect to analyze or present data
                                during their career—and these days, data is everywhere, from finance to
                                management consulting. The course will discuss how to critically
                                evaluate visualizations, and how to use them as a bridge between
                                quantitative analysis and decision-making.</p>
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

export default defineComponent({
    name: "People",
    components: { LinkOutlined },
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
div.course-container {
    position: relative;
    display: block;

    .course-inner {
        width: 100%;
    }

    img {
        width: 100%;
        display: block;
        max-height: 320px;

        border: 2px solid $light-accent;
        border-radius: 2px;
    }

    a {
        color: inherit;
    }

    .caption {
        font-family: $title-font;
        font-weight: 500;
        position: absolute;
        bottom: 2px;
        background: rgb($text-color, 0.7);
        /* Semi-transparent background */
        color: $light-accent;
        width: calc(100% - 26px);
        display: block;
        // text-align: center;
        padding: 12px 18px;

        .course-title {
            margin-bottom: 2px;

            svg {
                margin-left: 2px;
                margin-top: -2px;
                transition: 0.5s;

                &:hover {
                    opacity: 0.8;
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
            transform-origin: bottom;
            transition: 0.5s;
            margin-bottom: 0;
            margin-top: -80px;
        }

        &:hover {
            p.course-description {
                opacity: 1;
                transform: translateY(0);
                margin-top: 0;
            }
        }
    }
}
</style>
