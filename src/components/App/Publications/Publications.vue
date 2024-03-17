<template>
    <div class="section" id="section-research">
        <div class="anchor" id="publications"></div>
        <div class="container">
            <div class="section-head">
                <div class="pub-header">
                    <span>Publications</span>
                    <div class="tag-select">
                        <a-radio-group class="tag-group" v-model:value="currentTag" size="small"
                            button-style="outlined">
                            <a-radio-button v-for="tag in colorOptions" :value="tag" :title="tag">{{ tag
                                }}</a-radio-button>
                        </a-radio-group>
                    </div>
                </div>
                <div class="slider-container">
                    {{ minYear }}
                    <a-slider range v-model:value="yearFilter" :min="minYear" :max="maxYear"
                        tooltipPlacement="bottom" />{{
                            maxYear }}
                </div>
            </div>
            <div v-for="( publication, index ) in  filteredPublications " :key="publication.title">
                <Publication v-if="index < displayLimit" :publication="publication"
                    :class="{ visible: index < displayLimit - 1 }" />
            </div>
            <!-- Show More/Less Buttons -->
            <div class="publist-buttons">
                <a-button type="text" size="small" v-if="displayLimit < filteredPublications.length" @click="showMore"
                    title="Show More">Show
                    More</a-button>
                <p class="slash" v-if="displayLimit < filteredPublications.length && displayLimit > 10"> /
                </p>
                <a-button type="text" size="small" v-if="displayLimit > 10" @click="showLess" title="Show Less">Show
                    Less</a-button>
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
    name: "Publications",
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
        margin-top: 10px;
    }
}
</style>
