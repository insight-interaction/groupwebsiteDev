<template>
    <div class="section" id="section-about">
        <div class="container" id="home">
            <img class="section-about-logo" :src="require(`@/assets/grouplogo.png`)" />
            <div class="section-about-head">Insight and Interaction</div>
            <div class="section-about-introtext">
                The Insight + Interaction lab seeks to understand the inner workings of AI systems, and use these insights to enable better human/AI interaction. Key approaches in our research include data visualization, mechanistic interpretability, and even artistic exploration.
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import "bootstrap/dist/css/bootstrap.css";

import { defineComponent } from "vue";
import { useStore } from "vuex";

import { onMounted, computed, reactive, toRefs, h, watch } from "vue";

export default defineComponent({
    name: "App",
    components: {},
    setup() {
        const store = useStore();

        const state = reactive({});

        return {
            ...toRefs(state),
        };
    },
    computed: {},
});
</script>

<style rel="stylesheet" lang="scss">
div#section-about {
    background: white;
    color:  #194787;

    background: #194787;
    color: #f5f5f7;
    
    padding-bottom: 60px;
    padding-top: 60px;

    img.section-about-logo {
        margin: 0px auto;
        display: block;
        
        width: 300px;
        height: 300px;
    }
}

div.section-about-head {
    text-align: center;
    font-size: 40px;
}

div.section-about-introtext {
    text-align: center;
    font-size: 20px;
}
</style>
