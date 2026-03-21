<script setup lang="ts">
import heroImg from './assets/hero.png'
</script>

<template>
  <div class="bg-black text-primary-dark">
    <div class="w-full bg-linear-to-b min-h-screen flex justify-center">
      <div class="max-w-4xl w-full justify-center flex flex-col">
        <img
          :src="heroImg"
          alt="Wowell World"
        >

        <div class="w-full flex flex-col items-center">
          <h2 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            est. 2022
          </h2>

          <ul class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-10 space-y-4 md:space-y-10 lg:space-y-14 text-center text-white md:mt-16 lg:mt-20">
            <li>
              <a
                href="https://movies.wowellworld.com"
                class="hover:border-b-2 border-b-primary-light text-primary-light"
              >
                Movies
              </a>
            </li>
            <li>
              <a
                href="https://games.wowellworld.com"
                class="hover:border-b-2 border-b-primary-light text-primary-light"
              >
                Games
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
