declare type NonEmptyArray<TItem> = readonly [TItem, ...TItem[]] | [TItem, ...TItem[]]

// eslint-disable-next-line @typescript-eslint/ban-types
declare type AnyClass = Function
