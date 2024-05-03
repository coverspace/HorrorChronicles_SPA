<template>
  <div
    v-if="setModal"
    class="fixed top-0 bottom-0 right-0 left-0 w-full h-full bg-[#00000050] overflow-y-scroll z-10"
  >
    <button
      @click="$emit('cancel')"
      class="fixed top-8 xl:top-24 right-8 z-10 cursor-pointer"
    >
      <IconClose
        class="w-10 h-auto p-2 text-gray-500 border-2 border-gray-300 rounded-lg bg-slate-50 active:bg-slate-200 shadow-xl"
      />
    </button>

    <div
      class="absolute xl:top-20 left-1/2 transform -translate-x-1/2 w-full xl:w-1/3 h-full p-4"
    >
      <div
        class="flex flex-col justify-start items-start gap-4 w-full bg-gray-100 p-6 rounded-lg"
      >
        <div
          v-for="desc in desData"
          :key="desc"
          class="flex flex-col justify-center items-center gap-6 w-full"
        >
          <NuxtImg
            :src="desc.image"
            class="rounded-lg w-[350px] sm:w-[250px] shadow-xl"
          />
          <h1 class="text-base xl:text-3xl text-gray-600">
            {{ desc.element }}
          </h1>
          <p class="text-base xl:text-2xl text-justify text-gray-600">
            {{ desc.description }}
          </p>
        </div>
      </div>
      <hr class="border border-transparent mt-4 w-full" />
    </div>
  </div>
</template>

<script setup>
import IconClose from "@/components/icons/IconClose.vue";

const props = defineProps({
  setModal: {
    type: Boolean,
  },
  desData: {
    type: Array,
    default: () => [],
  },
});

const emit = defineEmits(["cancel"]);

const formatDescription = (description) => {
  const paragraphs = description.split("\n");
  return paragraphs.map((p) => `<p>${p}</p>`).join("<br>");
};
</script>
