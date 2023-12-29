<template>
    <div class="section" id="section-research">
        <div class="container">
            <div class="section-head" id="publications">
                <div class="pub-header">
                    <span>Publications</span>
                    <div class="tag-select">
                        <a-radio-group class="tag-group" v-model:value="currentTag" size="small" button-style="outlined">
                            <a-radio-button v-for="tag in colorOptions" :value="tag" :title="tag">{{ tag }}</a-radio-button>
                        </a-radio-group>
                    </div>
                </div>
                <div class="slider-container">
                    {{ minYear }}
                    <a-slider range v-model:value="yearFilter" :min="minYear" :max="maxYear" tooltipPlacement="bottom" />{{
                        maxYear }}
                </div>
            </div>
            <div v-for="( publication, index ) in  filteredPublications " :key="publication.title">
                <Publication v-if="index < displayLimit" :publication="publication"
                    :class="{ visible: index < displayLimit - 1 }" />
            </div>
            <!-- Show More/Less Buttons -->
            <div class="publist-buttons">
                <a-button type="text" size="small" v-if="displayLimit < filteredPublications.length" @click="showMore">Show
                    More</a-button>
                <p class="slash" v-if="displayLimit < filteredPublications.length && displayLimit > 10"> /
                </p>
                <a-button type="text" size="small" v-if="displayLimit > 10" @click="showLess">Show Less</a-button>
            </div>

        </div>
    </div>
</template>

<script lang="ts">
import "bootstrap/dist/css/bootstrap.css";
import * as _ from "underscore";

import { CommentOutlined } from "@ant-design/icons-vue";

import Publication from "./Publication.vue";

import { defineComponent, watch, reactive, toRefs } from "vue";

import { colors } from "./pub";
import { publications, Pub, Tag } from "./pub";

const comparePubs = (a: Pub, b: Pub) => {
    // Compare by year
    return b.year - a.year;
}

publications.sort(comparePubs);

const publicationsByYear = _.chain(publications)
    .groupBy((x) => x.year)
    .pairs()
    .sortBy((x) => -x[0])
    .map((x) => ({
        year: x[0],
        publications: x[1],
    }))
    .value();

export default defineComponent({
    name: "App",
    components: { Publication, CommentOutlined },
    setup() {
        const minYear = Math.min(...publications.map(p => p.year));
        const maxYear = Math.max(...publications.map(p => p.year));

        const state = reactive({
            yearFilter: [minYear, maxYear],
            currentTag: "all",
            displayLimit: 10, // initially showing 10 publications
            filteredPublications: publications
        });

        const colorOptions = ["all", ...Object.keys(colors)];

        // Method to show more publications
        function showMore() {
            state.displayLimit += 10; // Increase the limit by 10
            if (state.displayLimit > state.filteredPublications.length) {
                state.displayLimit = state.filteredPublications.length; // Don't exceed total number
            }
        }

        // Method to show fewer publications
        function showLess() {
            state.displayLimit -= 10; // Decrease the limit by 10
            if (state.displayLimit < 10) {
                state.displayLimit = Math.min(10, state.filteredPublications.length); // Don't go below initial limit
            }
        }

        watch(() => [state.yearFilter, state.currentTag],
            () => {
                const yearPublications = publications.filter(p => p.year >= state.yearFilter[0] && p.year <= state.yearFilter[1]);
                state.filteredPublications = state.currentTag === 'all' ? yearPublications : yearPublications.filter(p => p.tags.includes(state.currentTag as Tag));
                state.displayLimit = Math.min(10, state.filteredPublications.length);
            })

        return {
            publications,
            ...toRefs(state),
            colorOptions,
            publicationsByYear,
            minYear,
            maxYear,
            showMore,
            showLess
        };
    },
    computed: {},
});
</script>

<style rel="stylesheet" lang="scss">
#section-research {
    img {
        // border: 1px solid $dark-accent;
        width: 100%;
        border: none;

        // border-image: linear-gradient(135deg, $dark-accent, $med-accent) 30;
        // border-width: 1px;
        // border-style: solid;
    }
}

div.publication_wrapper.visible {
    border-bottom: 1px solid #ddd;
}

div.publication_wrapper a {
    text-decoration: none !important;
}

.pub_profile_wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    /* height: 800px; */

    font-weight: 200;
}

img.publication_profile {
    margin: auto;
    display: block;
    width: 80%;
}

div.pub_info_wrapper {
    padding: 20px 20px;
}

.publication_title {
    // font-size: 18px;
    font-weight: 600;
    font-family: $title-font;
}

.publication_author {
    /* font-family: "Post Grotesk Book", sans-serif; */
    margin: 2px 0px 8px;
    font-weight: 200;
    font-size: smaller;
    font-family: $title-font;
}

.publication_venue {
    font-size: small;
    transform: scale(0.9);
    transform-origin: left;
}

.publication_miscellaneous {
    margin-top: 2px;
    margin-bottom: 5px;
}

.publicationsByYear_wrapper {
    margin: 30px 0px;
}

.publication_venue {
    font-style: italic;
}

.publist-buttons {
    text-align: center;

    button {
        display: inline-flex;
        align-items: center;
    }

    span {
        font-size: smaller;
        font-family: $title-font;
        font-weight: 500;
    }

    .slash {
        color: $light-accent;
        font-size: large;
        font-weight: initial;
        display: inline;
    }
}

// slider
.slider-container {
    color: $text-color;
    font-size: x-small;
    column-gap: 10px;
    margin-top: 10px;
    display: flex;
    font-weight: initial;
}

.ant-slider {
    width: 100%;
    margin: auto 4px;

    .ant-slider-handle {
        border-color: $light-accent;
    }

    .ant-slider-track {
        background-color: $light-accent;
    }
}

.ant-slider:hover {
    .ant-slider-track {
        background-color: $med-accent;
    }

    .ant-slider-handle {
        border-color: $med-accent !important;
    }
}

.ant-tooltip {
    font-size: xx-small;

    .ant-tooltip-inner {
        min-height: auto;
    }
}

.pub-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.tag-select {

    display: inline-flex;
    align-items: center;

    span {
        font-weight: initial;
        font-size: x-small;
    }

    .ant-radio-button-wrapper {
        display: inline-flex;
    }

    .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled) {
        color: $med-accent;
        border-color: $med-accent;
    }

    .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled)::before {
        background-color: $med-accent;
    }

    .ant-radio-button-wrapper:hover {
        color: $med-accent;
    }

    // first tag (after "all")
    .ant-radio-button-wrapper-checked:nth-child(2):not(.ant-radio-button-wrapper-disabled) {
        color: $tag-color-1;
        border-color: $tag-color-1;
    }

    .ant-radio-button-wrapper-checked:nth-child(2):not(.ant-radio-button-wrapper-disabled)::before {
        background-color: $tag-color-1;
    }

    .ant-radio-button-wrapper:nth-child(2):hover {
        color: $tag-color-1;
    }

    .ant-radio-button-wrapper-checked:nth-child(2):not(.ant-radio-button-wrapper-disabled):focus-within {
        box-shadow: 0 0 0 3px rgb($tag-color-1, 0.08);
    }

    // second tag (after "all")
    .ant-radio-button-wrapper-checked:nth-child(3):not(.ant-radio-button-wrapper-disabled) {
        color: $tag-color-2;
        border-color: $tag-color-2;
    }

    .ant-radio-button-wrapper-checked:nth-child(3):not(.ant-radio-button-wrapper-disabled)::before {
        background-color: $tag-color-2;
    }

    .ant-radio-button-wrapper:nth-child(3):hover {
        color: $tag-color-2;
    }

    .ant-radio-button-wrapper-checked:nth-child(3):not(.ant-radio-button-wrapper-disabled):focus-within {
        box-shadow: 0 0 0 3px rgb($tag-color-2, 0.08);
    }

    // third tag (after "all")
    .ant-radio-button-wrapper-checked:nth-child(4):not(.ant-radio-button-wrapper-disabled) {
        color: $tag-color-3;
        border-color: $tag-color-3;
    }

    .ant-radio-button-wrapper-checked:nth-child(4):not(.ant-radio-button-wrapper-disabled)::before {
        background-color: $tag-color-3;
    }

    .ant-radio-button-wrapper:nth-child(4):hover {
        color: $tag-color-3;
    }

    .ant-radio-button-wrapper-checked:nth-child(4):not(.ant-radio-button-wrapper-disabled):focus-within {
        box-shadow: 0 0 0 3px rgb($tag-color-3, 0.08);
    }

    // fourth tag (after "all")
    .ant-radio-button-wrapper-checked:nth-child(5):not(.ant-radio-button-wrapper-disabled) {
        color: $tag-color-4;
        border-color: $tag-color-4;
    }

    .ant-radio-button-wrapper-checked:nth-child(5):not(.ant-radio-button-wrapper-disabled)::before {
        background-color: $tag-color-4;
    }

    .ant-radio-button-wrapper:nth-child(5):hover {
        color: $tag-color-4;
    }

    .ant-radio-button-wrapper-checked:nth-child(5):not(.ant-radio-button-wrapper-disabled):focus-within {
        box-shadow: 0 0 0 3px rgb($tag-color-4, 0.08);
    }
}

@media (max-width: 850px) {

    .pub-header,
    .tag-select,
    .tag-group {
        display: block;
    }

    .tag-group {
        margin-top: 2px;
    }
}

@media only screen and (max-width: 992px) {
    .pub_profile_wrapper {
        justify-content: left;
    }

    div.pub_info_wrapper {
        padding: 10px 10px;
    }

    div.publication_wrapper {
        width: 100%;
        margin: 10px auto;
    }

    img {
        margin: 10px 30px;
        width: 100%;
    }

    .publication_title {
        font-size: 0.9em !important;
    }

    .publication_author,
    .publication_venue {
        font-size: 0.85em;
    }

    .publicationsByYear_head {
        font-size: 32px;
    }
}
</style>
