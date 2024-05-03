<template>
  <button
    @click="scrollToTop"
    v-show="showButton"
    title="Lap tetejére"
    class="fixed bottom-5 right-0 z-10 p-2 rounded-l-lg border border-r-0 border-gray-300 bg-gray-100"
  >
    <IconUp class="w-5 h-auto text-gray-400 hover:text-upgrade_lightgreen" />
  </button>
</template>

<script lang="ts" setup>
import IconUp from "@/components/icons/IconUp.vue";
const showButton = ref(false);
const topValue = ref<number>(0);

const scrollToTop = () => {
  window.scrollTo({
    top: topValue.value,
    behavior: "smooth",
  });
};

const handleScroll = () => {
  showButton.value = window.scrollY > 100;
};

watch(
  () => topValue.value,
  (newValue) => {
    if (newValue) {
      console.log("newValue", newValue);
    }
  }
);

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
