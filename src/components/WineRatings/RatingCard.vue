<template>
    <el-card class="box-card" style="height: 100%" v-loading="rating.loading">
        <div slot="header" class="d-flex align-items-start">
            <h5 class="wine-name flex-grow-1 pr-2 mb-0 text-uppercase">{{ rating.wine.name }}</h5>
            <el-dropdown trigger="click" @command="handleMoreInfoCommand" v-if="!moreInfo">
                <el-button style="padding: 0;" type="text">
                    <i class="fas fa-ellipsis-v fa-fw"></i>
                </el-button>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="moreInfo">More Information</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
            <el-button style="padding: 0;" v-else type="text" @click="moreInfo = false">
                <i class="fas fa-arrow-left fa-fw"></i>
            </el-button>
        </div>

        <div class="text-center">
            <div class="general-information" v-if="!moreInfo">
                <el-rate v-model="rating.rating" :colors="colors" class="rating-stars" @change="saveRating(rating)"></el-rate>
                <div style="margin-top: 40px">
                    <el-input placeholder="Do you have any additional feedback?" class="text-feedback" v-model="rating.comment">
                        <el-button slot="append" icon="el-icon-check" class="px-0" @click="saveRating(rating)"></el-button>
                    </el-input>
                </div>
                <el-tabs v-model="activeName" :stretch="true" class="mt-3 text-left">
                    <el-tab-pane label="WHAT TO LOOK FOR" name="whatTooLookFor">
                        <div class="d-flex pt-4" v-if="mightSeeText">
                            <img src="/img/ratings/rating-see.svg" alt="What you might see" width="40" />
                            <div class="flex-grow-1 pl-2">
                                <h5 class="mb-0">WHAT YOU MIGHT SEE</h5>
                                <read-more :text="mightSeeText"></read-more>
                            </div>
                        </div>
                        <div class="d-flex pt-4" v-if="mightSmellText">
                            <img src="/img/ratings/rating-smell.svg" alt="What you might smell" width="40" />
                            <div class="flex-grow-1 pl-2">
                                <h5 class="mb-0">WHAT YOU MIGHT SMELL</h5>
                                <read-more :text="mightSmellText"></read-more>
                            </div>
                        </div>
                        <div class="d-flex pt-4" v-if="mightTasteText">
                            <img src="/img/ratings/rating-taste.svg" alt="What you might taste" width="40" />
                            <div class="flex-grow-1 pl-2">
                                <h5 class="mb-0">WHAT YOU MIGHT TASTE</h5>
                                <read-more :text="mightTasteText"></read-more>
                            </div>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="HOW TO SERVE" name="howToServe">
                        <div class="d-flex pt-4" v-if="howToServeText">
                            <img src="/img/ratings/rating-serving.svg" alt="How to serve" width="40" />
                            <div class="flex-grow-1 pl-2">
                                <h5 class="mb-0">HOW TO SERVE</h5>
                                <p class="mb-0 font-weight-light">{{ howToServeText }}</p>
                            </div>
                        </div>
                        <div class="d-flex pt-4" v-if="foodMatchingText">
                            <img src="/img/ratings/rating-food.svg" alt="Foods that match" width="40" />
                            <div class="flex-grow-1 pl-2">
                                <h5 class="mb-0">FOODS THAT MATCH</h5>
                                <p class="mb-0 font-weight-light">{{ foodMatchingText }}</p>
                            </div>
                        </div>
                    </el-tab-pane>
                </el-tabs>
            </div>

            <div class="more-information" v-else>
                <img src="/img/ratings/rating-vineyard.svg" alt="About the vineyard" width="50" />
                <h5 class="mt-3 mb-0">ABOUT THE VINEYARD</h5>

                <read-more :text="aboutVineyardText" :max-length="150" v-if="aboutVineyardText"></read-more>
                <p v-else>-</p>
                <el-divider class="my-2"></el-divider>

                <img src="/img/ratings/rating-grape.svg" alt="About the vineyard" width="50" />
                <h5 class="mt-3 mb-0">GRAPE VARIETIES</h5>
                <read-more :text="grapeVarietiesText" :max-length="150" v-if="grapeVarietiesText"></read-more>
                <p v-else>-</p>
            </div>
        </div>
    </el-card>
</template>

<script>
    import {get} from 'lodash';
    import ReadMore from "./ReadMore";
    import {sendRatingEvent} from "../../ecommerce-tracking";

    export default {
        components: {
            ReadMore
        },

        props: {
            rating: {
                required: true,
                type: Object,
            }
        },

        data() {
            return {
                value1: null,
                colors: ['#fd6f61', '#fd6f61', '#fd6f61'],
                input3: null,
                activeName: 'whatTooLookFor',
                moreInfo: false,
            };
        },

        computed: {
            mightSeeText() {
                return get(this.rating, 'wine.wine_info.see', '');
            },

            mightSmellText() {
                return get(this.rating, 'wine.wine_info.smell', '');
            },

            mightTasteText() {
                return get(this.rating, 'wine.wine_info.taste', '');
            },

            howToServeText() {
                return get(this.rating, 'wine.wine_info.serving', '');
            },

            foodMatchingText() {
                return get(this.rating, 'wine.wine_info.foodMatching', '');
            },

            aboutVineyardText() {
                return get(this.rating, 'wine.wine_info.aboutVineyard', '');
            },

            grapeVarietiesText() {
                return get(this.rating, 'wine.wine_info.grapeVarieties', '');
            },
        },

        methods: {
            handleMoreInfoCommand() {
                this.moreInfo = true;
            },

            saveRating(rating) {
                sendRatingEvent({
                    event: "email address known",
                    user: { email: get(window.Winedab, 'customerEmail', '') },
                });
                sendRatingEvent({
                    event: 'wine rated',
                    wineRating: {
                        name: rating.wine.name,
                        code: rating.code,
                        score: rating.rating,
                    },
                });
                rating.saveRating();
            }
        },
    }
</script>

<style scoped>
    h5.wine-name {
        color: #425a60;
        font-size: 1rem;
    }

    .rating-stars >>> .el-rate__icon {
        font-size: 40px;
    }

    .text-feedback >>> input {
        font-weight: 300 !important;
    }

    .el-tabs >>> .el-tabs__item {
        font-weight: 300 !important;
    }

    .el-tabs h5 {
        color: #fd6f61;
        font-size: 1em;
    }

    .more-information h5 {
        letter-spacing: 2px;
    }
</style>
