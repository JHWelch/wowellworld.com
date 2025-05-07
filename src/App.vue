<script setup lang="ts">
</script>

<template>
  <div class="bg-black font-horizon text-lavender-haze">
    <div class="w-full bg-linear-to-b from-black to-wowpurp min-h-screen flex justify-center">
      <div class="max-w-4xl w-full">
        <h1 class="sr-only">
          Wowell World
        </h1>

        <div>
          <svg
            class="text-[33px] leading-[2.5rem]"
            viewBox="0 0 500 200"
          >
            <path
              id="curve"
              fill="transparent"
              d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97"
            />
            <text
              stroke="currentColor"
              fill="currentColor"
              width="100%"
            >
              <textPath xlink:href="#curve">
                Wowell World
              </textPath>
            </text>
          </svg>
        </div>

        <div class="-mt-10 w-full flex flex-col items-center">
          <h2 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            EST 2022
          </h2>

          <ul class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-10 space-y-6 md:space-y-10 lg:space-y-14 text-center text-white md:mt-16 lg:mt-20">
            <li>
              <a
                href="https://movies.wowellworld.com"
                class="hover:border-b-2 border-b-lavender-haze"
              >
                Movies
              </a>
            </li>
            <li>
              <a
                href="https://games.wowellworld.com"
                class="hover:border-b-2 border-b-lavender-haze"
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
