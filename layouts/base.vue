<template>
  <div class="">
    <header class="xl:sticky xl:top-0 xl:z-10">
      <!-- <slot name="navigation">
        <AppNavigation :navigation-tree="navigation" />
      </slot> -->
    </header>
    <section class="container mx-auto">
      <slot />
    </section>
    <!-- <footer class="lg:container mx-auto">
      <AppFooter />
    </footer> -->
    <!-- <ScrollToTopButton /> -->
    <!-- <CookieBanner /> -->
  </div>
</template>

<script setup>
import ScrollToTopButton from "@/components/partials/ScrollToTopButton.vue";
import CookieBanner from "@/components/partials/CookieBanner.vue";

const route = useRoute();
const { data: navigation } = await useAsyncData("navigation", () => {
  return fetchContentNavigation();
});
</script>
