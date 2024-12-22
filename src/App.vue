<script setup lang="ts">
import { onUnmounted, ref } from 'vue'
import type { TimerState } from './types'

const timerState = ref<TimerState>('idle')
const intervalId = ref<ReturnType<typeof setInterval>>()
const restTime = ref(25 * 60)
const pomodoroCount = ref(6)
const pomodoroLeft = ref(5)
const currentTaskPomodoroCount = ref(2)
const currentTaskPomodoroLeft = ref(1)
const currentTask = ref('タイマー部分をざっくり実装する')

const start = () => {
  timerState.value = 'running'
  intervalId.value = setInterval(() => {
    restTime.value--
    if (restTime.value === 0) {
      clearInterval(intervalId.value)
      timerState.value = 'idle'
    }
  }, 1000)
}

const pause = () => {
  timerState.value = 'paused'
  clearInterval(intervalId.value)
}

onUnmounted(() => {
  clearInterval(intervalId.value)
})
</script>

<template>
  <header class="flex justify-end">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="size-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
      />
    </svg>
  </header>
  <main>
    <div class="flex">
      <div v-for="i in pomodoroCount - pomodoroLeft" :key="i">
        <img alt="Pomodoro Timer" src="./assets/tomato.png" width="30" height="30" />
      </div>
      <div v-for="i in pomodoroLeft" :key="i">
        <img
          alt="Pomodoro Timer"
          src="./assets/tomato.png"
          width="30"
          height="30"
          class="opacity-30"
        />
      </div>
    </div>
    <p>{{ currentTask }}</p>
    <P>作業完了まであと</P>
    <div class="text-6xl text-center">
      {{ Math.floor(restTime / 60) }}:{{ String(restTime % 60).padStart(2, '0') }}
    </div>
    <div class="flex justify-center gap-1">
      <div v-for="i in currentTaskPomodoroCount - currentTaskPomodoroLeft" :key="i">
        <img alt="Pomodoro Timer" src="./assets/tomato.png" width="30" height="30" />
      </div>
      <div v-for="i in currentTaskPomodoroLeft" :key="i">
        <img
          alt="Pomodoro Timer"
          src="./assets/tomato.png"
          width="30"
          height="30"
          class="opacity-30"
        />
      </div>
    </div>
    <div class="flex justify-center gap-4">
      <button
        v-if="timerState === 'idle'"
        @click="start"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        開始
      </button>
      <button
        v-if="timerState === 'running'"
        @click="pause"
        class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        一時停止
      </button>
      <button
        v-if="timerState === 'paused'"
        @click="start"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        再開
      </button>
    </div>
  </main>
</template>

<style scoped></style>
