import {describe, expect, it, vi} from 'vitest'
import {requestIdleCallbackPolyfill} from '../polyfill'

describe('requestIdleCallbackPolyfill', () => {
  it('calls callback with didTimeout=false when executed normally', async () => {
    vi.useFakeTimers()
    const cb = vi.fn()

    requestIdleCallbackPolyfill(cb)
    await vi.advanceTimersByTimeAsync(1)
    expect(cb).toHaveBeenCalledTimes(1)
    const arg = cb.mock.calls[0][0]

    expect(arg.didTimeout).toBe(false)
    expect(typeof arg.timeRemaining).toBe('function')
    expect(arg.timeRemaining()).toBeGreaterThanOrEqual(0)
    vi.useRealTimers()
  })

  it('calls callback with didTimeout=true when timeout fires first', async () => {
    vi.useFakeTimers()
    const cb = vi.fn()

    requestIdleCallbackPolyfill(cb, {timeout: 0})
    await vi.advanceTimersByTimeAsync(0)
    expect(cb).toHaveBeenCalledTimes(1)
    const arg = cb.mock.calls[0][0]

    expect(arg.didTimeout).toBe(true)
    expect(typeof arg.timeRemaining).toBe('function')
    vi.useRealTimers()
  })

  it('cancel function prevents execution', async () => {
    vi.useFakeTimers()
    const cb = vi.fn()

    const cancel = requestIdleCallbackPolyfill(cb, {timeout: 5})

    cancel()
    await vi.advanceTimersByTimeAsync(10)
    expect(cb).not.toHaveBeenCalled()
    vi.useRealTimers()
  })
})
