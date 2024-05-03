<template>
  <footer
    v-for="item in content"
    v-if="content"
    class="flex flex-col lg:flex-row justify-between items-center w-full mx-auto font-family-arial border-t-2 border-gray-400 py-8"
  >
    <!-- <b>{{ langGlobal }}</b> -->
    <h1 class="text-gray-500 text-center lg:text-left w-full">
      {{ item.brand }}
      &copy;
      {{ currentYear }}
      {{ item.body.children[0].children[0].value }}
      <a :href="item.link" class="text-upgrade_gold font-semibold">
        {{ item.title }}</a
      >
    </h1>
    <div
      class="flex flex-col lg:flex-row lg:justify-end items-center gap-4 lg:gap-8 w-full"
    >
      <a
        v-for="(button, index) in item.footer_buttons"
        :key="index"
        :href="button.link"
        class="mx-2 lg:mx-0 my-1 lg:my-0 whitespace-nowrap text-sm lg:text-base text-gray-500 font-semibold hover:text-upgrade_gold"
      >
        {{ button.title }}</a
      >
    </div>
  </footer>
</template>

<script setup>
const currentYear = ref(new Date().getFullYear());
const langGlobal = useState("langGlobalState");
const router = useRouter();

const { data: content } = useAsyncData("footer", () => {
  // let currentLangCode = langGlobal.value.substring(1);
  // return queryContent("/_partials/footer/index." + currentLangCode)
  //   .where({ _partial: true })
  //   .find();

  if (router.currentRoute.value.fullPath.includes("/ge")) {
    return queryContent("/_partials/footer/index.ge")
      .where({ _partial: true })
      .find();
  } else if (router.currentRoute.value.fullPath.includes("/hu")) {
    return queryContent("/_partials/footer/index.hu")
      .where({ _partial: true })
      .find();
  } else {
    return queryContent("/_partials/footer/index.en")
      .where({ _partial: true })
      .find();
  }
});
</script>
