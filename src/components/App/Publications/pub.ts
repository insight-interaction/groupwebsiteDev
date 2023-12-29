// define publication types
export type Tag = "visualization" | "interpretability" | "human-ai interaction" | "machine learning";

export const colors: { [key: string]: string } = {
    "visualization": "#ebb343",
    "interpretability": "#71bc6f",
    "human-ai interaction": "#ec647a",
    "machine learning": "#9149ab",
}

export type Pub = {
    title: string;
    author: string;
    venue: string;
    image: string;
    tags: Tag[];
    preprint?: string;
    demo?: string;
    code?: string;
    project?: string;
    video?: string;
    poster?: string;
    year: number;
}

export const publications: Pub[] = [
    {
        title: "Inference-Time Intervention: Eliciting Truthful Answers from a Language Model",
        author: "Kenneth Li*, Oam Patel*, Fernanda Viégas, Hanspeter Pfister, and Martin Wattenberg",
        venue: "Conference on Neural Information Processing Systems (NeurIPS)",
        image: "https://sites.harvard.edu/insight-lab/files/2023/12/truth.png",
        preprint: "https://arxiv.org/pdf/2306.03341.pdf",
        code: "https://github.com/likenneth/honest_llama",
        year: 2023,
        tags: ["interpretability"]
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
        year: 2023,
        tags: ["interpretability"]
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
        tags: ["visualization"]
    },
    {
        title: "Explain-and-Test: An Interactive Machine Learning Framework for Exploring Text Embeddings",
        author: "Shivam Raval, Carolyn Wang, Fernanda Viégas, and Martin Wattenberg",
        venue: "IEEE Visualization and Visual Analytics",
        image: "https://sites.harvard.edu/insight-lab/files/2023/12/Workflow.png",
        preprint: "https://ieeexplore.ieee.org/abstract/document/10360935",
        video: "https://www.youtube.com/watch?v=p6-xK7qQiYQ",
        year: 2023,
        tags: ["visualization"]
    },
    {
        title: "Emergent World Representations: Exploring a Sequence Model Trained on a Synthetic Task",
        author: "Kenneth Li, Aspen K. Hopkins, David Bau, Fernanda Viégas, Hanspeter Pfister, and Martin Wattenberg",
        venue: "International Conference on Learning Representations (ICLR)",
        image: "https://sites.harvard.edu/insight-lab/files/2023/12/othello.png",
        preprint: "https://arxiv.org/pdf/2210.13382.pdf",
        code: "https://github.com/likenneth/othello_world",
        demo: "https://likenneth.github.io/othello/togglable.html",
        year: 2023,
        tags: ["interpretability"]
    },
    {
        title: "Grand Challenges in Visual Analytics Applications",
        author: "Aoyu Wu, Dazhen Deng, Min Chen, Shixia Liu, Daniel Keim, Ross Maciejewski, Silvia Miksch, Hendrik Strobelt, Fernanda Viégas, and Martin Wattenberg",
        venue: "IEEE Computer Graphics and Applications",
        image: "https://wowjyu.github.io/img/cga23viewpoint.d51f6d02.png",
        preprint: "https://ieeexplore.ieee.org/abstract/document/10251911",
        year: 2023,
        tags: ["visualization"]
    },
    {
        title: "Identifying Structure in the MIMIC ICU Dataset",
        author: "Zad Chin, Shivam Raval, Finale Doshi-Velez, Martin Wattenberg, and Leo Anthony Celi",
        venue: "NeurIPS Workshop on Learning from Time Series for Health",
        image: "https://sites.harvard.edu/insight-lab/files/2023/12/mimic.png",
        preprint: "https://finale.seas.harvard.edu/sites/scholar.harvard.edu/files/finale/files/chin_et_al._-_2022_-_identifying_structure_in_the_mimic_icu_dataset.pdf",
        year: 2022,
        tags: ["visualization"]
    },
    {
        title: "Toy Models of Superposition",
        author: "Nelson Elhage, Tristan Hume, Catherine Olsson, Nicholas Schiefer, Tom Henighan, Shauna Kravec, Zac Hatfield-Dodds, Robert Lasenby, Dawn Drain, Carol Chen, Roger Grosse, Sam McCandlish, Jared Kaplan, Dario Amodei, Martin Wattenberg, and Christopher Olah",
        venue: "Transformer Circuits Thread",
        image: "https://sites.harvard.edu/insight-lab/files/2022/10/pub_2022_composition.png",
        preprint: "https://transformer-circuits.pub/2022/toy_model/index.html",
        year: 2022,
        tags: ["interpretability"]
    },
    {
        title: "Interpreting a Machine Learning Model for Detecting Gravitational Waves",
        author: "Mohammadtaher Safarzadeh, Asad Khan, E. A. Huerta, and Martin Wattenberg",
        venue: "arXiv",
        image: "https://sites.harvard.edu/insight-lab/files/2022/10/pub_2022_interpreting.png",
        preprint: "https://arxiv.org/pdf/2202.07399.pdf",
        year: 2022,
        tags: ["interpretability"]
    },
    {
        title: "Exploring the Gap between Informal Mental and Formal Statistical Models",
        author: "Hanspeter Pfister, Martin Wattenberg, Johanna Beyer, and Carolina Nobre",
        venue: "Harvard Data Science Review",
        image: "https://sites.harvard.edu/insight-lab/files/2022/10/pub_2021_Exploring.png",
        preprint: "https://hdsr.mitpress.mit.edu/pub/jefx48tr/release/2?readingCollection=c6a3a10e",
        year: 2021,
        tags: ["visualization"]
    },
    {
        title: "Neural Networks Trained on Natural Scenes Exhibit Gestalt Closure",
        author: "Been Kim, Emily Reif, Martin Wattenberg, Samy Bengio, and Michael C. Mozer",
        venue: "Computational Brain & Behavior",
        image: "https://sites.harvard.edu/insight-lab/files/2022/10/pub_2021_kim_neural.png",
        preprint: "https://arxiv.org/pdf/1903.01069",
        year: 2021,
        tags: ["interpretability"]
    },
    {
        title: "An Interpretability Illusion for BERT",
        author: "Tolga Bolukbasi, Adam Pearce, Ann Yuan, Andy Coenen, Emily Reif, Fernanda Viegas, and Martin Wattenberg",
        venue: "arXiv",
        image: "https://sites.harvard.edu/insight-lab/files/2022/10/pub_2021_Bolukbasi.png",
        preprint: "https://arxiv.org/pdf/2104.07143",
        year: 2021,
        tags: ["interpretability"]
    },
    {
        title: "The What-If Tool: Interactive Probing of Machine Learning Models",
        author: "James Wexler, Mahima Pushkarna, Tolga Bolukbasi, Martin Wattenberg, Fernanda Viégas, and Jimbo Wilson",
        venue: "IEEE Transactions on Visualization and Computer Graphics",
        image: "https://sites.harvard.edu/insight-lab/files/2022/10/pub_2020_Wexler.png",
        preprint: "https://arxiv.org/pdf/1907.04135.pdf",
        year: 2020,
        tags: ["visualization"]
    },
    {
        title: "Human-Centered Tools for Coping with Imperfect Algorithms During Medical Decision-Making",
        author: "Michael Terry, Martin C. Stumpe, Greg S. Corrado, Fernanda Viegas, Martin Wattenberg, Daniel Smilkov, Been Kim, Jason Hipp, Narayan Hegde, Emily Reif, and Carrie J. Cai",
        venue: "Proceedings of the CHI Conference on Human Factors in Computing Systems",
        image: "https://sites.harvard.edu/insight-lab/files/2022/10/pub_2019_Terry.png",
        preprint: "https://arxiv.org/pdf/1902.02960.pdf",
        year: 2019,
        tags: ["human-ai interaction"]
    },
    {
        title: "Tensorflow.js: Machine Learning for the Web and Beyond",
        author: "Daniel Smilkov Nikhil Thorat Yannick Assogba Ann Yuan Nick Kreeger Ping Yu Kangyi Zhang Shanqing Cai Eric Nielsen David Soergel Stan Bileschi Michael Terry Charles Nicholson Sandeep N. Gupta Sarah Sirajuddin D. Sculley Rajat Monga Greg Corrado Fernanda B. Viegas Martin Wattenberg",
        venue: "Proceedings of Machine Learning and Systems",
        image: "https://sites.harvard.edu/insight-lab/files/2022/10/pub_2019_tensorflowjs.png",
        preprint: "https://arxiv.org/pdf/1901.05350",
        year: 2019,
        tags: ["machine learning"]
    },
    {
        title: "Do Neural Networks Show Gestalt Phenomena? An Exploration of the Law of Closure",
        author: "Been Kim, Emily Reif, Martin Wattenberg, and Samy Bengio",
        venue: "Arxiv",
        image: "https://sites.harvard.edu/insight-lab/files/2022/10/pub_2019_Kim.png",
        preprint: "https://arxiv.org/pdf/1903.01069",
        year: 2019,
        tags: ["interpretability"]
    },
    {
        title: "GAN Lab: Understanding Complex Deep Generative Models Using Interactive Visual Experimentation",
        author: "Minsuk Kahng, Nikhil Thorat, Duen Horng Chau, Fernanda B Viégas, and Martin Wattenberg",
        venue: "IEEE Transactions on Visualization and Computer Graphics",
        image: "https://sites.harvard.edu/insight-lab/files/2022/10/pub_2019_ganlab.png",
        preprint: "https://arxiv.org/pdf/1809.01587.pdf",
        year: 2019,
        tags: ["visualization"]
    },
    {
        title: "XRAI: Better Attributions Through Regions",
        author: "Andrei Kapishnikov, Tolga Bolukbasi, Fernanda Viégas, and Michael Terry",
        venue: "Proceedings of the IEEE/CVF International Conference on Computer Vision (ICCV)",
        image: "https://sites.harvard.edu/insight-lab/files/2022/10/pub_2019_iccv.png",
        preprint:
            "https://openaccess.thecvf.com/content_ICCV_2019/papers/Kapishnikov_XRAI_Better_Attributions_Through_Regions_ICCV_2019_paper.pdf",
        year: 2019,
        tags: ["visualization", "interpretability"]
    },
    {
        title: "Visualizing and Measuring the Geometry of BERT",
        author: "Emily Reif, Ann Yuan, Martin Wattenberg, Fernanda B Viegas, Andy Coenen, Adam Pearce, and Been Kim",
        venue: "Advances in Neural Information Processing Systems (NeurIPS)",
        image: "https://sites.harvard.edu/insight-lab/files/2022/10/pub_2019_bertgeo.png",
        preprint:
            "http://papers.neurips.cc/paper/9065-visualizing-and-measuring-the-geometry-of-bert.pdf",
        year: 2019,
        tags: ["visualization", "interpretability"]
    },
    {
        title: "Interpretability Beyond Feature Attribution: Quantitative Testing with Concept Activation Vectors (TCAV)",
        author: "Been Kim, Martin Wattenberg, Justin Gilmer, Carrie Cai, James Wexler, and Fernanda Viegas",
        venue: "International Conference on Machine Learning (ICML)",
        image: "https://sites.harvard.edu/insight-lab/files/2022/10/pub_2018_tcav.png",
        preprint: "https://proceedings.mlr.press/v80/kim18d/kim18d.pdf",
        year: 2018,
        tags: ["interpretability"]
    },
    {
        title: "Adversarial Spheres",
        author: "Justin Gilmer, Luke Metz, Fartash Faghri, Sam Schoenholz, Maithra Raghu, Martin Wattenberg, and Ian Goodfellow",
        venue: "International Conference on Learning Representations (ICLR)",
        image: "https://sites.harvard.edu/insight-lab/files/2022/10/pub_2018_Gilmer.png",
        preprint: "https://arxiv.org/pdf/1801.02774.pdf",
        year: 2018,
        tags: ["interpretability"]
    },
    {
        title: "Deep Learning of Aftershock Patterns Following Large Earthquakes",
        author: "Phoebe MR DeVries, Fernanda Viégas, Martin Wattenberg, and Brendan J Meade",
        venue: "Nature",
        image: "https://sites.harvard.edu/insight-lab/files/2022/10/pub_2018_nature.png",
        year: 2018,
        tags: ["interpretability", "machine learning"]
    },
    {
        title: "Google's Multilingual Neural Machine Translation System: Enabling Zero-Shot Translation",
        author: "Melvin Johnson, Mike Schuster, Quoc V. Le, Maxim Krikun, Yonghui Wu, Zhifeng Chen, Nikhil Thorat, Fernanda Viégas, Martin Wattenberg, Greg Corrado, Macduff Hughes, and Jeffrey Dean",
        venue: "Transactions of the Association for Computational Linguistics (ACL)",
        image: "https://sites.harvard.edu/insight-lab/files/2022/10/pub_2017_Johnson.png",
        preprint: "https://arxiv.org/pdf/1611.04558.pdf",
        year: 2017,
        tags: ["machine learning"]
    },
    {
        title: "Tensorflow: Large-Scale Machine Learning on Heterogeneous Distributed Systems",
        author: "Martín Abadi, Ashish Agarwal, Paul Barham, Eugene Brevdo, Zhifeng Chen, Craig Citro, Greg S. Corrado, Andy Davis, Jeffrey Dean, Matthieu Devin, Sanjay Ghemawat, Ian Goodfellow, Andrew Harp, Geoffrey Irving, Michael Isard, Yangqing Jia, Rafal Jozefowicz, Lukasz Kaiser, Manjunath Kudlur, Josh Levenberg, Dan Mane, Rajat Monga, Sherry Moore, Derek Murray, Chris Olah, Mike Schuster, Jonathon Shlens, Benoit Steiner, Ilya Sutskever, Kunal Talwar, Paul Tucker, Vincent Vanhoucke, Vijay Vasudevan, Fernanda Viegas, Oriol Vinyals, Pete Warden, Martin Wattenberg, Martin Wicke, Yuan Yu, Xiaoqiang Zheng",
        venue: "Proceedings of the 12th USENIX conference on Operating Systems Design and Implementation (OSDI)",
        image: "https://sites.harvard.edu/insight-lab/files/2022/10/pub_2016_tensorflow.png",
        preprint: "https://arxiv.org/pdf/1603.04467",
        year: 2016,
        tags: ["machine learning"]
    },
];