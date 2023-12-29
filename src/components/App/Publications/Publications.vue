<template>
    <div class="section" id="section-research">
        <div class="container">
            <div class="section-head" id="publications"><span>Publications</span>
                <div class="slider-container">
                    {{ minYear }}
                    <a-slider range v-model:value="yearFilter" :min="minYear" :max="maxYear" tooltipPlacement="bottom" />{{
                        maxYear }}
                </div>
            </div>
            <div v-for="(publication, index) in filteredPublications" :key="publication.title">
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

// define publication type
type Pub = {
    title: string;
    author: string;
    venue: string;
    image: string;
    preprint?: string;
    demo?: string;
    code?: string;
    project?: string;
    video?: string;
    poster?: string;
    year: number;
}

const publications: Pub[] = [
    {
        title: "Inference-Time Intervention: Eliciting Truthful Answers from a Language Model",
        author: "Kenneth Li*, Oam Patel*, Fernanda Viégas, Hanspeter Pfister, and Martin Wattenberg",
        venue: "Conference on Neural Information Processing Systems (NeurIPS)",
        image: "https://sites.harvard.edu/insight-lab/files/2023/12/truth.png",
        preprint: "https://arxiv.org/pdf/2306.03341.pdf",
        code: "https://github.com/likenneth/honest_llama",
        year: 2023
    },
    {
        title: "Beyond Surface Statistics: Scene Representations in a Latent Diffusion Model",
        author: "Yida Chen, Fernanda Viégas, and Martin Wattenberg",
        venue: "NeurIPS Workshop on Diffusion Models",
        image: "https://sites.harvard.edu/insight-lab/files/2023/12/depth.png",
        preprint: "https://arxiv.org/pdf/2306.05720.pdf",
        code: "https://github.com/yc015/scene-representation-diffusion-model",
        project: "https://yc015.github.io/scene-representation-diffusion-model/",
        poster: "https://nips.cc/media/PosterPDFs/NeurIPS%202023/74894.png?t=1701540884.728899",
        year: 2023
    },
    {
        title: "AttentionViz: A Global View of Transformer Attention",
        author: "Catherine Yeh, Yida Chen, Aoyu Wu, Cynthia Chen, Fernanda Viégas, and Martin Wattenberg",
        venue: "IEEE Transactions on Visualization and Computer Graphics",
        image: "https://sites.harvard.edu/insight-lab/files/2023/05/2023_pub_attenviz.png",
        preprint: "https://arxiv.org/pdf/2305.03210.pdf",
        demo: "http://attentionviz.com/",
        code: "https://github.com/catherinesyeh/attention-viz",
        project: "https://catherinesyeh.github.io/attn-docs/",
        video: "https://www.youtube.com/watch?v=YBxRfWTFb3U",
        year: 2023,
    },
    {
        title: "Explain-and-Test: An Interactive Machine Learning Framework for Exploring Text Embeddings",
        author: "Shivam Raval, Carolyn Wang, Fernanda Viégas, and Martin Wattenberg",
        venue: "IEEE Visualization and Visual Analytics",
        image: "https://sites.harvard.edu/insight-lab/files/2023/12/Workflow.png",
        preprint: "https://ieeexplore.ieee.org/abstract/document/10360935",
        video: "https://www.youtube.com/watch?v=p6-xK7qQiYQ",
        year: 2023
    },
    {
        title: "Emergent World Representations: Exploring a Sequence Model Trained on a Synthetic Task",
        author: "Kenneth Li, Aspen K. Hopkins, David Bau, Fernanda Viégas, Hanspeter Pfister, and Martin Wattenberg",
        venue: "International Conference on Learning Representations (ICLR)",
        image: "https://sites.harvard.edu/insight-lab/files/2023/12/othello.png",
        preprint: "https://arxiv.org/pdf/2210.13382.pdf",
        code: "https://github.com/likenneth/othello_world",
        demo: "https://likenneth.github.io/othello/togglable.html",
        year: 2023
    },
    {
        title: "Grand Challenges in Visual Analytics Applications",
        author: "Aoyu Wu, Dazhen Deng, Min Chen, Shixia Liu, Daniel Keim, Ross Maciejewski, Silvia Miksch, Hendrik Strobelt, Fernanda Viégas, and Martin Wattenberg",
        venue: "IEEE Computer Graphics and Applications",
        image: "https://wowjyu.github.io/img/cga23viewpoint.d51f6d02.png",
        preprint: "https://ieeexplore.ieee.org/abstract/document/10251911",
        year: 2023
    },
    {
        title: "Identifying Structure in the MIMIC ICU Dataset",
        author: "Zad Chin, Shivam Raval, Finale Doshi-Velez, Martin Wattenberg, and Leo Anthony Celi",
        venue: "NeurIPS Workshop on Learning from Time Series for Health",
        image: "https://sites.harvard.edu/insight-lab/files/2023/12/mimic.png",
        preprint: "https://finale.seas.harvard.edu/sites/scholar.harvard.edu/files/finale/files/chin_et_al._-_2022_-_identifying_structure_in_the_mimic_icu_dataset.pdf",
        year: 2022
    },
    {
        title: "Toy Models of Superposition",
        author: "Nelson Elhage, Tristan Hume, Catherine Olsson, Nicholas Schiefer, Tom Henighan, Shauna Kravec, Zac Hatfield-Dodds, Robert Lasenby, Dawn Drain, Carol Chen, Roger Grosse, Sam McCandlish, Jared Kaplan, Dario Amodei, Martin Wattenberg, and Christopher Olah",
        venue: "Transformer Circuits Thread",
        image: "https://sites.harvard.edu/insight-lab/files/2022/10/pub_2022_composition.png",
        preprint: "https://transformer-circuits.pub/2022/toy_model/index.html",
        year: 2022,
    },
    {
        title: "Interpreting a Machine Learning Model for Detecting Gravitational Waves",
        author: "Mohammadtaher Safarzadeh, Asad Khan, E. A. Huerta, and Martin Wattenberg",
        venue: "arXiv",
        image: "https://sites.harvard.edu/insight-lab/files/2022/10/pub_2022_interpreting.png",
        preprint: "https://arxiv.org/pdf/2202.07399.pdf",
        year: 2022,
    },
    {
        title: "Exploring the Gap between Informal Mental and Formal Statistical Models",
        author: "Hanspeter Pfister, Martin Wattenberg, Johanna Beyer, and Carolina Nobre",
        venue: "Harvard Data Science Review",
        image: "https://sites.harvard.edu/insight-lab/files/2022/10/pub_2021_Exploring.png",
        preprint: "https://hdsr.mitpress.mit.edu/pub/jefx48tr/release/2?readingCollection=c6a3a10e",
        year: 2021,
    },
    {
        title: "Neural Networks Trained on Natural Scenes Exhibit Gestalt Closure",
        author: "Been Kim, Emily Reif, Martin Wattenberg, Samy Bengio, and Michael C. Mozer",
        venue: "Computational Brain & Behavior",
        image: "https://sites.harvard.edu/insight-lab/files/2022/10/pub_2021_kim_neural.png",
        preprint: "https://arxiv.org/pdf/1903.01069",
        year: 2021,
    },
    {
        title: "An Interpretability Illusion for BERT",
        author: "Tolga Bolukbasi, Adam Pearce, Ann Yuan, Andy Coenen, Emily Reif, Fernanda Viegas, and Martin Wattenberg",
        venue: "arXiv",
        image: "https://sites.harvard.edu/insight-lab/files/2022/10/pub_2021_Bolukbasi.png",
        preprint: "https://arxiv.org/pdf/2104.07143",
        year: 2021,
    },
    {
        title: "The What-If Tool: Interactive Probing of Machine Learning Models",
        author: "James Wexler, Mahima Pushkarna, Tolga Bolukbasi, Martin Wattenberg, Fernanda Viégas, and Jimbo Wilson",
        venue: "IEEE Transactions on Visualization and Computer Graphics",
        image: "https://sites.harvard.edu/insight-lab/files/2022/10/pub_2020_Wexler.png",
        preprint: "https://arxiv.org/pdf/1907.04135.pdf",
        year: 2020,
    },
    {
        title: "Human-Centered Tools for Coping with Imperfect Algorithms During Medical Decision-Making",
        author: "Michael Terry, Martin C. Stumpe, Greg S. Corrado, Fernanda Viegas, Martin Wattenberg, Daniel Smilkov, Been Kim, Jason Hipp, Narayan Hegde, Emily Reif, and Carrie J. Cai",
        venue: "Proceedings of the CHI Conference on Human Factors in Computing Systems",
        image: "https://sites.harvard.edu/insight-lab/files/2022/10/pub_2019_Terry.png",
        preprint: "https://arxiv.org/pdf/1902.02960.pdf",
        year: 2019,
    },
    {
        title: "Tensorflow.js: Machine Learning for the Web and Beyond",
        author: "Daniel Smilkov Nikhil Thorat Yannick Assogba Ann Yuan Nick Kreeger Ping Yu Kangyi Zhang Shanqing Cai Eric Nielsen David Soergel Stan Bileschi Michael Terry Charles Nicholson Sandeep N. Gupta Sarah Sirajuddin D. Sculley Rajat Monga Greg Corrado Fernanda B. Viegas Martin Wattenberg",
        venue: "Proceedings of Machine Learning and Systems",
        image: "https://sites.harvard.edu/insight-lab/files/2022/10/pub_2019_tensorflowjs.png",
        preprint: "https://arxiv.org/pdf/1901.05350",
        year: 2019,
    },
    {
        title: "Do Neural Networks Show Gestalt Phenomena? An Exploration of the Law of Closure",
        author: "Been Kim, Emily Reif, Martin Wattenberg, and Samy Bengio",
        venue: "Arxiv",
        image: "https://sites.harvard.edu/insight-lab/files/2022/10/pub_2019_Kim.png",
        preprint: "https://arxiv.org/pdf/1903.01069",
        year: 2019,
    },
    {
        title: "GAN Lab: Understanding Complex Deep Generative Models Using Interactive Visual Experimentation",
        author: "Minsuk Kahng, Nikhil Thorat, Duen Horng Chau, Fernanda B Viégas, and Martin Wattenberg",
        venue: "IEEE Transactions on Visualization and Computer Graphics",
        image: "https://sites.harvard.edu/insight-lab/files/2022/10/pub_2019_ganlab.png",
        preprint: "https://arxiv.org/pdf/1809.01587.pdf",
        year: 2019,
    },
    {
        title: "XRAI: Better Attributions Through Regions",
        author: "Andrei Kapishnikov, Tolga Bolukbasi, Fernanda Viégas, and Michael Terry",
        venue: "Proceedings of the IEEE/CVF International Conference on Computer Vision (ICCV)",
        image: "https://sites.harvard.edu/insight-lab/files/2022/10/pub_2019_iccv.png",
        preprint:
            "https://openaccess.thecvf.com/content_ICCV_2019/papers/Kapishnikov_XRAI_Better_Attributions_Through_Regions_ICCV_2019_paper.pdf",
        year: 2019,
    },
    {
        title: "Visualizing and Measuring the Geometry of BERT",
        author: "Emily Reif, Ann Yuan, Martin Wattenberg, Fernanda B Viegas, Andy Coenen, Adam Pearce, and Been Kim",
        venue: "Advances in Neural Information Processing Systems (NeurIPS)",
        image: "https://sites.harvard.edu/insight-lab/files/2022/10/pub_2019_bertgeo.png",
        preprint:
            "http://papers.neurips.cc/paper/9065-visualizing-and-measuring-the-geometry-of-bert.pdf",
        year: 2019,
    },
    {
        title: "Interpretability Beyond Feature Attribution: Quantitative Testing with Concept Activation Vectors (TCAV)",
        author: "Been Kim, Martin Wattenberg, Justin Gilmer, Carrie Cai, James Wexler, and Fernanda Viegas",
        venue: "International Conference on Machine Learning (ICML)",
        image: "https://sites.harvard.edu/insight-lab/files/2022/10/pub_2018_tcav.png",
        preprint: "https://proceedings.mlr.press/v80/kim18d/kim18d.pdf",
        year: 2018,
    },
    {
        title: "Adversarial Spheres",
        author: "Justin Gilmer, Luke Metz, Fartash Faghri, Sam Schoenholz, Maithra Raghu, Martin Wattenberg, and Ian Goodfellow",
        venue: "International Conference on Learning Representations (ICLR)",
        image: "https://sites.harvard.edu/insight-lab/files/2022/10/pub_2018_Gilmer.png",
        preprint: "https://arxiv.org/pdf/1801.02774.pdf",
        year: 2018,
    },
    {
        title: "Deep Learning of Aftershock Patterns Following Large Earthquakes",
        author: "Phoebe MR DeVries, Fernanda Viégas, Martin Wattenberg, and Brendan J Meade",
        venue: "Nature",
        image: "https://sites.harvard.edu/insight-lab/files/2022/10/pub_2018_nature.png",
        year: 2018,
    },
    {
        title: "Google's Multilingual Neural Machine Translation System: Enabling Zero-Shot Translation",
        author: "Melvin Johnson, Mike Schuster, Quoc V. Le, Maxim Krikun, Yonghui Wu, Zhifeng Chen, Nikhil Thorat, Fernanda Viégas, Martin Wattenberg, Greg Corrado, Macduff Hughes, and Jeffrey Dean",
        venue: "Transactions of the Association for Computational Linguistics (ACL)",
        image: "https://sites.harvard.edu/insight-lab/files/2022/10/pub_2017_Johnson.png",
        preprint: "https://arxiv.org/pdf/1611.04558.pdf",
        year: 2017,
    },
    {
        title: "Tensorflow: Large-Scale Machine Learning on Heterogeneous Distributed Systems",
        author: "Martín Abadi, Ashish Agarwal, Paul Barham, Eugene Brevdo, Zhifeng Chen, Craig Citro, Greg S. Corrado, Andy Davis, Jeffrey Dean, Matthieu Devin, Sanjay Ghemawat, Ian Goodfellow, Andrew Harp, Geoffrey Irving, Michael Isard, Yangqing Jia, Rafal Jozefowicz, Lukasz Kaiser, Manjunath Kudlur, Josh Levenberg, Dan Mane, Rajat Monga, Sherry Moore, Derek Murray, Chris Olah, Mike Schuster, Jonathon Shlens, Benoit Steiner, Ilya Sutskever, Kunal Talwar, Paul Tucker, Vincent Vanhoucke, Vijay Vasudevan, Fernanda Viegas, Oriol Vinyals, Pete Warden, Martin Wattenberg, Martin Wicke, Yuan Yu, Xiaoqiang Zheng",
        venue: "Proceedings of the 12th USENIX conference on Operating Systems Design and Implementation (OSDI)",
        image: "https://sites.harvard.edu/insight-lab/files/2022/10/pub_2016_tensorflow.png",
        preprint: "https://arxiv.org/pdf/1603.04467",
        year: 2016,
    },
];

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
            currentTab: "All",
            displayLimit: 10, // initially showing 10 publications
            filteredPublications: publications
        });

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

        watch(() => state.yearFilter,
            () => {
                state.filteredPublications = publications.filter(p => p.year >= state.yearFilter[0] && p.year <= state.yearFilter[1]);
                state.displayLimit = Math.min(10, state.filteredPublications.length);
            })

        return {
            publications,
            ...toRefs(state),
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
