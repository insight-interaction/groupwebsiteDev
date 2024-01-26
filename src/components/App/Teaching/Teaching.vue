<template>
    <div class="section" id="section-people">
        <div class="container">
            <div class="section-head" id="courses"><span>Courses</span></div>
            <div class="row">
                <div
                    class="col-md-6 col-sm-12 d-flex flex-wrap align-items-center img-wrapper course-container"
                >
                    <img
                        :src="require(`@/assets/images/course_cs73.png`)"
                        class="mx-auto d-block"
                    />
                    <div class="caption">
                        COMPSCI 73: Code, Data, and Art

                        <a href="https://wattenberg.github.io/cs73/">
                            <LinkOutlined :style="{ verticalAlign: 'middle' }" />
                        </a>

                        <br />

                        <span class="course-description">
                            A studio course where software is used as an artistic medium. The course
                            is designed to expose students to current perspectives on the
                            intersection of computer science and art, and to build skills that will
                            allow them to express themselves creatively via software. An additional
                            focus will be the role of data in modern artistic practice.</span
                        >
                    </div>
                </div>
                <div
                    class="col-md-6 col-sm-12 d-flex flex-wrap align-items-center img-wrapper course-container"
                >
                    <img :src="require(`@/assets/images/course_hbs.jpg`)" class="mx-auto d-block" />
                    <div class="caption">
                        Data Visualization for Analysis and Communication

                        <a href="https://www.hbs.edu/coursecatalog/2135.html">
                            <LinkOutlined :style="{ verticalAlign: 'middle' }" />
                        </a>

                        <br />

                        <span class="course-description">
                            A course designed for students who expect to analyze or present data
                            during their career—and these days, data is everywhere, from finance to
                            management consulting. The course will discuss how to critically
                            evaluate visualizations, and how to use them as a bridge between
                            quantitative analysis and decision-making.</span
                        >
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
    display: inline-block;

    img {
        width: 100%;
        display: block;
        max-height: 320px;
    }

    a {
        color: inherit;
    }

    .caption {
        position: absolute;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
        color: #fff;
        width: calc(100% - 24px);
        // text-align: center;
        padding: 8px;

        span.course-description {
            font-size: smaller;
            font-weight: 200;
        }
    }
}
</style>
