<template>
  <header class="p-8">
    <div class="flex justify-between items-center h-full">


      <nav class="flex items-center justify-center gap-2 sm:gap-3 text-lg sm:text-2xl pl-2 sm:pl-5">
        <RouterLink to="/" class="pr-1">
          <img src="../img/shiggy.webp" alt="meomeo"
            class="img-1 min-w-[50px] w-[14vw] sm:w-[64px] md:w-[80px] h-auto object-contain imformation-img animate__animated animate__bounce" />
        </RouterLink>

        <div class="flex gap-2">
          <RouterLink to="/" class="pr-1 text-[12px] sm:text-[22px]">Home</RouterLink>
          <RouterLink to="/type" class="pr-1 text-[12px] sm:text-[22px]">Type</RouterLink>
          <RouterLink to="/season" class="pr-1 text-[12px] sm:text-[22px]">Season</RouterLink>
          <RouterLink to="/characters" class="pr-1 text-[12px] sm:text-[22px]">Characters</RouterLink>
        </div>
      </nav>


      <nav class="flex gap-2 sm:gap-4 text-lg sm:text-2xl pl-2 sm:pl-7 pr-2 sm:pr-10 items-center options ">
        <div class="iconSreach flex items-center">
          <font-awesome-icon :icon="['fas', 'magnifying-glass']" class="pr-[10px] sm:pr-[17px]" />
          <div class="form-control">
            <input type="text" required v-model="searchQuery" class="w-[100px] sm:w-[140px] text-sm sm:text-base" />
            <label>

              <span class="txt-input" style="transition-delay:200ms">A</span>
              <span class="txt-input" style="transition-delay:250ms">n</span>
              <span class="txt-input" style="transition-delay:300ms">i</span>
              <span class="txt-input" style="transition-delay:350ms">me</span>
              <span class="txt-input" style="transition-delay:350ms">/</span>
              <span class="txt-input" style="transition-delay:350ms">Char</span>
            </label>
          </div>

        </div>

        <div class="login">
          <RouterLink to="/login" class="pr-1 text-[16px] sm:text-[22px]">Login</RouterLink>
          <RouterLink to="/register" class="text-[16px] sm:text-[22px]">Register</RouterLink>
        </div>
      </nav>

    </div>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { useAnimeStore } from '@/stores/animeStore.js'
import { storeToRefs } from 'pinia'
import { ref, onMounted } from 'vue';
// Dùng store
const animeStore = useAnimeStore()
const { searchQuery } = storeToRefs(animeStore)


</script>

<style scoped>
@media (max-width: 800px) {
  .txt-input {
    display: none !important;
  }
}

@media (max-width: 800px) {
  .txt-input {
    display: none !important;
  }

  .form-control input {
    width: 80px !important;
    /* Hoặc ngắn hơn tuỳ ý */
  }
}

@media (max-width: 800px) {
  .login {
    display: none !important;
  }
}
</style>