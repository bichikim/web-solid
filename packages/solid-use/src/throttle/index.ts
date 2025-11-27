import {throttle, ThrottledFunction} from 'es-toolkit/function'
import {createUseWait} from 'src/wait'

export const useThrottle = createUseWait(() => {
  let flag: undefined | ThrottledFunction<(...args: any) => any>

  return {
    cancel: () => {
      flag?.cancel()
    },
    create: (callback, wait, options) => {
      flag = throttle(
        (...args) => {
          callback(...args)
        },
        wait,
        options,
      )
    },
    execute: (args) => {
      flag?.(...args)
    },
    flush: () => {
      flag?.flush()
    },
  }
})
