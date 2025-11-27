import {describe, expectTypeOf, it} from 'vitest'
import {ArrayLength, ClassFunction, DropParameters} from '../'

describe('language', () => {
  describe('DropParameters', () => {
    it('should drop one item from an array tuple type', () => {
      // noinspection JSUnusedLocalSymbols
      const typeTest = <Func extends (...args: any[]) => any>(_: Func): DropParameters<Func> => {
        return 'foo' as any
      }

      // noinspection JSUnusedLocalSymbols
      expectTypeOf(typeTest((_: string, __: number) => 'foo')).toEqualTypeOf<[number]>()
    })
  })

  describe('ArrayLength', () => {
    it('should type array length', () => {
      const foo: [number, number] = [1, 2]

      const typeTest = <List extends unknown[]>(args: List): ArrayLength<List> => {
        return args as any
      }

      expectTypeOf(typeTest(foo)).toEqualTypeOf<2>()
    })
  })

  describe('ClassFunction', () => {
    it('should type class function', () => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
      const foo: Function = 'foo' as any

      expectTypeOf(foo).toEqualTypeOf<ClassFunction>()
    })
  })
})
