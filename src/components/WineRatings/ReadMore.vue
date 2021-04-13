<template>
    <p class="mb-0 font-weight-light">
        {{ truncatedText }}
        <el-popover
            placement="top"
            title=""
            width="250"
            trigger="click"
            :content="text">
            <el-button slot="reference" style="padding: 0;" type="text" v-if="!isSameLength">
                more
            </el-button>
        </el-popover>
    </p>
</template>

<script>
    import {truncate} from "lodash";

    export default {
        props: {
            text: {
                required: true,
                type: String,
            },

            maxLength: {
                required: false,
                type: Number,
                default: 60,
            },
        },

        computed: {
            isSameLength() {
                return this.text.length === this.truncatedText.length;
            },

            truncatedText() {
                return truncate(this.text, {'length': this.maxLength});
            },
        }
    }
</script>

<style scoped>

</style>
