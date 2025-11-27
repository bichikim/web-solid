import {describe, expect, it, vi} from 'vitest'
import {setTimeoutPromise} from '../'

describe('set-timeout-promise', () => {
  it('should return a timeout promise', async () => {
    vi.useFakeTimers()
    let end = false

    setTimeoutPromise(1000).then(() => {
      end = true
    })
    expect(end).toBe(false)
    await vi.advanceTimersByTimeAsync(500)
    expect(end).toBe(false)
    await vi.advanceTimersByTimeAsync(550)
    expect(end).toBe(true)
    vi.useRealTimers()
  })
})
