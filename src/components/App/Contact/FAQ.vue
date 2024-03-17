<template>
    <div class="faq_container">
        <div class="q" :class='{ "open": open }' @click="toggleOpen()" :title='open ? "Close FAQ" : "Open FAQ"'>
            <div><b>Q:</b> {{ faq.Q }}</div>
            <PlusOutlined v-if="!open" />
            <MinusOutlined v-else />
        </div>
        <div class="a" v-if="open"><b>A:</b> {{ faq.A }}</div>
    </div>
</template>
<script lang="ts">
import "bootstrap/dist/css/bootstrap.css";

import { defineComponent } from "vue";
import { reactive, toRefs } from "vue";

import { PlusOutlined, MinusOutlined } from "@ant-design/icons-vue";


export default defineComponent({
    name: "FAQ",
    props: ["faq"],
    components: { PlusOutlined, MinusOutlined },
    setup() {
        const state = reactive({
            open: false,
        });

        const toggleOpen = () => {
            state.open = !state.open;
        }

        return {
            ...toRefs(state),
            toggleOpen
        };
    },
    computed: {},
});
</script>

<style rel="stylesheet" lang="scss">
.faq_container {
    margin: 5px 0px 10px;
    // border-bottom: 0.5px solid #cccccc; /* Light grey color */

    .q,
    .a {
        padding: 8px 12px;
        border-radius: 2px;

        b {
            font-weight: 500;
        }
    }

    .q {
        background: rgb($text-color, 0.03);
        // color: $dark-accent;
        font-weight: 500;
        cursor: pointer;
        transition: 0.5s;

        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 10px;

        b,
        svg {
            color: $dark-accent;
        }

        &.open {
            background: rgb($light-accent, 0.3);
        }

        &:hover {
            background: rgb($light-accent, 0.2);
        }
    }

    .a {
        b {
            color: $med-accent;
        }
    }
}
</style>
