<template>
    <a :href="'#' + paperid">
      {{ paperid }}
    </a>
</template>

<script lang="ts">
import "bootstrap/dist/css/bootstrap.css";
import * as _ from "underscore";
import { defineComponent } from "vue";

export default defineComponent({
    name: "PaperLink",
    props: ['paperid'],
    setup() {
        return {
        };
    },
    computed: {},
});
</script>

<style rel="stylesheet" lang="scss" scoped>
$color1: #96351e;

a {
    text-decoration:none;
     border-bottom: 2px solid $color1;
     color: black;
    // color: 
}
</style>
