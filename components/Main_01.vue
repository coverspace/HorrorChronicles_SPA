<template>
  <div class="grid grid-cols-12 mt-8 mb-32">
    <div class="col-span-12">
      <div class="flex flex-col justify-start items-center gap-8">
        <ContentDoc path="main/block_01.en" v-slot="{ doc }">
          <div
            class="flex flex-col justify-center items-center p-8 w-full uppercase font-family-big font-bold rounded bg-gradient-to-b from-[#CB414124] to-[#FF8D8D10]"
          >
            <h1 class="text-xl lg:text-5xl text-gray-300 text-center">
              {{ doc.game_title }}
            </h1>
          </div>

          <div
            class="flex flex-col justify-center items-center uppercase mx-4 lg:mx-auto font-bold rounded bg-gradient-to-b from-[#892929] to-[#7A323200]"
          >
            <ContentRenderer
              :value="doc"
              class="text-xl lg:text-2xl text-justify font-medium p-6"
            />
          </div>

          <div
            class="flex flex-col 2xl:flex-row justify-between items-center uppercase w-full gap-8 font-bold rounded"
          >
            <!-- <NuxtImg
              :src="doc.image_1"
              class="w-full h-fit border-2 border-red-700"
            /> -->

            <div
              class="relative overflow-hidden w-full h-[415px] border-2 border-red-700"
            >
              <iframe
                class="absolute top-0 right-0 left-0 bottom-0 w-full h-[415px]"
                src="https://www.youtube.com/embed/McFfO2hGv8Y?si=OvKWBm-PjXuZAHbl"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>

            <NuxtImg
              :src="doc.image_2"
              class="w-full h-fit border-2 border-red-700"
            />
          </div>

          <div
            class="flex flex-col justify-center items-center p-8 uppercase font-family-big w-full font-bold rounded bg-gradient-to-b from-[#CB414124] to-[#FF8D8D10]"
          >
            <h1 class="text-xl lg:text-5xl text-gray-300 text-center">
              {{ doc.text_1 }}
            </h1>
          </div>

          <div
            class="flex flex-col lg:flex-row justify-between items-start gap-8 w-full h-full"
          >
            <ul
              class="flex flex-col justify-center items-center gap-4 p-2 uppercase font-family-big font-bold rounded w-full"
            >
              <li
                v-for="item in doc.game_items"
                :key="item"
                class="flex flex-row justify-start lg:justify-end items-center gap-3 text-xl lg:text-2xl xl:text-4xl text-gray-300 text-right w-full"
              >
                <IconArrowRightItem class="w-10 h-auto text-red-700" />
                {{ item.item }}
              </li>
              <NuxtImg
                :src="doc.image_3"
                class="w-full h-fit border-2 border-red-700"
              />
            </ul>
            <div
              class="flex flex-col justify-between items-start gap-8 p-8 uppercase font-family-big font-bold rounded w-full h-full bg-gradient-to-b from-[#CB414124] to-[#FF8D8D10]"
            >
              <h1 class="text-2xl lg:text-5xl text-gray-300 text-center">
                {{ doc.text_1 }}
              </h1>
              <h1
                class="w-full text-2xl text-gray-300 text-center border-x border-red-700"
              >
                {{ doc.text_2 }}
              </h1>
              <div
                class="flex flex-col justify-start items-start gap-8 text-2xl text-gray-400 capitalize text-justify"
              >
                <p>{{ doc.desc_1 }}</p>
                <p>{{ doc.desc_2 }}</p>
              </div>
              <h1
                class="text-xl lg:text-2xl text-center font-bold p-6 border-x border-red-700 w-full"
              >
                {{ doc.desc_3 }}
              </h1>
            </div>
          </div>
          <div
            class="flex flex-col justify-start items-center uppercase font-bold w-full text-gray-300"
          >
            <h1 class="text-xl lg:text-2xl text-center font-bold p-6">
              {{ doc.desc_4 }}
            </h1>

            <!-- | -->
            <form
              method="POST"
              action="/.netlify/functions/sendMail"
              class="flex flex-col justify-center items-center shadow-xl rounded px-8 lg:px-0 mx-auto w-full"
            >
              <div
                class="flex flex-col lg:flex-row justify-start items-start w-full md:3/4 lg:w-2/4 xl:w-1/3 gap-6 lg:gap-0"
              >
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  :placeholder="doc.email_text"
                  minlength="3"
                  class="border bg-gray-100 w-full focus:outline-none focus:border-gray-400 py-2 px-2 lg:rounded-l text-gray-500 font-family-arial"
                />
                <button
                  type="submit"
                  class="text-base lg:text-xl text-upgrade_pink font-bold lg:rounded-r w-full lg:w-auto border border-gray-100 bg-red-700 hover:bg-red-800 px-8 py-2.5 lg:py-1.5 mx-auto lg:mx-0 cursor-pointer font-family-arial"
                >
                  {{ doc.email_button }}
                </button>
              </div>
            </form>
            <!-- | -->

            <p
              class="text-xl lg:text-2xl text-justify lg:text-center font-bold p-6"
            >
              {{ doc.desc_5 }}
            </p>
          </div>
        </ContentDoc>
      </div>
    </div>
  </div>
</template>

<script setup>
import IconArrowRightItem from "@/components/icons/IconArrowRightItem.vue";
// hola
</script>
