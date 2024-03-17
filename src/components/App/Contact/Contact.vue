<template>
    <div class="section" id="section-contact">
        <div class="anchor" id="contact"></div>
        <div class="container">
            <div class="section-head"><span>Contacting Fernanda + Martin</span></div>

            <div class="contact-text">
                <!-- <div class="contact_subhead">Contacting Fernanda and Martin</div> -->

                <p class="contact-desc">
                    We receive a great deal of mail and we can't respond to every message. If you feel
                    your message is important and may have gotten lost in our inboxes; please do send a
                    follow-up email. Here's how to contact us, as well as some answers to common
                    questions.
                </p>

                <div class="contact_subhead">How to Contact Us</div>

                <ul>
                    <li>An informative subject line is extremely helpful.</li>
                    <li>
                        <b>For questions about our published work:</b> please email us or the lead
                        author(s) of the papers. We place high priority on answering such questions,
                        especially if you're building on our work or need more information about our
                        results and methods.
                    </li>
                    <li>
                        <b>Harvard students:</b> In general, feel free to email us. (If you're looking for
                        research opportunities, see the FAQ below first.) If you're in a class we're
                        teaching, office hours are also listed in Canvas.
                    </li>
                    <li>
                        <b>Other Harvard community members:</b> please reach out by mail!
                    </li>
                    <li>
                        <b>Press, speaking invites:</b> email us.
                    </li>
                </ul>
            </div>

            <div class="contact-text">
                <div class="contact_subhead">Frequently Asked Questions</div>
                <FAQ v-for="faq in faqs" :id="faq.Q" :faq=faq />
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import "bootstrap/dist/css/bootstrap.css";

import { defineComponent } from "vue";
import { reactive, toRefs } from "vue";

import FAQ from "./FAQ.vue";

import { PlusOutlined, MinusOutlined } from "@ant-design/icons-vue";

const faqs = [
    {
        Q: "I'm a Harvard student interested in research opportunities in your lab. Are there any available?",
        A: "Maybe: we do sometimes have slots available. Typically these positions require skills in machine learning or data visualization. Please reach out to us by mail.",
    },
    {
        Q: "I've been reading your papers, and I have an idea for an interesting follow-up. Can I mail you about it?",
        A: "Sure! We're definitely open to this kind of conversation, but the briefer and more concrete you can make your description, the more likely we'll have time to read it.",
    },
    {
        Q: "I'm a student, but not at Harvard. Can I work in your lab?",
        A: "Depending on where you are in your career, you could apply for the Ph.D. program or a post-doc. Other than that, we probably can't find a position: we generally don't supervise non-Harvard students. In particular, we don't supervise high school students.",
    },

    { Q: "Can I pay you to supervise a student?", A: "No." },
];

export default defineComponent({
    name: "Contact",
    components: { FAQ, PlusOutlined, MinusOutlined },
    setup() {
        const state = reactive({});

        return {
            ...toRefs(state),
            faqs,
        };
    },
    computed: {},
});
</script>

<style rel="stylesheet" lang="scss">
.contact-text {
    font-size: 0.9em;

    .contact-desc {
        margin-bottom: 0;
    }

    .contact_subhead {
        color: $med-accent;
        font-size: 1.2em;
        font-weight: 600;
        font-family: $title-font;
        width: max-content;
        max-width: 100%;
        margin-top: 12px;
    }

    ul li {
        margin: 4px 0px;
    }
}
</style>
