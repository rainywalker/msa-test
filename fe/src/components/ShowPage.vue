<template>
    <div>
        <h1>상세내용</h1>
    </div>
</template>

<script>
    export default {
        name: "show-page",
        created() {
            const id = this.$route.params.id;
            this.$http.get(`/api/movies/${id}`)
                .then(res => {
                    this.movie = res.data

                })
        },
        data() {
            return {
                movie: {}
            }
        }
    }
</script>

<style scoped>

</style>
