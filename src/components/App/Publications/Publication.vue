<template>
    <div class='publication_wrapper'>
        <div class="row">
            <div class='col-md-2 col-4 pub_profile_wrapper'>
                <img :src="publication.image" class="publication_profile" :title="publication.title" />
            </div>

            <div class='col-md-10 col-8 pub_info_wrapper'>

                <div class="tags" v-for="tag in publication.tags" :key="tag">
                    <a-badge :color="colors[tag]" :text="tag" class="tag" />
                </div>
                <div class="publication_title">{{ publication.title }} </div>

                <div class="publication_author">
                    {{ publication.author }}
                </div>

                <div class="publication_venue">
                    {{ publication.venue }}, {{ publication.year }}
                </div>

                <div class="publication_miscellaneous">
                    <a v-if="publication.preprint" :href="publication.preprint" target="_blank" rel="noopener noreferrer"
                        title="Paper" class="paper-button">
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

import { defineComponent } from "vue";
import { useStore } from "vuex";
import { colors } from "./colors";

import { ref, computed, reactive, toRefs } from "vue";
import { FileTextOutlined, LinkOutlined, DesktopOutlined, CodeOutlined, YoutubeOutlined, CameraOutlined } from '@ant-design/icons-vue';

export default defineComponent({
    name: "App",
    props: ["publication"],
    components: { FileTextOutlined, LinkOutlined, DesktopOutlined, CodeOutlined, YoutubeOutlined, CameraOutlined },
    setup(props) {
        const store = useStore();

        const state = reactive({
            svgStr: computed(() => store.state.svgStr),
        });
        const pub = ref(null);

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

.tags {
    display: inline-block;
    margin-bottom: 2px;

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
