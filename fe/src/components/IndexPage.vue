<template>
    <div class="movies">
        <div>
            <h1>Movie Test22222</h1>
            <div v-for="movie in movies" class="movie">
                <img :src="movie.poster" class="poster">
                <div>
                    <strong>{{movie.name}}</strong>, <i>{{movie.director}}</i> [{{movie.year}}]
                    <router-link :to="{ name: 'show', params: { id: movie.id }}">더보기</router-link>
                </div>
            </div>
        </div>

        <fieldset class="ipt">
            <legend>insert</legend>
            <ul>
                <li>name <input type="text" ref="name"></li>
                <li>year <input type="text" ref="year"></li>
                <li>director <input type="text" ref="director"></li>
                <li>poster <input type="text" ref="poster"></li>
            </ul>
            <button type="button" @click="go">Submit</button>
        </fieldset>
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
        },
        methods : {
            go() {

                const data = {
                    name : this.$refs.name.value,
                    year : this.$refs.year.value,
                    director : this.$refs.director.value,
                    poster : this.$refs.poster.value
                }
                this.$http.post('/api/movies',data)
                    .then(res => {
                        console.log(res)
                        alert('완료')
                    })
                    .catch(err => {
                        console.log(err)
                    })
            }
        }
    }
</script>

<style scoped lang="scss">
    .movies{
        & > div{ overflow: hidden}
        .movie{
            float:left;margin-left:10px;
            .poster{width:185px;height:260px;box-shadow: 1px 1px 5px  #333}
        }
        .ipt{
            margin:0;padding:0;text-align: left;
            li{list-style: none}

        }
    }
</style>
