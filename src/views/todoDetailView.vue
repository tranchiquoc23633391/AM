<script setup>
import router from '@/router';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';



const route = useRoute();
const user = ref(null);
const characters = ref([]);

onMounted(() => {
  (async () => {

    //lay thong tin anime
    const id = route.params.id; // ví dụ: /todo/5114 → id = 5114
    const res = await fetch(`https://api.jikan.moe/v4/anime/${id}/full`);
    const json = await res.json();
    user.value = json.data;

    //lay thong tin nhan vat
    const characterRes = await fetch(`https://api.jikan.moe/v4/anime/${id}/characters`);
    const characterJson = await characterRes.json();
    characters.value = characterJson.data;
  })();
});


</script>

<template>

  <div v-if="user" class=" p-10 flex justify-center flex-col items-center ">

    <div class="containerz  w-full sm:w-[900px] h-full sm:h-[700px] flex flex-col sm:flex-row">
      
      <div class="left-container w-full sm:w-[400px] h-[400px] sm:h-full ">
        <div class="img-container  h-full">
          <img :src="user.images.jpg.large_image_url" :alt="user.title" class="w-full h-full object-cover">

        </div>
      </div>

      <div class="right-container w-full sm:w-[500px] sm:h-full p-5 ">

        <div class="">
          <h2 class="title "> {{ user.title }} </h2>
          <p class="pb-2">{{ user.duration }}</p>
          <ul class="flex gap-2">
            <li v-for="genre in user.genres" :key="genre.id">{{ genre.name }}</li>
          </ul>

          <ul>
            <li>Rating: {{ user.rating }}</li>
            <li>Score: {{ user.score }}</li>
            <li>Rank: {{ user.rank }}</li>
            <li>Season: {{ user.season }}</li>
          </ul>


        </div>

        <hr style="width: 70%; margin-top: 20px;">

        <h2 class="pt-2">SUMMARY</h2>

        <div class="movie-description pt-2 ">
          <p>{{ user.synopsis }}</p>
        </div>


        <div v-if="characters" class="flex pt-5">
          <div v-for="character in characters.slice(0, 3)" :key="character.mal_id" class="character-item w-full">
            <img :src="character.character.images.jpg.image_url" :alt="character.character.name"
              class="w-32 h-32 object-cover rounded" />
            <p >{{ character.character.name }}</p>
          </div>
        </div>

      </div>
    </div>

    <div v-if="user.trailer && user.trailer.embed_url" class="pt-5 w-full sm:w-[1000px]  ">
      <iframe :src="user.trailer.embed_url" width="100%" height="300" frameborder="0" allowfullscreen ></iframe>
    </div>


  </div>



</template>

<style scoped>
/* Fonts Import */
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700');
@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700,800,300italic,400italic,600italic,700italic,800italic');

/* Main container for the anime content */

.containerz {

  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.6);

}

.img-container {
  border-radius: 20px;
}

.img-container img {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);


}

.img-container img:hover {
  transform: scale(1.05);
}

.character-list {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-top: 16px;
}

.character-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
}

.character-item img {
  width: 64px;
  height: 64px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 6px;
   transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}


.character-item img:hover {
  transform: scale(1.05);
}


/* Title styling */
h2.title {
  font-size: 28px;
  font-weight: 700;
  color: var(--accent-color);
  margin-bottom: 10px;
}

/* Genres list styling */
ul {
  list-style-type: none;
  padding: 0;
}

ul li {
  display: inline-block;
  background-color: rgba(254, 65, 65, 0.1);
  border: 1px solid rgba(254, 65, 65, 0.3);
  padding: 5px 5px;
  border-radius: 16px;
  font-size: 14px;
  font-weight: 500;
  color: var(--text-lighter);
  margin-right: 10px;
  margin-bottom: 5px;
}

/* Styling for ratings and other details */
ul li {
  font-size: 14px;
  color: var(--text-light);
}


/* Styling for the summary section */
.movie-description {
  font-size: 14px;
  line-height: 1.6;
  color: var(--text-light);
  text-align: justify;

}

.movie-description p {
  max-height: 200px;
  overflow-y: auto;
  display: block;
}

.movie-description p::-webkit-scrollbar {
  display: none;
}


/* Styling the section titles (Summary) */
h2.pt-2 {
  font-size: 24px;
  font-weight: 700;
  color: var(--accent-color);
}
</style>