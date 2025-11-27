import {createUseWait} from 'src/wait'
import {debounce, DebouncedFunction} from 'es-toolkit/function'

export const useDebounce = createUseWait(() => {
  let flag: undefined | DebouncedFunction<(...args: any) => any>

  return {
    cancel: () => {
      flag?.cancel()
    },
    create: (callback, wait, options) => {
      flag = debounce(
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
