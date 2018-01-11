# msa-test



## be(back-end)

#### setting

````
cd be
npm install supervisor -g
npm install 
npm start
````
localhost:9000


## fe(front-end)

#### setting
````
cd fe
npm install 
npm run dev

````
localhost:8080

#### build
````
npm run build
````

## description

**back-end Part**
1. 라우터에서 영화목록을 가져오는 api(moives.json) - be/route/movies.js
1-1. id와 일차하는 영화를 가져오는 api
2. app.js에 movies.js를 등록

**front-end Part**
1. localhost:8080/api 요청이 들어오면 localhost:300/api를 프록시로 사용 - fe/config/index.js
