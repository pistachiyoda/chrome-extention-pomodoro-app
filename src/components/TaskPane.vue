<script setup lang="ts">
const isPaneOpen = defineModel({
  type: Boolean,
  required: true,
})
const closeTaskWindow = () => {
  isPaneOpen.value = false
}
</script>
<template>
  <div class="fixed inset-0 bg-[rgba(0,0,0,0.5)]">
    <div class="fixed right-0 top-0 w-[300px] h-full bg-white z-10">
      <header class="">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
          @click="closeTaskWindow"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      </header>
    </div>
  </div>
</template>
