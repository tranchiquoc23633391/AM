<template>
  <header class="p-8">
    <div class="flex justify-between items-center h-full">
      <nav class="flex items-center justify-center gap-3 text-2xl pl-5">
        <RouterLink to="/" class="pr-1">
          <img src="../img/shiggy.webp" alt="meomeo"
            class="img-1 min-w-[70px] w-[15vw] sm:w-[64px] md:w-[80px] h-auto object-contain imformation-img animate__animated animate__bounce" />
        </RouterLink>

        <RouterLink to="/" class="pr-1 text-[22px]">Home</RouterLink>
        <RouterLink to="/type" class="pr-1 text-[22px]">Type</RouterLink>
        <RouterLink to="/season" class="pr-1 text-[22px]">Season</RouterLink>
      </nav>

      <nav class="flex gap-4 text-2xl pl-7 pr-10 items-center options">
        <div class="iconSreach flex items-center">
          <font-awesome-icon :icon="['fas', 'magnifying-glass']" class="pr-[17px]" />

          <div class="form-control">
            <input type="text" required v-model="searchQuery" />
            <label>
              <span style="transition-delay:0ms">Y</span><span style="transition-delay:50ms">o</span><span
                style="transition-delay:100ms">u</span><span style="transition-delay:150ms">r</span><span
                style="transition-delay:200ms">A</span><span style="transition-delay:250ms">n</span><span
                style="transition-delay:300ms">i</span><span style="transition-delay:350ms">me</span>
            </label>
          </div>
        </div>

        <RouterLink to="/login" class="pr-1 text-[22px]">Login</RouterLink>
        <RouterLink to="/register" class="text-[22px]">Register</RouterLink>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { useAnimeStore } from '@/stores/animeStore.js'
import { storeToRefs } from 'pinia'

// Dùng store
const animeStore = useAnimeStore()
const { searchQuery } = storeToRefs(animeStore)
</script>
