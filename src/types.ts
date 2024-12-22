export type TimerState = 'idle' | 'running' | 'paused'

export type Task = {
  id: number
  content: string
  pomodoroCount: number
  isCompleted: boolean
}
