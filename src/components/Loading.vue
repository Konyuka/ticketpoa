<template>
    <section>
        <b-field>
            <button class="button is-primary is-medium" @click="openLoading">
                Launch loading
            </button>
        </b-field>
        <b-field>
            <b-switch v-model="isFullPage">Display loader over full page</b-switch>
        </b-field>
        <b-notification :closable="false">
            <b-loading :is-full-page="isFullPage" :active.sync="isLoading" :can-cancel="true"></b-loading>
        </b-notification>
    </section>
</template>

<script>
    export default {
        name: 'Loading',
        data() {
            return {
                isLoading: false,
                isFullPage: true
            }
        },
        methods: {
            openLoading() {
                this.isLoading = true
                setTimeout(() => {
                    this.isLoading = false
                }, 10 * 100)
            }
        }
    }
</script>
