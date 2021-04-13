<template>
    <div>
        <template v-if="currentRatings.length || pastRatings.length">
            <nav class="navbar-green py-3 px-5">
                    <h1>Hi {{ customerName }},</h1>
                    <p class="font-weight-light mb-1">Now you’ve got your wine, please tell us what you think, so we can improve your choices next month.</p>
                    <p class="font-weight-light mb-1">You’ll also find useful information about each wine here.</p>
            </nav>

            <div class="d-flex align-items-stretch flex-wrap justify-content-center mt-4">
                <div class="mb-5 mx-0 mx-sm-5 rating-card-container" v-for="(rating) in currentRatings" :key="getRatingKey(rating)">
                    <rating-card :rating="rating"></rating-card>
                </div>
            </div>

            <h3 class="text-center mt-5">PAST RATINGS</h3>
            <div class="d-flex align-items-stretch flex-wrap justify-content-center mt-4">
                <div class="mb-5 mx-0 mx-sm-5 rating-card-container" v-for="(rating) in pastRatings" :key="getRatingKey(rating)">
                    <rating-card :rating="rating"></rating-card>
                </div>

                <h4 v-if="!pastRatings.length" class="mb-4 text-danger">
                    No other wine selection was found.
                </h4>
            </div>
        </template>

        <template v-else>
            <nav class="navbar-green py-3 px-5">
                <h1>Hang Tight!</h1>
                <p class="font-weight-light mb-1">Your first wine box will be shipped soon. Once it has been
                    delivered your wine selection will show here and be ready for you to rate.
                </p>
            </nav>

            <div class="d-flex align-items-stretch flex-wrap justify-content-center mt-4">
                <img src="/img/adventurous.png" width="320" />
            </div>
        </template>
    </div>
</template>

<script>
    import {get, each, map} from 'lodash';
    import RatingCard from "./WineRatings/RatingCard";
    import WineRating from "../models/WineRating";

    export default {
        components: {
            RatingCard,
        },

        data() {
            return {
                currentRatings: [],
                pastRatings: [],
            };
        },

        mounted() {
            window.sessionStorage.setItem('age-gate', "confirmed");

            /**
             * Some JS magic for the ratings page
             */
            const main = jQuery('main');
            main.removeClass('container');
            main.addClass('container-fluid');
            jQuery('body').css('padding-top', 0);

            this.setupRatings();
        },

        computed: {
            global() {
                return window.Winedab;
            },

            customerName() {
                return get(this.global, 'customerName', '');
            },
        },

        methods: {
            setupRatings() {
                each(['currentRatings', 'pastRatings'], (key) => {
                    const ratingsList = get(this.global, key, []);

                    this[key] = map(ratingsList, (rating) => {
                        return new WineRating(rating);
                    });
                });
            },

            getRatingKey(rating) {
                return rating.order_delivery_id + '-' + rating.code;
            },
        },
    }
</script>

<style scoped>
    nav {
        display: block;
        color: #ffffff;
        margin-left: -15px;
        margin-right: -15px;
    }

    nav > p {
        font-size: 1rem;
    }

    .rating-card-container {
        max-width: 360px;
        min-width: 310px;
    }
</style>
