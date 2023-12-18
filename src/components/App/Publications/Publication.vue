<template>
    <div class='publication_wrapper'>
        <div class="row">
            <div class='col-md-2 col-4 pub_profile_wrapper'>
                <img :src="publication.image" class="publication_profile" />
            </div>

            <div class='col-md-10 col-8 pub_info_wrapper'>
                <div class="publication_title">{{ publication.title }} </div>

                <div class="publication_author">
                    {{ publication.author }}
                </div>

                <div class="publication_venue">
                    {{ publication.venue }}, {{ publication.year }}
                </div>

                <div class="publication_miscellaneous">
                    <span v-if="publication.preprint">
                        <a :href="publication.preprint" target="_blank" rel="noopener noreferrer"><object
                                data="https://sites.harvard.edu/insight-lab/files/2022/10/icon_pdf.svg" type="image/svg+xml"
                                class='publication_miscellaneous_icon'></object></a>
                    </span>
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

import { ref, onMounted, computed, reactive, toRefs, h, watch } from "vue";

export default defineComponent({
    name: "App",
    props: ["publication"],
    components: {},
    setup(props) {
        const store = useStore();

        const state = reactive({
            svgStr: computed(() => store.state.svgStr),
        });
        const pub = ref(null);

        onMounted(() => {
        });

        return {
            ...toRefs(state),
            pub,
        };
    },
    computed: {},
});
</script>

<style rel="stylesheet" lang="scss">
.publicationDiv {
    padding: 30px 0;

    border-bottom: 1px solid black;

    a {
        color: $text-color;
        text-decoration: none;
    }
}

.publicationDiv i.fas {
    vertical-align: middle;
    width: 17px !important;
}

.pub_book {
    vertical-align: middle;
    color: $text-color;
    font-weight: 300;
}

.pub-img {
    max-width: 100%;
}

.pub_title {
    font-size: 16px;
    font-weight: bold;
}

.pub-award {
    font-size: 14px;
    color: #96351e;
}

.pub_author {
    font-size: 15px;
}

.badge-j {
    color: #cf1322;
    background: #fff1f0;
    border: 1px solid #ffa39e;
    padding: 0.25em 0.35em !important;
    // background-color: #f58e85 !important;
}

.badge-c {
    color: #d46b08;
    background: #fff7e6;
    border: 1px solid #ffd591;
    padding: 0.25em 0.35em !important;

    // background-color: #f9ad45 !important;
}

.badge-o {
    color: #096dd9;
    background: #e6f7ff;
    border: 1px solid #91d5ff;
    padding: 0.25em 0.35em !important;

    // background-color: #90c7f5 !important;
}

.badge {
    font-weight: 400;
}

.badge-venue {
    margin-left: 2px;
    margin-right: 2px;
    display: inline-block;
    min-width: 10px;
    padding: 3px 7px;
    font-size: 12px;
    font-weight: 400;
    line-height: 1;
    color: #000000d9;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    background: #fafafa;
    border: 1px solid #d9d9d9;
    padding: 0.25em 0.35em !important;

    border-radius: 0.25rem;
}

.pub-icon {
    color: #333 !important;
    margin-right: 16px;
    font-size: 12px;
}

.pub_author_me {
    /* text-decoration: underline; */
    font-weight: 600;
    border-bottom: 2px solid #96351e;
}

.ant-tooltip-inner {
    color: #263459;
    background-color: #E4EAF2;
    width: 400px;
}
</style>
