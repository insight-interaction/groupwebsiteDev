<template>
    <div class="section" id="section-contact">
        <div class="anchor" id="contact"></div>
        <div class="container">
            <div class="section-head"><span>Contact</span></div>

            <div>
                <div class="contact_subhead">Contacting Fernanda and Martin</div>

                We receive a great deal of mail and we can’t respond to every message. If you feel
                your message is important and may have gotten lost in our inboxes; please do send a
                follow-up email. Here’s how to contact us, as well as some answers to common
                questions.

                <ul>
                    <li>An informative subject line is extremely helpful.</li>
                    <li>
                        For questions about our published work: please email us or the lead
                        author(s) of the papers. We place high priority on answering such questions,
                        especially if you’re building on our work or need more information about our
                        results and methods.
                    </li>
                    <li>
                        Harvard students: In general, feel free to email us. (If you’re looking for
                        research opportunities, see the FAQ below first.) If you’re in a class we’re
                        teaching, office hours are also listed in Canvas.
                    </li>
                    <li>
                        Other Harvard community members: please reach out by mail! 
                    </li>
                    <li>
                        Press, speaking invites: email us.
                    </li>
                </ul>
            </div>

            <div>
                <div class="contact_subhead">Frequently Asked Questions</div>
                <div v-for="faq in faqs" :id="faq.Q" class="faq_container">
                    <div><span class="contact_subhead">Q:</span> {{ faq.Q }}</div>
                    <div><span class="contact_subhead">A:</span> {{ faq.A }}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import "bootstrap/dist/css/bootstrap.css";

import { defineComponent } from "vue";
import { reactive, toRefs } from "vue";

const faqs = [
    {
        Q: "I’m a Harvard student interested in research opportunities in your lab. Are there any available?",
        A: "Maybe: we do sometimes have slots available. Typically these positions require skills in machine learning or data visualization. Please reach out to us by mail.",
    },
    {
        Q: "I’ve been reading your papers, and I have an idea for an interesting follow-up. Can I mail you about it?",
        A: "Sure! We’re definitely open to this kind of conversation, but the briefer and more concrete you can make your description, the more likely we’ll have time to read it.",
    },
    {
        Q: "I’m a student, but not at Harvard. Can I work in your lab?",
        A: "Depending on where you are in your career, you could apply for the Ph.D. program or a post-doc. Other than that, we probably can’t find a position: we generally don’t supervise non-Harvard students. In particular, we don’t supervise high school students.",
    },

    { Q: "Can I pay you to supervise a student?", A: "No" },
];

export default defineComponent({
    name: "Hello",
    components: {},
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
.contact_subhead {
    color: unset !important;
    // font-size: 18px;
    font-weight: 600;
    font-family: $title-font;
    width: max-content;
    max-width: 100%;
}

ul li {
    margin: 5px 0px;
}

div.faq_container {
    margin: 5px 0px;
    // border-bottom: 0.5px solid #cccccc; /* Light grey color */
}
</style>
