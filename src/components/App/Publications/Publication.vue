<template>
    <div class='publication_wrapper'>
        <div class="row">
            <div class='pub_profile_wrapper'
                :class="{ 'col-md-2': imageSize === 'small', 'col-md-3': imageSize === 'medium', 'col-md-4': imageSize === 'big' }">
                <a v-if="clickLink !== ''" :href="clickLink" target="_blank" :title="publication.title">
                    <img :src="publication.image" class="publication_profile" />
                </a>
                <img v-else :src="publication.image" class="publication_profile" :title="publication.title" />
            </div>

            <div class='pub_info_wrapper'
                :class="{ 'col-md-10': imageSize === 'small', 'col-md-9': imageSize === 'medium', 'col-md-8': imageSize === 'big' }">

                <div class="tag-box">
                    <div class="publication_venue">
                        {{ publication.venue }} {{ publication.year }}
                    </div>
                    <div class="tag-container">
                        <div class="tags" v-for="tag in publication.tags" :key="tag">
                            <a-badge :color="colors[tag]" :text="tag" class="tag" />
                        </div>
                    </div>
                </div>
                <div>
                    <a v-if="clickLink !== ''" :href="clickLink" target="_blank" :title="publication.title"
                        class="publication_title">
                        {{ publication.title }}
                    </a>
                    <div v-else class="publication_title">{{ publication.title }} </div>

                    <div class="publication_author">
                        {{ publication.author }}
                    </div>

                    <div v-if="publication.summary" class="publication_summary">
                        {{ publication.summary }}
                    </div>


                </div>
                <div class="publication_miscellaneous">
                    <a v-if="publication.preprint" :href="publication.preprint" target="_blank"
                        rel="noopener noreferrer" title="Paper" class="paper-button">
                        <FileTextOutlined />
                        <span>Paper</span>
                    </a>
                    <a v-if="publication.project" :href="publication.project" target="_blank" rel="noopener noreferrer"
                        title="Project Page" class="paper-button">
                        <LinkOutlined /><span>Project Page</span>
                    </a>
                    <a v-if="publication.demo" :href="publication.demo" target="_blank" rel="noopener noreferrer"
                        title="Demo" class="paper-button">
                        <DesktopOutlined /><span>Demo</span>
                    </a>
                    <a v-if="publication.code" :href="publication.code" target="_blank" rel="noopener noreferrer"
                        title="Code" class="paper-button">
                        <CodeOutlined /><span>Code</span>
                    </a>
                    <a v-if="publication.poster" :href="publication.poster" target="_blank" rel="noopener noreferrer"
                        title="Poster" class="paper-button">
                        <CameraOutlined /><span>Poster</span>
                    </a>
                    <a v-if="publication.video" :href="publication.video" target="_blank" rel="noopener noreferrer"
                        title="Video" class="paper-button">
                        <YoutubeOutlined /><span>Video</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

import { defineComponent, onMounted, onUnmounted } from "vue";
import { colors } from "./pub";

import { ref, reactive, toRefs } from "vue";
import { FileTextOutlined, LinkOutlined, DesktopOutlined, CodeOutlined, YoutubeOutlined, CameraOutlined } from '@ant-design/icons-vue';

export default defineComponent({
    name: "Publication",
    props: ["publication"],
    components: { FileTextOutlined, LinkOutlined, DesktopOutlined, CodeOutlined, YoutubeOutlined, CameraOutlined },
    setup(props) {
        const state = reactive({
            imageSize: "small",
            clickLink: props.publication.project ? props.publication.project : props.publication.preprint ? props.publication.preprint : "",
        });
        const pub = ref(null);

        const adjustColumns = () => {
            if (window.innerWidth > 1100) {
                state.imageSize = "small";
            } else if (window.innerWidth < 850) {
                state.imageSize = "big";
            } else {
                state.imageSize = "medium";
            }
        }

        onMounted(() => {
            adjustColumns();
            window.addEventListener("resize", adjustColumns);
        });

        onUnmounted(() => {
            adjustColumns();
            window.removeEventListener("resize", adjustColumns);
        });

        return {
            ...toRefs(state),
            pub,
            colors
        };
    },
    computed: {},
});
</script>

<style rel="stylesheet" lang="scss">
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
    overflow: hidden;
}

img.publication_profile {
    margin: auto;
    transition: 0.5s;
}

img.publication_profile:hover {
    transform: scale(1.25);
}

div.pub_info_wrapper {
    padding: 20px 20px;
    // margin: auto 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.publication_title {
    color: unset !important;
    display: block;
    // font-size: 18px;
    font-weight: 600;
    font-family: $title-font;
    width: max-content;
    max-width: 100%;
}

.publication_author {
    /* font-family: "Post Grotesk Book", sans-serif; */
    // margin: 0px 0px 4px;
    font-weight: 200;
    font-size: smaller;
    font-family: $title-font;
}

.publication_summary {
    margin-top: 4px;
    font-size: small;
    // transform: scale(0.9);
    transform-origin: left;
    // opacity: 0.6;
}

.publication_venue {
    font-size: x-small !important;
    width: max-content;
    padding: 0 4px;
    border-radius: 2px;
    // transform: scale(0.9);
    // font-weight: 400;
    transform-origin: left;
    // font-style: italic;
    background: rgb($text-color, 0.03);
    // font-family: $title-font;
}

.publication_miscellaneous {
    margin-top: 2px;
    margin-bottom: 4px;
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

@media (max-width: 600px) {

    .pub_profile_wrapper,
    .pub_info_wrapper {
        width: 100%;
    }

    .pub_profile_wrapper {
        padding-bottom: 0 !important;
    }
}

.paper-button {
    // background-color: $dark-accent;
    color: $med-accent !important;
    padding: 2px 6px 4px;
    border: 0.2px solid #eee;
    text-transform: lowercase;
    font-size: 12px;
    border-radius: 2px;
    display: inline-block;
    transform: scale(0.9);
    transform-origin: left;
    transition: 0.5s;
    font-weight: 200;
    box-shadow: 0 1px 1px #0000000b;
    display: inline-flex;
    align-items: baseline;

    svg {
        margin-right: 4px;
        margin-top: -2px;
    }
}

.paper-button:hover {
    background-color: rgb($lightest-accent, 0.2);
    border-color: $lightest-accent;
}

.tag-box {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    margin-bottom: 2px;

    .publication_venue {
        margin-right: 10px;
    }
}

.tag-container {
    text-align: right;
}

.tags {
    display: inline-block;
    width: max-content;
    max-width: 100%;

    span {
        font-size: x-small;
    }

    .ant-badge-status-text {
        margin-left: 6px;
    }
}

.tags:not(:last-child) .tag {
    margin-right: 10px;
}
</style>
