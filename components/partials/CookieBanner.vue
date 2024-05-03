<template>
  <div
    v-if="!cookieAccepted"
    class="fixed top-0 bottom-0 right-0 left-0 w-full h-full bg-[#00000099] font-family-arial"
  >
    <!-- xl:h-1/3 -->
    <form
      v-for="(item, index) in content"
      v-if="content"
      class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 xl:w-1/3 p-8 gap-8 rounded shadow-lg border flex flex-col justify-between items-center bg-gray-50"
    >
      <div class="flex flex-col justify-start items-start gap-4">
        <h1
          class="text-gray-600 text-3xl xl:text-5xl flex flex-row justify-center items-center gap-2 w-full font-family-dancing"
        >
          <span>{{ item.title }}</span>
          <IconCookies class="w-8 xl:w-12 h-auto text-upgrade_yellow" />
        </h1>
        <p class="text-justify text-sm xl:text-xl text-gray-500 font-normal">
          {{ item.body.children[0].children[0].value }}
        </p>
        <div class="flex flex-row justify-start items-center gap-4">
          <input
            type="checkbox"
            :name="'terms' + index.toString()"
            :id="'terms' + index.toString()"
            class="transform scale-150 cursor-pointer"
            required
          />
          <label
            :for="'terms' + index.toString()"
            class="text-justify text-sm xl:text-xl text-gray-600 font-normal cursor-pointer"
            >{{ item.text_terms }}</label
          >
        </div>
      </div>
      <div class="flex flex-row justify-center items-center gap-4">
        <button
          type="submit"
          @click="acceptCookies"
          class="text-xs xl:text-xl text-gray-400 font-normal rounded-3xl px-8 py-2 border border-gray-300 hover:border-gray-400 hover:text-gray-500 cursor-pointer"
        >
          {{ item.button_accept }}
        </button>
        <button
          @click="declineCookies"
          class="text-xs xl:text-xl text-gray-400 font-normal rounded-3xl px-8 py-2 border border-gray-300 hover:border-gray-400 hover:text-gray-500 cursor-pointer"
        >
          {{ item.button_cancel }}
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import IconCookies from "@/components/icons/IconCookies.vue";

const router = useRouter();

const { data: content } = await useAsyncData("cookies", () => {
  if (router.currentRoute.value.fullPath.includes("/ge")) {
    return queryContent("/_partials/cookies/index.ge")
      .where({ _partial: true })
      .find();
  } else if (router.currentRoute.value.fullPath.includes("/hu")) {
    return queryContent("/_partials/cookies/index.hu")
      .where({ _partial: true })
      .find();
  } else {
    return queryContent("/_partials/cookies/index.en")
      .where({ _partial: true })
      .find();
  }
});

const cookieAccepted = ref(false);

const acceptCookies = () => {
  document.cookie =
    "cookieAccepted=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
  cookieAccepted.value = true;
};

const declineCookies = () => {
  document.cookie =
    "cookieAccepted=false; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
  cookieAccepted.value = true;
};

const checkCookie = () => {
  const cookies = document.cookie.split("; ");
  for (const cookie of cookies) {
    const [name, value] = cookie.split("=");
    if (name === "cookieAccepted") {
      cookieAccepted.value = value === "true";
      break;
    }
  }
};

onMounted(() => {
  checkCookie();
});
</script>
