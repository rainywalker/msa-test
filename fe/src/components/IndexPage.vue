<template>
    <div class="movies">
        <h1>Movie Test22222</h1>
        <div v-for="movie in movies" class="movie">
            <img :src="movie.poster" class="poster">
            <div>
                <strong>{{movie.name}}</strong>, <i>{{movie.director}}</i> [{{movie.year}}]
                <router-link :to="{ name: 'show', params: { id: movie.id }}">더보기</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index-page",
        created () {
            this.$http.get('/api/movies')
                .then((res) => {
                    this.movies = res.data;
                })
        },
        data () {
            return {
                movies: []
            }
        }
    }
</script>

<style scoped lang="scss">
    .movies{
        overflow: hidden;
        .movie{
            float:left;margin-left:10px;
            .poster{width:185px;height:260px;box-shadow: 1px 1px 5px  #333}
        }
    }
</style>
