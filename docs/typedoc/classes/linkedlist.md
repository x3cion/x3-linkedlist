[x3-linkedlist](../README.md) / LinkedList

# Class: LinkedList<T\>

Implements a linked list structure

**`Typeparam`**

T - Type of values within this LinkedList

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Constructors

- [constructor](LinkedList.md#constructor)

### Properties

- [first](LinkedList.md#first)
- [last](LinkedList.md#last)
- [length](LinkedList.md#length)

### Methods

- [[iterator]](LinkedList.md#[iterator])
- [clear](LinkedList.md#clear)
- [concat](LinkedList.md#concat)
- [entries](LinkedList.md#entries)
- [every](LinkedList.md#every)
- [filter](LinkedList.md#filter)
- [find](LinkedList.md#find)
- [findItem](LinkedList.md#finditem)
- [forEach](LinkedList.md#foreach)
- [getItemByIndex](LinkedList.md#getitembyindex)
- [includes](LinkedList.md#includes)
- [itemOf](LinkedList.md#itemof)
- [join](LinkedList.md#join)
- [keys](LinkedList.md#keys)
- [lastItemOf](LinkedList.md#lastitemof)
- [map](LinkedList.md#map)
- [pop](LinkedList.md#pop)
- [push](LinkedList.md#push)
- [reduce](LinkedList.md#reduce)
- [reduceRight](LinkedList.md#reduceright)
- [remove](LinkedList.md#remove)
- [removeAllOccurrences](LinkedList.md#removealloccurrences)
- [shift](LinkedList.md#shift)
- [some](LinkedList.md#some)
- [unlinkCleanup](LinkedList.md#unlinkcleanup)
- [unshift](LinkedList.md#unshift)
- [values](LinkedList.md#values)

## Constructors

### constructor

• **new LinkedList**<`T`\>(`values?`)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `values?` | [`LinkedList`](LinkedList.md)<`T`\> \| `Iterable`<`T`\> | Values to be added initially into list |

## Properties

### first

• **first**: `undefined` \| [`LinkedListItem`](LinkedListItem.md)<`T`\>

First item in list

___

### last

• **last**: `undefined` \| [`LinkedListItem`](LinkedListItem.md)<`T`\>

Last item in list

___

### length

• **length**: `number` = `0`

Current length of this LinkedList.
Note that this does not work anymore if you for some reason add your own LinkedListItems to LinkedList by hand

## Methods

### [iterator]

▸ **[iterator]**(): `IterableIterator`<[[`LinkedListItem`](LinkedListItem.md)<`T`\>, `T`]\>

Returns LinkedListItem and value for every entry of this LinkedList

#### Returns

`IterableIterator`<[[`LinkedListItem`](LinkedListItem.md)<`T`\>, `T`]\>

___

### clear

▸ **clear**(`unchain?`): `void`

Clears this LinkedList.
The default complexity is O(1), because it only removes links to the first and last item and resets the length.
Note that if any LinkedListItem is still referenced outside the LinkedList, their before and behind fields might
still reference the chain, not freeing space.

You can set the unchain parameter to true, so every item in the linked list will be unchained,
meaning all references to before and behind items will be removed.
This increases complexity to O(n), but removes accidental outside references to the full chain.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `unchain` | `boolean` | `false` | If `true`, remove link info from every item. Changes complexity to O(n)! |

#### Returns

`void`

___

### concat

▸ **concat**<`V`\>(`...others`): [`LinkedList`](LinkedList.md)<`T` \| `V`\>

Concats given values and returns a new LinkedList with all given values.
If LinkedList's are given, they will be spread.

#### Type parameters

| Name |
| :------ |
| `V` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...others` | (`V` \| [`LinkedList`](LinkedList.md)<`V`\>)[] | Other values or lists to be concat'ed together |

#### Returns

[`LinkedList`](LinkedList.md)<`T` \| `V`\>

**`See`**

Array#concat

___

### entries

▸ **entries**(): `IterableIterator`<[[`LinkedListItem`](LinkedListItem.md)<`T`\>, `T`]\>

Returns LinkedListItem and value for every entry of this LinkedList

#### Returns

`IterableIterator`<[[`LinkedListItem`](LinkedListItem.md)<`T`\>, `T`]\>

**`See`**

LinkedList#Symbol.iterator

___

### every

▸ **every**<`C`\>(`callback`, `thisArg?`): `boolean`

As Array#every() given callback is called for every element until one call returns falsy or all elements had been processed

#### Type parameters

| Name |
| :------ |
| `C` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | (`value`: `T`, `item`: [`LinkedListItem`](LinkedListItem.md)<`T`\>, `list`: [`LinkedList`](LinkedList.md)<`T`\>) => `boolean` | Runs for every item in the LinkedList |
| `thisArg?` | `C` | If given, callback function will be bound to thisArg |

#### Returns

`boolean`

`false` if there was a falsy response from the callback, `true` if all elements have been processed "falselesly"

**`See`**

Array#every

___

### filter

▸ **filter**<`C`\>(`callback`, `thisArg?`): [`LinkedList`](LinkedList.md)<`T`\>

Filters values into a new LinkedList

#### Type parameters

| Name |
| :------ |
| `C` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | (`value`: `T`, `item`: [`LinkedListItem`](LinkedListItem.md)<`T`\>, `list`: [`LinkedList`](LinkedList.md)<`T`\>) => `boolean` | decides wether given element should be part of new LinkedList |
| `thisArg?` | `C` | If given, callback function will be bound to thisArg |

#### Returns

[`LinkedList`](LinkedList.md)<`T`\>

**`See`**

Array#filter

___

### find

▸ **find**<`C`\>(`callback`, `thisArg?`): `undefined` \| `T`

Returns value for which given callback returns truthy

#### Type parameters

| Name |
| :------ |
| `C` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | (`value`: `T`, `item`: [`LinkedListItem`](LinkedListItem.md)<`T`\>, `list`: [`LinkedList`](LinkedList.md)<`T`\>) => `boolean` | runs for every value in LinkedList. If it returns truthy, current value is returned. |
| `thisArg?` | `C` | If given, callback function will be bound to thisArg |

#### Returns

`undefined` \| `T`

**`See`**

Array#find

___

### findItem

▸ **findItem**<`C`\>(`callback`, `thisArg?`): `undefined` \| [`LinkedListItem`](LinkedListItem.md)<`T`\>

Returns the LinkedListItem for which given callback returns truthy

#### Type parameters

| Name |
| :------ |
| `C` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | (`value`: `T`, `item`: [`LinkedListItem`](LinkedListItem.md)<`T`\>, `list`: [`LinkedList`](LinkedList.md)<`T`\>) => `boolean` | runs for every LinkedListItem in LinkedList. If it returns truthy, current LinkedListItem is returned. |
| `thisArg?` | `C` | If given, callback function will be bound to thisArg |

#### Returns

`undefined` \| [`LinkedListItem`](LinkedListItem.md)<`T`\>

**`See`**

Array#findIndex

___

### forEach

▸ **forEach**<`C`\>(`callback`, `thisArg?`): `void`

Iterates this LinkedList's items and values

#### Type parameters

| Name |
| :------ |
| `C` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | (`value`: `T`, `item`: [`LinkedListItem`](LinkedListItem.md)<`T`\>, `list`: [`LinkedList`](LinkedList.md)<`T`\>) => `void` | Gets every value in LinkedList once with corresponding LinkedListItem and LinkedList |
| `thisArg?` | `C` | If given, callback function will be bound to thisArg |

#### Returns

`void`

**`See`**

Array#forEach

___

### getItemByIndex

▸ `Private` **getItemByIndex**(`index`): `undefined` \| [`LinkedListItem`](LinkedListItem.md)<`T`\>

Returns the item by given index.
Supports negative values and will return the item at `LinkedList.size - 1 + index` in that case.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | Index of item to get from list |

#### Returns

`undefined` \| [`LinkedListItem`](LinkedListItem.md)<`T`\>

___

### includes

▸ **includes**(`value`, `fromIndex?`): `boolean`

Checks if value can be found within LinkedList, starting from fromIndex, if given.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `value` | `T` | `undefined` | value to be found in this |
| `fromIndex` | `number` | `0` | Starting index. Supports negative values for which `this.size - 1 + fromIndex` will be used as starting point. |

#### Returns

`boolean`

true if value could be found in LinkedList (respecting fromIndex), false otherwhise

**`See`**

Array#includes

___

### itemOf

▸ **itemOf**(`searchedValue`, `fromIndex?`): `undefined` \| [`LinkedListItem`](LinkedListItem.md)<`T`\>

Searches forward for given value and returns the first corresponding LinkedListItem found

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `searchedValue` | `T` | `undefined` | Value to be found |
| `fromIndex` | `number` | `0` | Index to start from |

#### Returns

`undefined` \| [`LinkedListItem`](LinkedListItem.md)<`T`\>

**`See`**

Array#indexOf

___

### join

▸ **join**(`separator?`): `string`

Joins values within this by given separator. Uses Array#join directly.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `separator?` | `string` | separator between items in the resulting string |

#### Returns

`string`

**`See`**

Array#join

___

### keys

▸ **keys**(): `IterableIterator`<[`LinkedListItem`](LinkedListItem.md)<`T`\>\>

Iterates the LinkedListItem's of this LinkedList

#### Returns

`IterableIterator`<[`LinkedListItem`](LinkedListItem.md)<`T`\>\>

___

### lastItemOf

▸ **lastItemOf**(`searchedValue`, `fromIndex?`): `undefined` \| [`LinkedListItem`](LinkedListItem.md)<`T`\>

Searches backwards for given value and returns the first corresponding LinkedListItem found

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `searchedValue` | `T` | `undefined` | Value to be found |
| `fromIndex` | `number` | `-1` | Index to start from |

#### Returns

`undefined` \| [`LinkedListItem`](LinkedListItem.md)<`T`\>

**`See`**

Array#indexOf

___

### map

▸ **map**<`V`, `C`\>(`callback`, `thisArg?`): [`LinkedList`](LinkedList.md)<`V`\>

Creates a new LinkedList with each of its itesm representing the output of the callback with each item in current LinkedList.

#### Type parameters

| Name |
| :------ |
| `V` |
| `C` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | (`value`: `T`, `item`: [`LinkedListItem`](LinkedListItem.md)<`T`\>, `list`: [`LinkedList`](LinkedList.md)<`T`\>) => `V` | Gets value, LinkedListeItem and LinkedList. The response will be used as value in the new LinkedList |
| `thisArg?` | `C` | If given, callback function will be bound to thisArg |

#### Returns

[`LinkedList`](LinkedList.md)<`V`\>

**`See`**

Array#map

___

### pop

▸ **pop**(): `undefined` \| `T`

Removes the last LinkedListItem and returns its inner value

#### Returns

`undefined` \| `T`

___

### push

▸ **push**(`...values`): `number`

Adds given values on the end of this LinkedList

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...values` | `T`[] | Values to be added |

#### Returns

`number`

___

### reduce

▸ **reduce**<`V`\>(`callback`): `V`

From Array#reduce on MDN: The reduce() method executes a reducer function (that you provide) on each element of the LinkedList,
resulting in a single output value.

#### Type parameters

| Name |
| :------ |
| `V` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | (`accumulator`: `T`, `currentValue`: `T`, `currentItem`: [`LinkedListItem`](LinkedListItem.md)<`T`\>, `list`: [`LinkedList`](LinkedList.md)<`T`\>) => `V` | Gets first value, current value (starting with the second value), LinkedListeItem and LinkedList. Note that currentItem will be the second item on first call. The response will be used as the next accumulator. |

#### Returns

`V`

**`See`**

Array#reduce

▸ **reduce**<`V`\>(`callback`, `initialValue`): `V`

#### Type parameters

| Name |
| :------ |
| `V` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | (`accumulator`: `V`, `currentValue`: `T`, `currentItem`: [`LinkedListItem`](LinkedListItem.md)<`T`\>, `list`: [`LinkedList`](LinkedList.md)<`T`\>) => `V` | Gets initialValue as accumulator initially, LinkedListeItem and LinkedList. The response will be used as the next accumulator. |
| `initialValue` | `V` | Value for the first call of callback |

#### Returns

`V`

___

### reduceRight

▸ **reduceRight**<`V`\>(`callback`): `V`

From Array#reduceRight on MDN: The reduceRight() method applies a function against an accumulator and each value of the LinkedList (from last-to-first)
to reduce it to a single value.

#### Type parameters

| Name |
| :------ |
| `V` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | (`accumulator`: `T`, `currentValue`: `T`, `currentItem`: [`LinkedListItem`](LinkedListItem.md)<`T`\>, `list`: [`LinkedList`](LinkedList.md)<`T`\>) => `V` | Gets the last value, current value (starting with the second-to-last value), LinkedListeItem and LinkedList. Note that currentItem will be the second-to-last item on the first call. The response will be used as the next accumulator. |

#### Returns

`V`

**`See`**

 - Array#reduceRight
 - LinkedList#reduce

▸ **reduceRight**<`V`\>(`callback`, `initialValue`): `V`

#### Type parameters

| Name |
| :------ |
| `V` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | (`accumulator`: `V`, `currentValue`: `T`, `currentItem`: [`LinkedListItem`](LinkedListItem.md)<`T`\>, `list`: [`LinkedList`](LinkedList.md)<`T`\>) => `V` | Gets initialValue as accumulator initially, LinkedListeItem and LinkedList. The response will be used as the next accumulator. |
| `initialValue` | `V` | Value for the first call of callback |

#### Returns

`V`

___

### remove

▸ **remove**(`value`): `boolean`

Removes first occurrence of value found.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `T` | value to remove once |

#### Returns

`boolean`

___

### removeAllOccurrences

▸ **removeAllOccurrences**(`value`): `boolean`

Removes every occurrance of value within this.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `T` | value to remove completely |

#### Returns

`boolean`

___

### shift

▸ **shift**(): `undefined` \| `T`

Returns and removes first element from LinkedList

#### Returns

`undefined` \| `T`

___

### some

▸ **some**<`C`\>(`callback`, `thisArg?`): `boolean`

Runs callback for every entry and returns true immediately if call of callback returns truthy.

#### Type parameters

| Name |
| :------ |
| `C` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | (`currentValue`: `T`, `item`: [`LinkedListItem`](LinkedListItem.md)<`T`\>, `list`: [`LinkedList`](LinkedList.md)<`T`\>) => `boolean` | called for every element. If response is truthy, this currentvalue will be returned by `.some()`. |
| `thisArg?` | `C` | If given, callback function will be bound to thisArg |

#### Returns

`boolean`

`true` once a callback call returns truthy, `false` if none returned truthy.

___

### unlinkCleanup

▸ `Private` **unlinkCleanup**(`item`): `void`

Given to own LinkedListItem's for following jobs regarding an unlink:
- If item is first item, set the next item as first item
- If item is last item, set the previous item as last item
- Decrease length

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `item` | [`LinkedListItem`](LinkedListItem.md)<`T`\> | Item that has been unlinked |

#### Returns

`void`

___

### unshift

▸ **unshift**(`...values`): `number`

Adds given values to the beginning of this LinkedList

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...values` | `T`[] | Values to be added |

#### Returns

`number`

___

### values

▸ **values**(): `IterableIterator`<`T`\>

Returns a value for every entry of this LinkedList

#### Returns

`IterableIterator`<`T`\>
