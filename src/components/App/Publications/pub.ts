// define publication types
export type Tag =
  | "visualization"
  | "interpretability"
  | "human-ai interaction"
  | "machine learning";

export const colors: { [key: string]: string } = {
  visualization: "#ebb343",
  interpretability: "#71bc6f",
  "human-ai interaction": "#ec647a",
  "machine learning": "#9149ab",
};

export type Pub = {
  title: string;
  author: string;
  venue: string;
  award?: string;
  image: string;
  tags: Tag[];
  summary?: string;
  preprint?: string;
  demo?: string;
  code?: string;
  project?: string;
  video?: string;
  poster?: string;
  year: number;
};

export const publications: Pub[] = [
  {
    title: "ICLR: In-Context Learning of Representations",
    author:
      "Core Francisco Park*, Andrew Lee*, Ekdeep Singh Lubana*, Yongyi Yang*, Maya Okawa, Kento Nishi, Martin Wattenberg, and Hidenori Tanaka",
    venue: "ICLR",
    image: "https://sites.harvard.edu/insight-lab/files/2025/03/iclr2025.png",
    summary:
      "We find that language models can form representations of in-context learning tasks as context is scaled.",
    preprint: "https://arxiv.org/pdf/2501.00070",
    year: 2025,
    tags: ["interpretability", "machine learning"],
  },
  {
    title:
      "Emergence of Hidden Capabilities: Exploring Learning Dynamics in Concept Space",
    author:
      "Core Francisco Park, Maya Okawa, Andrew Lee, Hidenori Tanaka, and Ekdeep Singh Lubana",
    venue: "NeurIPS",
    award: "Spotlight",
    image:
      "https://sites.harvard.edu/insight-lab/files/2024/12/concept-space.png",
    summary:
      "We propose analyzing a model's learning dynamics via a framework we call the concept space, where each axis represents an independent concept underlying the data generating process.",
    preprint: "https://arxiv.org/pdf/2406.19370",
    year: 2024,
    tags: ["interpretability"],
  },
  {
    title:
      "ChatGPT Doesn't Trust Chargers Fans: Guardrail Sensitivity in Context",
    author: "Victoria R. Li, Yida Chen, and Naomi Saphra",
    venue: "EMNLP",
    image:
      "https://sites.harvard.edu/insight-lab/files/2024/12/guardrail-sensitivity-experimental-setup.jpg",
    summary:
      "We show that ChatGPT guardrails sensitive knowledge from users with different demographics and propose a new evaluation framework to identify such biases in the chatbot's refusal behaviors.",
    preprint: "https://aclanthology.org/2024.emnlp-main.363.pdf",
    year: 2024,
    tags: ["interpretability"],
  },
  {
    title: "Hypertrix: An Indicatrix for High-Dimensional Visualizations",
    author: "Shivam Raval, Fernanda Viégas, and Martin Wattenberg",
    venue: "IEEE VIS",
    award: "Best Paper",
    image:
      "https://sites.harvard.edu/insight-lab/files/2024/12/v-short-1090_Image-e1735524529659.png",
    summary:
      "We introduce the hypertrix: a method for representing distortions that occur when data is projected from arbitrarily high dimensions onto a 2D plane.",
    preprint:
      "https://www.computer.org/csdl/proceedings-article/vis/2024/548500a001/22lDQYGDTjy",
    project: "https://ieeevis.org/year/2024/program/paper_v-short-1090.html",
    year: 2024,
    tags: ["visualization"],
  },
  {
    title:
      "Measuring and Controlling Instruction (In)Stability in Language Model Dialogs",
    author:
      "Kenneth Li, Tianle Liu, Naomi Bashkansky, David Bau, Fernanda Viégas, Hanspeter Pfister, and Martin Wattenberg",
    venue: "COLM",
    award: "Oral",
    image: "https://sites.harvard.edu/insight-lab/files/2024/12/colm-2024.png",
    summary:
      "When a dialogue goes long, a chatbot ceases to follow its system prompt surprisingly quickly—within 8 rounds.",
    preprint: "https://openreview.net/pdf?id=60a1SAtH4e",
    code: "https://github.com/likenneth/persona_drift",
    year: 2024,
    tags: ["interpretability"],
  },
  {
    title:
      "Q-Probe: A Lightweight Approach to Reward Maximization for Language Models",
    author:
      "Kenneth Li, Samy Jelassi, Hugh Zhang, Sham Kakade, Martin Wattenberg, and Fernanda Viégas",
    venue: "ICML",
    image: "https://sites.harvard.edu/insight-lab/files/2024/12/q-probe.png",
    summary:
      "Through rejection sampling, we leverage a language model's own discriminative capability to boost its generative capability.",
    preprint: "https://arxiv.org/pdf/2402.14688",
    code: "https://github.com/likenneth/q_probe",
    year: 2024,
    tags: ["interpretability"],
  },
  {
    title:
      "A Mechanistic Understanding of Alignment Algorithms: A Case Study on DPO and Toxicity",
    author:
      "Andrew Lee, Xiaoyan Bai, Itamar Pres, Martin Wattenberg, Jonathan K. Kummerfeld, and Rada Mihalcea",
    venue: "ICML",
    award: "Oral",
    image: "https://sites.harvard.edu/insight-lab/files/2024/12/dpo.png",
    summary:
      "We study the mechanisms by which alignment algorithms alter a model's behavior, using direct preference optimization (DPO) and toxicity as a case-study.",
    preprint: "https://arxiv.org/pdf/2401.01967",
    code: "https://github.com/ajyl/dpo_toxic",
    year: 2024,
    tags: ["interpretability"],
  },
  {
    title:
      "Designing a Dashboard for Transparency and Control of Conversational AI",
    author:
      "Yida Chen, Aoyu Wu, Trevor DePodesta, Catherine Yeh, Kenneth Li, Nicholas Castillo Marin, Oam Patel, Jan Riecke, Shivam Raval, Olivia Seow, Martin Wattenberg, and Fernanda Viégas",
    venue: "arXiv",
    image:
      "https://sites.harvard.edu/insight-lab/files/2024/12/dashboard_overview.png",
    summary: `We show evidence that conversational language models develop internal models of their users and design a dashboard to provide transparency and control over these "user models."`,
    preprint: "https://arxiv.org/pdf/2406.07882",
    project:
      "https://yc015.github.io/TalkTuner-a-dashboard-ui-for-chatbot-llm/",
    code: "https://github.com/yc015/TalkTuner-chatbot-llm-dashboard/tree/main",
    year: 2024,
    tags: ["human-ai interaction", "interpretability"],
  },
  {
    title:
      "ChainForge: A Visual Toolkit for Prompt Engineering and LLM Hypothesis Testing",
    author:
      "Ian Arawjo, Chelse Swoopes, Priyan Vaithilingam, Martin Wattenberg, and Elena Glassman",
    venue: "ACM CHI",
    award: "Honorable Mention",
    image: "https://sites.harvard.edu/insight-lab/files/2024/12/chainforge.png",
    summary:
      "We present ChainForge, an open-source visual toolkit for prompt engineering and on-demand hypothesis testing of text generation LLMs.",
    preprint: "https://arxiv.org/pdf/2309.09128",
    project: "https://www.chainforge.ai/",
    demo: "chainforge.ai/play",
    code: "https://github.com/ianarawjo/ChainForge",
    year: 2024,
    tags: ["human-ai interaction"],
  },
  {
    title: "Linearity of Relation Decoding in Transformer Language Models",
    author:
      "Evan Hernandez*, Arnab Sen Sharma*, Tal Haklay, Kevin Meng, Martin Wattenberg, Jacob Andreas, Yonathan Belinkov, and David Bau",
    venue: "ICLR",
    award: "Spotlight",
    image:
      "https://sites.harvard.edu/insight-lab/files/2024/01/linear-decoding-748162687ed95315.png",
    summary:
      "We reveal a simple, interpretable, but heterogeneously deployed knowledge representation strategy in transformer LMs.",
    preprint: "https://openreview.net/pdf?id=w7LU2s14kE",
    year: 2024,
    tags: ["interpretability"],
  },
  {
    title:
      "Inference-Time Intervention: Eliciting Truthful Answers from a Language Model",
    author:
      "Kenneth Li*, Oam Patel*, Fernanda Viégas, Hanspeter Pfister, and Martin Wattenberg",
    venue: "NeurIPS",
    award: "Spotlight",
    image: "https://sites.harvard.edu/insight-lab/files/2023/12/truth.png",
    summary:
      "By manipulating the activations of a language model, we can compel it to tell the truth it knows but otherwise hides.",
    preprint: "https://arxiv.org/pdf/2306.03341.pdf",
    code: "https://github.com/likenneth/honest_llama",
    year: 2023,
    tags: ["interpretability"],
  },
  {
    title:
      "Beyond Surface Statistics: Scene Representations in a Latent Diffusion Model",
    author: "Yida Chen, Fernanda Viégas, and Martin Wattenberg",
    venue: "NeurIPS",
    image: "https://sites.harvard.edu/insight-lab/files/2023/12/depth.png",
    summary:
      "Using linear probes, we find controllable representations of 3D geometry inside a latent diffusion model.",
    preprint: "https://arxiv.org/pdf/2306.05720.pdf",
    code: "https://github.com/yc015/scene-representation-diffusion-model",
    project: "https://yc015.github.io/scene-representation-diffusion-model/",
    poster:
      "https://nips.cc/media/PosterPDFs/NeurIPS%202023/74894.png?t=1701540884.728899",
    year: 2023,
    tags: ["interpretability"],
  },
  {
    title:
      "Emergent Linear Representations in World Models of Self-Supervised Sequence Models",
    author: "Neel Nanda*, Andrew Lee*, and Martin Wattenberg",
    venue: "EMNLP",
    award: "Honorable Mention",
    image:
      "https://sites.harvard.edu/insight-lab/files/2024/12/emergent-linear.png",
    summary: `Building off previous work on Othello-playing neural networks,  we show that probing for "my colour" vs. "opponent's colour" may be a simple yet powerful way to interpret the model's internal state.`,
    preprint: "https://aclanthology.org/2023.blackboxnlp-1.2.pdf",
    year: 2023,
    tags: ["interpretability"],
  },
  {
    title: "LingoLand: An AI-Assisted Immersive Game for Language Learning",
    author: "Olivia Seow",
    venue: "UIST",
    award: "Best Demo",
    image:
      "https://sites.harvard.edu/insight-lab/files/2024/01/lingoland-fae62b4d7d4f79f4.png",
    summary:
      "We present LingoLand, an immersive game for language learning powered by generative machine learning.",
    preprint: "https://dl.acm.org/doi/10.1145/3586182.3625117",
    year: 2023,
    tags: ["human-ai interaction"],
  },
  {
    title: "AttentionViz: A Global View of Transformer Attention",
    author:
      "Catherine Yeh, Yida Chen, Aoyu Wu, Cynthia Chen, Fernanda Viégas, and Martin Wattenberg",
    venue: "IEEE VIS",
    image:
      "https://sites.harvard.edu/insight-lab/files/2023/05/2023_pub_attenviz.png",
    summary:
      "We design a new technique to visualize self-attention patterns in transformer models using joint query-key embeddings.",
    preprint: "https://ieeexplore.ieee.org/document/10297591",
    demo: "http://attentionviz.com/",
    code: "https://github.com/catherinesyeh/attention-viz",
    project: "https://catherinesyeh.github.io/attn-docs/",
    video: "https://www.youtube.com/watch?v=YBxRfWTFb3U",
    year: 2023,
    tags: ["visualization"],
  },
  {
    title:
      "Explain-and-Test: An Interactive Machine Learning Framework for Exploring Text Embeddings",
    author:
      "Shivam Raval, Carolyn Wang, Fernanda Viégas, and Martin Wattenberg",
    venue: "IEEE VIS",
    image: "https://sites.harvard.edu/insight-lab/files/2023/12/Workflow.png",
    summary:
      "We introduce a human-in-the-loop framework for exploring and explaining text embeddings.",
    preprint: "https://ieeexplore.ieee.org/document/10360935",
    video: "https://www.youtube.com/watch?v=p6-xK7qQiYQ",
    year: 2023,
    tags: ["visualization"],
  },
  {
    title: "The System Model and the User Model: Exploring AI Dashboard Design",
    author: "Fernanda Viégas and Martin Wattenberg",
    venue: "arXiv",
    image:
      "https://sites.harvard.edu/insight-lab/files/2024/01/user-sys-9aab3437c07af165.jpeg",
    summary:
      "We speculate on the future of AI interface research, and propose a new design space based on identifying, interpreting, and displaying the system's mental models of the user and the system itself.",
    preprint: "https://arxiv.org/pdf/2305.02469.pdf",
    year: 2023,
    tags: ["human-ai interaction", "interpretability"],
  },
  {
    title:
      "Emergent World Representations: Exploring a Sequence Model Trained on a Synthetic Task",
    author:
      "Kenneth Li, Aspen K. Hopkins, David Bau, Fernanda Viégas, Hanspeter Pfister, and Martin Wattenberg",
    venue: "ICLR",
    award: "Oral",
    image: "https://sites.harvard.edu/insight-lab/files/2023/12/othello.png",
    summary:
      "In a GPT trained from scratch on Othello game transcripts, we uncover an interpretable and controllable world model of the game board.",
    preprint: "https://arxiv.org/pdf/2210.13382.pdf",
    code: "https://github.com/likenneth/othello_world",
    demo: "https://likenneth.github.io/othello/togglable.html",
    year: 2023,
    tags: ["interpretability"],
  },
  {
    title: "Grand Challenges in Visual Analytics Applications",
    author:
      "Aoyu Wu, Dazhen Deng, Min Chen, Shixia Liu, Daniel Keim, Ross Maciejewski, Silvia Miksch, Hendrik Strobelt, Fernanda Viégas, and Martin Wattenberg",
    venue: "IEEE CG&A",
    image: "https://wowjyu.github.io/img/cga23viewpoint.d51f6d02.png",
    summary:
      "We outline a research and development agenda for making VA application research more rigorous and impactful.",
    preprint: "https://ieeexplore.ieee.org/document/10251911",
    year: 2023,
    tags: ["visualization"],
  },
  {
    title: "Identifying Structure in the MIMIC ICU Dataset",
    author:
      "Zad Chin, Shivam Raval, Finale Doshi-Velez, Martin Wattenberg, and Leo Anthony Celi",
    venue: "NeurIPS",
    image: "https://sites.harvard.edu/insight-lab/files/2023/12/mimic.png",
    summary:
      "We take a bottom-up, data-driven approach to identify two dominant structures in the MIMIC ICU dataset.",
    preprint:
      "https://finale.seas.harvard.edu/sites/scholar.harvard.edu/files/finale/files/chin_et_al._-_2022_-_identifying_structure_in_the_mimic_icu_dataset.pdf",
    year: 2022,
    tags: ["visualization"],
  },
  {
    title: "Toy Models of Superposition",
    author:
      "Nelson Elhage, Tristan Hume, Catherine Olsson, Nicholas Schiefer, Tom Henighan, Shauna Kravec, Zac Hatfield-Dodds, Robert Lasenby, Dawn Drain, Carol Chen, Roger Grosse, Sam McCandlish, Jared Kaplan, Dario Amodei, Martin Wattenberg, and Christopher Olah",
    venue: "Transformer Circuits Thread",
    image:
      "https://sites.harvard.edu/insight-lab/files/2022/10/pub_2022_composition.png",
    summary:
      "We use toy models to investigate the phenomenon of superposition — when models represent more features than they have dimensions.",
    preprint: "https://transformer-circuits.pub/2022/toy_model/index.html",
    year: 2022,
    tags: ["interpretability"],
  },
  {
    title:
      "Interpreting a Machine Learning Model for Detecting Gravitational Waves",
    author:
      "Mohammadtaher Safarzadeh, Asad Khan, E. A. Huerta, and Martin Wattenberg",
    venue: "arXiv",
    image:
      "https://sites.harvard.edu/insight-lab/files/2022/10/pub_2022_interpreting.png",
    summary:
      "We apply computer vision interpretability techniques to deep learning models used for detecting gravitational waves.",
    preprint: "https://arxiv.org/pdf/2202.07399.pdf",
    year: 2022,
    tags: ["interpretability"],
  },
  {
    title:
      "Exploring the Gap between Informal Mental and Formal Statistical Models",
    author:
      "Hanspeter Pfister, Martin Wattenberg, Johanna Beyer, and Carolina Nobre",
    venue: "Harvard Data Science Review",
    image:
      "https://sites.harvard.edu/insight-lab/files/2022/10/pub_2021_Exploring.png",
    summary:
      "We discuss the challenges and opportunities in integrating exploratory and confirmatory data analyses, focusing on the differences between informal mental models and formal statistical models.",
    preprint:
      "https://hdsr.mitpress.mit.edu/pub/jefx48tr/release/2?readingCollection=c6a3a10e",
    year: 2021,
    tags: ["visualization"],
  },
  {
    title: "Neural Networks Trained on Natural Scenes Exhibit Gestalt Closure",
    author:
      "Been Kim, Emily Reif, Martin Wattenberg, Samy Bengio, and Michael C. Mozer",
    venue: "Computational Brain & Behavior",
    image:
      "https://sites.harvard.edu/insight-lab/files/2022/10/pub_2021_kim_neural.png",
    preprint: "https://arxiv.org/pdf/1903.01069",
    year: 2021,
    tags: ["interpretability"],
  },
  {
    title: "An Interpretability Illusion for BERT",
    author:
      "Tolga Bolukbasi, Adam Pearce, Ann Yuan, Andy Coenen, Emily Reif, Fernanda Viegas, and Martin Wattenberg",
    venue: "arXiv",
    image:
      "https://sites.harvard.edu/insight-lab/files/2022/10/pub_2021_Bolukbasi.png",
    preprint: "https://arxiv.org/pdf/2104.07143",
    year: 2021,
    tags: ["interpretability"],
  },
  {
    title: "The What-If Tool: Interactive Probing of Machine Learning Models",
    author:
      "James Wexler, Mahima Pushkarna, Tolga Bolukbasi, Martin Wattenberg, Fernanda Viégas, and Jimbo Wilson",
    venue: "IEEE VAST",
    image:
      "https://sites.harvard.edu/insight-lab/files/2022/10/pub_2020_Wexler.png",
    preprint: "https://arxiv.org/pdf/1907.04135.pdf",
    year: 2019,
    tags: ["visualization"],
  },
  {
    title:
      "Human-Centered Tools for Coping with Imperfect Algorithms During Medical Decision-Making",
    author:
      "Michael Terry, Martin C. Stumpe, Greg S. Corrado, Fernanda Viegas, Martin Wattenberg, Daniel Smilkov, Been Kim, Jason Hipp, Narayan Hegde, Emily Reif, and Carrie J. Cai",
    venue: "ACM CHI",
    image:
      "https://sites.harvard.edu/insight-lab/files/2022/10/pub_2019_Terry.png",
    preprint: "https://arxiv.org/pdf/1902.02960.pdf",
    year: 2019,
    tags: ["human-ai interaction"],
  },
  {
    title: "Tensorflow.js: Machine Learning for the Web and Beyond",
    author:
      "Daniel Smilkov, Nikhil Thorat, Yannick Assogba, Ann Yuan, Nick Kreeger, Ping Yu, Kangyi Zhang, Shanqing Cai, Eric Nielsen, David Soergel, Stan Bileschi, Michael Terry, Charles Nicholson, Sandeep N. Gupta, Sarah Sirajuddin, D. Sculley, Rajat Monga, Greg Corrado, Fernanda B. Viegas, Martin Wattenberg",
    venue: "SysML",
    image:
      "https://sites.harvard.edu/insight-lab/files/2022/10/pub_2019_tensorflowjs.png",
    preprint: "https://arxiv.org/pdf/1901.05350",
    year: 2019,
    tags: ["machine learning"],
  },
  {
    title:
      "Do Neural Networks Show Gestalt Phenomena? An Exploration of the Law of Closure",
    author: "Been Kim, Emily Reif, Martin Wattenberg, and Samy Bengio",
    venue: "arXiv",
    image:
      "https://sites.harvard.edu/insight-lab/files/2022/10/pub_2019_Kim.png",
    preprint: "https://arxiv.org/pdf/1903.01069",
    year: 2019,
    tags: ["interpretability"],
  },
  {
    title:
      "GAN Lab: Understanding Complex Deep Generative Models Using Interactive Visual Experimentation",
    author:
      "Minsuk Kahng, Nikhil Thorat, Duen Horng Chau, Fernanda B Viégas, and Martin Wattenberg",
    venue: "IEEE VAST",
    image:
      "https://sites.harvard.edu/insight-lab/files/2022/10/pub_2019_ganlab.png",
    preprint: "https://arxiv.org/pdf/1809.01587.pdf",
    year: 2018,
    tags: ["visualization"],
  },
  {
    title: "XRAI: Better Attributions Through Regions",
    author:
      "Andrei Kapishnikov, Tolga Bolukbasi, Fernanda Viégas, and Michael Terry",
    venue: "ICCV",
    image:
      "https://sites.harvard.edu/insight-lab/files/2022/10/pub_2019_iccv.png",
    preprint:
      "https://openaccess.thecvf.com/content_ICCV_2019/papers/Kapishnikov_XRAI_Better_Attributions_Through_Regions_ICCV_2019_paper.pdf",
    year: 2019,
    tags: ["visualization", "interpretability"],
  },
  {
    title: "Visualizing and Measuring the Geometry of BERT",
    author:
      "Emily Reif, Ann Yuan, Martin Wattenberg, Fernanda B Viegas, Andy Coenen, Adam Pearce, and Been Kim",
    venue: "NeurIPS",
    image:
      "https://sites.harvard.edu/insight-lab/files/2022/10/pub_2019_bertgeo.png",
    preprint:
      "http://papers.neurips.cc/paper/9065-visualizing-and-measuring-the-geometry-of-bert.pdf",
    year: 2019,
    tags: ["visualization", "interpretability"],
  },
  {
    title:
      "Interpretability Beyond Feature Attribution: Quantitative Testing with Concept Activation Vectors (TCAV)",
    author:
      "Been Kim, Martin Wattenberg, Justin Gilmer, Carrie Cai, James Wexler, and Fernanda Viegas",
    venue: "ICML",
    image:
      "https://sites.harvard.edu/insight-lab/files/2022/10/pub_2018_tcav.png",
    preprint: "https://proceedings.mlr.press/v80/kim18d/kim18d.pdf",
    year: 2018,
    tags: ["interpretability"],
  },
  {
    title: "Adversarial Spheres",
    author:
      "Justin Gilmer, Luke Metz, Fartash Faghri, Sam Schoenholz, Maithra Raghu, Martin Wattenberg, and Ian Goodfellow",
    venue: "ICLR",
    image:
      "https://sites.harvard.edu/insight-lab/files/2022/10/pub_2018_Gilmer.png",
    preprint: "https://arxiv.org/pdf/1801.02774.pdf",
    year: 2018,
    tags: ["interpretability"],
  },
  {
    title: "Deep Learning of Aftershock Patterns Following Large Earthquakes",
    author:
      "Phoebe MR DeVries, Fernanda Viégas, Martin Wattenberg, and Brendan J Meade",
    venue: "Nature",
    image:
      "https://sites.harvard.edu/insight-lab/files/2022/10/pub_2018_nature.png",
    year: 2018,
    tags: ["interpretability", "machine learning"],
  },
  {
    title:
      "Google's Multilingual Neural Machine Translation System: Enabling Zero-Shot Translation",
    author:
      "Melvin Johnson, Mike Schuster, Quoc V. Le, Maxim Krikun, Yonghui Wu, Zhifeng Chen, Nikhil Thorat, Fernanda Viégas, Martin Wattenberg, Greg Corrado, Macduff Hughes, and Jeffrey Dean",
    venue: "ACL",
    image:
      "https://sites.harvard.edu/insight-lab/files/2022/10/pub_2017_Johnson.png",
    preprint: "https://arxiv.org/pdf/1611.04558.pdf",
    year: 2017,
    tags: ["machine learning"],
  },
  {
    title:
      "Tensorflow: Large-Scale Machine Learning on Heterogeneous Distributed Systems",
    author:
      "Martín Abadi, Ashish Agarwal, Paul Barham, Eugene Brevdo, Zhifeng Chen, Craig Citro, Greg S. Corrado, Andy Davis, Jeffrey Dean, Matthieu Devin, Sanjay Ghemawat, Ian Goodfellow, Andrew Harp, Geoffrey Irving, Michael Isard, Yangqing Jia, Rafal Jozefowicz, Lukasz Kaiser, Manjunath Kudlur, Josh Levenberg, Dan Mane, Rajat Monga, Sherry Moore, Derek Murray, Chris Olah, Mike Schuster, Jonathon Shlens, Benoit Steiner, Ilya Sutskever, Kunal Talwar, Paul Tucker, Vincent Vanhoucke, Vijay Vasudevan, Fernanda Viegas, Oriol Vinyals, Pete Warden, Martin Wattenberg, Martin Wicke, Yuan Yu, Xiaoqiang Zheng",
    venue: "OSDI",
    image:
      "https://sites.harvard.edu/insight-lab/files/2022/10/pub_2016_tensorflow.png",
    preprint: "https://arxiv.org/pdf/1603.04467",
    year: 2016,
    tags: ["machine learning"],
  },
];
