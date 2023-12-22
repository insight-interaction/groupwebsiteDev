<template>
    <div class="section" id="section-research">
        <div class="container">
            <div class="section-head" id="publications"><span>Publications</span></div>
            <Publication v-for="publication in publications" :publication="publication" />
        </div>
    </div>
</template>

<script lang="ts">
import "bootstrap/dist/css/bootstrap.css";
import * as _ from "underscore";

import { CommentOutlined } from "@ant-design/icons-vue";

import Publication from "./Publication.vue";

import { defineComponent } from "vue";
import { useStore } from "vuex";

import { onMounted, computed, reactive, toRefs, h, watch } from "vue";
import { groupBy } from "underscore";

const publications = [
    {
        title: "AttentionViz: A Global View of Transformer Attention",
        author: "Catherine Yeh, Yida Chen, Aoyu Wu, Cynthia Chen, Fernanda Viégas, and Martin Wattenberg",
        venue: "IEEE Transactions on Visualization and Computer Graphics",
        image: "https://sites.harvard.edu/insight-lab/files/2023/05/2023_pub_attenviz.png",
        preprint: "https://arxiv.org/pdf/2305.03210.pdf",
        year: 2023,
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
        title: "Do neural networks show gestalt phenomena? an exploration of the law of closure",
        author: "Been Kim, Emily Reif, Martin Wattenberg, and Samy Bengio",
        venue: "Arxiv",
        image: "https://sites.harvard.edu/insight-lab/files/2022/10/pub_2019_Kim.png",
        preprint: "https://arxiv.org/pdf/1903.01069",
        year: 2019,
    },
    {
        title: "Gan lab: Understanding complex deep generative models using interactive visual experimentation",
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
        title: "Visualizing and measuring the geometry of BERT",
        author: "Emily Reif, Ann Yuan, Martin Wattenberg, Fernanda B Viegas, Andy Coenen, Adam Pearce, and Been Kim",
        venue: "Advances in Neural Information Processing Systems (NIPS)",
        image: "https://sites.harvard.edu/insight-lab/files/2022/10/pub_2019_bertgeo.png",
        preprint:
            "http://papers.neurips.cc/paper/9065-visualizing-and-measuring-the-geometry-of-bert.pdf",
        year: 2019,
    },
    {
        title: "Interpretability beyond feature attribution: Quantitative testing with concept activation vectors (tcav)",
        author: "Been Kim, Martin Wattenberg, Justin Gilmer, Carrie Cai, James Wexler, and Fernanda Viegas",
        venue: "International Conference on Machine Learning (ICML)",
        image: "https://sites.harvard.edu/insight-lab/files/2022/10/pub_2018_tcav.png",
        preprint: "https://proceedings.mlr.press/v80/kim18d/kim18d.pdf",
        year: 2018,
    },
    {
        title: "Adversarial spheres",
        author: "Justin Gilmer, Luke Metz, Fartash Faghri, Sam Schoenholz, Maithra Raghu, Martin Wattenberg, and Ian Goodfellow",
        venue: "ICLR",
        image: "https://sites.harvard.edu/insight-lab/files/2022/10/pub_2018_Gilmer.png",
        preprint: "https://arxiv.org/pdf/1801.02774.pdf",
        year: 2018,
    },
    {
        title: "Deep learning of aftershock patterns following large earthquakes",
        author: "Phoebe MR DeVries, Fernanda Viégas, Martin Wattenberg, and Brendan J Meade",
        venue: "Nature",
        image: "https://sites.harvard.edu/insight-lab/files/2022/10/pub_2018_nature.png",
        year: 2018,
    },
    {
        title: "Google’s multilingual neural machine translation system: Enabling zero-shot translation",
        author: "Melvin Johnson, Mike Schuster, Quoc V. Le, Maxim Krikun, Yonghui Wu, Zhifeng Chen, Nikhil Thorat, Fernanda Viégas, Martin Wattenberg, Greg Corrado, Macduff Hughes, and Jeffrey Dean",
        venue: "Transactions of the Association for Computational Linguistics (ACL)",
        image: "https://sites.harvard.edu/insight-lab/files/2022/10/pub_2017_Johnson.png",
        preprint: "https://arxiv.org/pdf/1611.04558.pdf",
        year: 2017,
    },
    {
        title: "Tensorflow: Large-scale machine learning on heterogeneous distributed systems",
        author: "Martín Abadi, Ashish Agarwal, Paul Barham, Eugene Brevdo, Zhifeng Chen, Craig Citro, Greg S. Corrado, Andy Davis, Jeffrey Dean, Matthieu Devin, Sanjay Ghemawat, Ian Goodfellow, Andrew Harp, Geoffrey Irving, Michael Isard, Yangqing Jia, Rafal Jozefowicz, Lukasz Kaiser, Manjunath Kudlur, Josh Levenberg, Dan Mane, Rajat Monga, Sherry Moore, Derek Murray, Chris Olah, Mike Schuster, Jonathon Shlens, Benoit Steiner, Ilya Sutskever, Kunal Talwar, Paul Tucker, Vincent Vanhoucke, Vijay Vasudevan, Fernanda Viegas, Oriol Vinyals, Pete Warden, Martin Wattenberg, Martin Wicke, Yuan Yu, Xiaoqiang Zheng",
        venue: "Proceedings of the 12th USENIX conference on Operating Systems Design and Implementation (OSDI)",
        image: "https://sites.harvard.edu/insight-lab/files/2022/10/pub_2016_tensorflow.png",
        preprint: "https://arxiv.org/pdf/1603.04467",
        year: 2016,
    },
];

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
        // for (let p of publications) {
        //     p.img = require(`@/assets/images/${p.imgurl}`);
        // }

        const state = reactive({
            yearFilter: [],
            currentTab: "All",
        });

        return {
            publications,
            ...toRefs(state),
            publicationsByYear,
        };
    },
    computed: {},
});
</script>

<style rel="stylesheet" lang="scss">
#section-research {
    .ant-card-head {
        min-height: 30px;

        .ant-card-head-title {
            padding-top: 8px;
            padding-bottom: 8px;
        }
    }

    img {
        border: 1px solid #5e7595;
    }

    .ant-card-body {
        padding: 8px 24px;
    }

    .anticon {
        vertical-align: 0.1em;
    }

    .ant-tabs {
        font-size: 15px;

        .research-head {
            font-size: 1.2em;
            font-weight: 500;
            // text-decoration: underline;
            // text-decoration-color: $color1;
            // text-decoration-thickness: 2px;
        }

        span.work-short {
            // border-bottom: 2px solid $color1;

            // text-decoration: underline;
            // text-decoration-color: $color1;
            // text-decoration-thickness: 2px;
        }
    }
}

div.publication_wrapper:not(:last-child) {
    border-bottom: 1px solid silver;
}

div.publication_wrapper a {
    color: #b41111 !important;
    text-decoration: underline !important;
    background-color: transparent !important;
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
}

.publication_venue {
    font-size: small;
}

.publication_miscellaneous {
    margin: 5px 0px;
}

.publication_miscellaneous_icon {
    pointer-events: none;
}

.publicationsByYear_wrapper {
    margin: 30px 0px;
}

.publicationsByYear_head {
    font-family: "inter";
    font-size: 40px;
    font-weight: 500;
    text-align: center;
    display: block;
}

.publication_venue {
    font-style: italic;
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
