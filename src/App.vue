<script setup lang="ts">
import { ref } from 'vue';
import type { TimerState } from './types';

const timerState = ref<TimerState>('idle')
const intervalId = ref<ReturnType<typeof setInterval>>();
const restTime = ref(25 * 60)

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
</script>

<template>
  <header class="flex items-center gap-2">
    <img alt="Pomodoro Timer" src="./assets/tomato.png" width="30" height="30" />
    <div>
      ポモドーロタイマー with タスク
    </div>
  </header>
  <main>
    <div class="text-4xl text-center">
      {{ Math.floor(restTime / 60) }}:{{ String(restTime % 60).padStart(2, '0') }}
    </div>
    <div class="flex justify-center gap-4">
      <button v-if="timerState === 'idle'" @click="start" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        開始
      </button>
      <button v-if="timerState === 'running'" @click="pause" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
        一時停止
      </button>
      <button v-if="timerState === 'paused'" @click="start" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        再開
      </button>
    </div>
  </main>
</template>

<style scoped>
</style>
