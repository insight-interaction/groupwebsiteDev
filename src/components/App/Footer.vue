<template>
    <div class="footer-contain">
        <div class="update">Last Updated: March 2024</div>
        <footer class="footer h-100">
            <div class="container">
                <a id="up-arrow" class="arrow-button" href="#" title="Back to top"><img :src="toTop" /></a>
                <div class="footer-imgs">
                    <a href="#" title="Insight + Interaction"><img :src="footerLogo" id="footer-logo" /></a>
                    <a-divider type="vertical" style="
                            height: 40px;
                            background-color: white;
                            opacity: 0.5;
                            width: 2px;
                            margin: 0 20px;
                            transform: rotate(15deg);
                        " />
                    <a href="https://seas.harvard.edu/" target="_blank" title="Harvard SEAS"><img
                            :src="harvardLogo" /></a>
                </div>
                <div class="copyright-msg container align-middle justify-content-center align-self-center text-center">
                    Copyright © {{ year }} The President and Fellows of Harvard College
                    <div>
                        <a href="https://accessibility.harvard.edu/" target="_blank">Accessibility</a>
                        <a-divider type="vertical" style="
                            height: 16px;
                            background-color: white;
                            opacity: 0.5;
                            width: 1.5px;
                            margin: 0 8px;
                        " />
                        <a href="https://accessibility.huit.harvard.edu/digital-accessibility-policy"
                            target="_blank">Digital
                            Accessibility</a>
                        <a-divider type="vertical" style="
                            height: 16px;
                            background-color: white;
                            opacity: 0.5;
                            width: 1.5px;
                            margin: 0 8px;
                        " />
                        <a href="https://www.harvard.edu/copyright-issue/" target="_blank">Report Copyright
                            Infringement</a>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script lang="ts">
import "bootstrap/dist/css/bootstrap.css";

import { defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
    name: "Footer",
    setup() {
        const state = reactive({
            year: new Date().getFullYear(),
        });

        const footerLogo = require(`@/assets/logos/footerlogo.svg`);
        const harvardLogo = require(`@/assets/logos/harvardlogo.svg`);
        const toTop = require(`@/assets/backtotop.svg`);

        return {
            ...toRefs(state),
            footerLogo,
            harvardLogo,
            toTop,
        };
    },
    computed: {},
});
</script>

<style rel="stylesheet" lang="scss">
.footer-contain {
    margin-top: 20px;

    .update {
        width: 100%;
        text-align: center;
        font-size: x-small;
        margin-bottom: 0;
        padding: 4px 10px;
        transition: 0.5s;
        background-color: rgb($text-color, 0.03);
    }

    .footer {
        background-color: $dark-accent;
        padding-top: 20px;
        padding-bottom: 20px;
        color: white;
        font-size: smaller;
        text-align: center;
        position: relative;

        img {
            max-height: 60px;
            width: auto;
            margin: 0 !important;
            transition: 0.5s;
        }

        #footer-logo {
            padding: 2px;
        }

        .footer-imgs {
            width: 100%;

            img {
                max-width: 220px;
            }

            img:hover {
                opacity: 0.7;
            }
        }

        p {
            margin-bottom: 0;
        }

        #up-arrow {
            position: absolute;
            right: 20px;
            top: 50%;
            transform: translateY(-50%);
            transition: 0.5s;
        }

        #up-arrow img {
            max-height: 25px;
            transition: 0.5s;
        }

        #up-arrow:hover {
            opacity: 0.7;
        }

        .copyright-msg {
            padding-top: 15px;
            font-size: small;
            transition: 0.5s;

            div {
                transform: scale(0.95);
                font-weight: 200;
                // font-family: $title-font;
                color: $lightest-accent;
            }

            a {
                text-decoration: none;
                transition: 0.5s;

                &:hover {
                    opacity: 0.7;
                }
            }
        }

        a {
            color: inherit;
        }
    }
}

@media (max-width: 600px) {
    .footer {
        img {
            max-width: 180px !important;
        }
    }
}

@media (max-width: 500px) {
    .footer {
        img {
            max-height: 45px !important;
            max-width: 140px !important;
        }

        #up-arrow {
            right: 12px;
        }

        #up-arrow img {
            max-height: 20px !important;
        }
    }
}
</style>
