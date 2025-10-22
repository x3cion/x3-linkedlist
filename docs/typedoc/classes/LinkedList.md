[**x3-linkedlist**](../README.md)

***

[x3-linkedlist](../README.md) / LinkedList

# Class: LinkedList\<T\>

Implements a linked list structure

## Typeparam

T - Type of values within this LinkedList

## Type Parameters

### T

`T`

## Constructors

### Constructor

> **new LinkedList**\<`T`\>(`values?`): `LinkedList`\<`T`\>

#### Parameters

##### values?

Values to be added initially into list

`LinkedList`\<`T`\> | `Iterable`\<`T`, `any`, `any`\>

#### Returns

`LinkedList`\<`T`\>

## Properties

### first

> **first**: [`LinkedListItem`](LinkedListItem.md)\<`T`\> \| `undefined`

First item in list

***

### last

> **last**: [`LinkedListItem`](LinkedListItem.md)\<`T`\> \| `undefined`

Last item in list

***

### length

> **length**: `number` = `0`

Current length of this LinkedList.
Note that this does not work anymore if you for some reason add your own LinkedListItems to LinkedList by hand

## Methods

### \[iterator\]()

> **\[iterator\]**(): `IterableIterator`\<\[[`LinkedListItem`](LinkedListItem.md)\<`T`\>, `T`\]\>

Returns LinkedListItem and value for every entry of this LinkedList

#### Returns

`IterableIterator`\<\[[`LinkedListItem`](LinkedListItem.md)\<`T`\>, `T`\]\>

***

### clear()

> **clear**(`unchain`): `void`

Clears this LinkedList.
The default complexity is O(1), because it only removes links to the first and last item and resets the length.
Note that if any LinkedListItem is still referenced outside the LinkedList, their before and behind fields might
still reference the chain, not freeing space.

You can set the unchain parameter to true, so every item in the linked list will be unchained,
meaning all references to before and behind items will be removed.
This increases complexity to O(n), but removes accidental outside references to the full chain.

#### Parameters

##### unchain

`boolean` = `false`

If `true`, remove link info from every item. Changes complexity to O(n)!

#### Returns

`void`

***

### concat()

> **concat**\<`V`\>(...`others`): `LinkedList`\<`T` \| `V`\>

Concats given values and returns a new LinkedList with all given values.
If LinkedList's are given, they will be spread.

#### Type Parameters

##### V

`V`

#### Parameters

##### others

...(`V` \| `LinkedList`\<`V`\>)[]

Other values or lists to be concat'ed together

#### Returns

`LinkedList`\<`T` \| `V`\>

#### See

Array#concat

***

### entries()

> **entries**(): `IterableIterator`\<\[[`LinkedListItem`](LinkedListItem.md)\<`T`\>, `T`\]\>

Returns LinkedListItem and value for every entry of this LinkedList

#### Returns

`IterableIterator`\<\[[`LinkedListItem`](LinkedListItem.md)\<`T`\>, `T`\]\>

#### See

LinkedList#Symbol.iterator

***

### every()

> **every**\<`C`\>(`callback`, `thisArg?`): `boolean`

As Array#every() given callback is called for every element until one call returns falsy or all elements had been processed

#### Type Parameters

##### C

`C`

#### Parameters

##### callback

(`value`, `item`, `list`) => `boolean`

Runs for every item in the LinkedList

##### thisArg?

`C`

If given, callback function will be bound to thisArg

#### Returns

`boolean`

`false` if there was a falsy response from the callback, `true` if all elements have been processed "falselesly"

#### See

Array#every

***

### filter()

> **filter**\<`C`\>(`callback`, `thisArg?`): `LinkedList`\<`T`\>

Filters values into a new LinkedList

#### Type Parameters

##### C

`C`

#### Parameters

##### callback

(`value`, `item`, `list`) => `boolean`

decides wether given element should be part of new LinkedList

##### thisArg?

`C`

If given, callback function will be bound to thisArg

#### Returns

`LinkedList`\<`T`\>

#### See

Array#filter

***

### find()

> **find**\<`C`\>(`callback`, `thisArg?`): `T` \| `undefined`

Returns value for which given callback returns truthy

#### Type Parameters

##### C

`C`

#### Parameters

##### callback

(`value`, `item`, `list`) => `boolean`

runs for every value in LinkedList. If it returns truthy, current value is returned.

##### thisArg?

`C`

If given, callback function will be bound to thisArg

#### Returns

`T` \| `undefined`

#### See

Array#find

***

### findItem()

> **findItem**\<`C`\>(`callback`, `thisArg?`): [`LinkedListItem`](LinkedListItem.md)\<`T`\> \| `undefined`

Returns the LinkedListItem for which given callback returns truthy

#### Type Parameters

##### C

`C`

#### Parameters

##### callback

(`value`, `item`, `list`) => `boolean`

runs for every LinkedListItem in LinkedList. If it returns truthy, current LinkedListItem is returned.

##### thisArg?

`C`

If given, callback function will be bound to thisArg

#### Returns

[`LinkedListItem`](LinkedListItem.md)\<`T`\> \| `undefined`

#### See

Array#findIndex

***

### forEach()

> **forEach**\<`C`\>(`callback`, `thisArg?`): `void`

Iterates this LinkedList's items and values

#### Type Parameters

##### C

`C`

#### Parameters

##### callback

(`value`, `item`, `list`) => `void`

Gets every value in LinkedList once with corresponding LinkedListItem and LinkedList

##### thisArg?

`C`

If given, callback function will be bound to thisArg

#### Returns

`void`

#### See

Array#forEach

***

### includes()

> **includes**(`value`, `fromIndex`): `boolean`

Checks if value can be found within LinkedList, starting from fromIndex, if given.

#### Parameters

##### value

`T`

value to be found in this

##### fromIndex

`number` = `0`

Starting index. Supports negative values for which `this.size - 1 + fromIndex` will be used as starting point.

#### Returns

`boolean`

true if value could be found in LinkedList (respecting fromIndex), false otherwhise

#### See

Array#includes

***

### itemOf()

> **itemOf**(`searchedValue`, `fromIndex`): [`LinkedListItem`](LinkedListItem.md)\<`T`\> \| `undefined`

Searches forward for given value and returns the first corresponding LinkedListItem found

#### Parameters

##### searchedValue

`T`

Value to be found

##### fromIndex

`number` = `0`

Index to start from

#### Returns

[`LinkedListItem`](LinkedListItem.md)\<`T`\> \| `undefined`

#### See

Array#indexOf

***

### join()

> **join**(`separator?`): `string`

Joins values within this by given separator. Uses Array#join directly.

#### Parameters

##### separator?

`string`

separator between items in the resulting string

#### Returns

`string`

#### See

Array#join

***

### keys()

> **keys**(): `IterableIterator`\<[`LinkedListItem`](LinkedListItem.md)\<`T`\>\>

Iterates the LinkedListItem's of this LinkedList

#### Returns

`IterableIterator`\<[`LinkedListItem`](LinkedListItem.md)\<`T`\>\>

***

### lastItemOf()

> **lastItemOf**(`searchedValue`, `fromIndex`): [`LinkedListItem`](LinkedListItem.md)\<`T`\> \| `undefined`

Searches backwards for given value and returns the first corresponding LinkedListItem found

#### Parameters

##### searchedValue

`T`

Value to be found

##### fromIndex

`number` = `-1`

Index to start from

#### Returns

[`LinkedListItem`](LinkedListItem.md)\<`T`\> \| `undefined`

#### See

Array#indexOf

***

### map()

> **map**\<`V`, `C`\>(`callback`, `thisArg?`): `LinkedList`\<`V`\>

Creates a new LinkedList with each of its itesm representing the output of the callback with each item in current LinkedList.

#### Type Parameters

##### V

`V`

##### C

`C`

#### Parameters

##### callback

(`value`, `item`, `list`) => `V`

Gets value, LinkedListeItem and LinkedList. The response will be used as value in the new LinkedList

##### thisArg?

`C`

If given, callback function will be bound to thisArg

#### Returns

`LinkedList`\<`V`\>

#### See

Array#map

***

### pop()

> **pop**(): `T` \| `undefined`

Removes the last LinkedListItem and returns its inner value

#### Returns

`T` \| `undefined`

***

### push()

> **push**(...`values`): `number`

Adds given values on the end of this LinkedList

#### Parameters

##### values

...`T`[]

Values to be added

#### Returns

`number`

***

### reduce()

#### Call Signature

> **reduce**\<`V`\>(`callback`): `V`

From Array#reduce on MDN: The reduce() method executes a reducer function (that you provide) on each element of the LinkedList,
resulting in a single output value.

##### Type Parameters

###### V

`V`

##### Parameters

###### callback

(`accumulator`, `currentValue`, `currentItem`, `list`) => `V`

Gets first value, current value (starting with the second value), LinkedListeItem and LinkedList.
Note that currentItem will be the second item on first call.
The response will be used as the next accumulator.

##### Returns

`V`

##### See

Array#reduce

#### Call Signature

> **reduce**\<`V`\>(`callback`, `initialValue`): `V`

From Array#reduce on MDN: The reduce() method executes a reducer function (that you provide) on each element of the LinkedList,
resulting in a single output value.

##### Type Parameters

###### V

`V`

##### Parameters

###### callback

(`accumulator`, `currentValue`, `currentItem`, `list`) => `V`

Gets initialValue as accumulator initially, LinkedListeItem and LinkedList.
The response will be used as the next accumulator.

###### initialValue

`V`

Value for the first call of callback

##### Returns

`V`

##### See

Array#reduce

***

### reduceRight()

#### Call Signature

> **reduceRight**\<`V`\>(`callback`): `V`

From Array#reduceRight on MDN: The reduceRight() method applies a function against an accumulator and each value of the LinkedList (from last-to-first)
to reduce it to a single value.

##### Type Parameters

###### V

`V`

##### Parameters

###### callback

(`accumulator`, `currentValue`, `currentItem`, `list`) => `V`

Gets the last value, current value (starting with the second-to-last value), LinkedListeItem and LinkedList.
Note that currentItem will be the second-to-last item on the first call.
The response will be used as the next accumulator.

##### Returns

`V`

##### See

 - Array#reduceRight
 - LinkedList#reduce

#### Call Signature

> **reduceRight**\<`V`\>(`callback`, `initialValue`): `V`

From Array#reduceRight on MDN: The reduceRight() method applies a function against an accumulator and each value of the LinkedList (from last-to-first)
to reduce it to a single value.

##### Type Parameters

###### V

`V`

##### Parameters

###### callback

(`accumulator`, `currentValue`, `currentItem`, `list`) => `V`

Gets initialValue as accumulator initially, LinkedListeItem and LinkedList.
The response will be used as the next accumulator.

###### initialValue

`V`

Value for the first call of callback

##### Returns

`V`

##### See

 - Array#reduceRight
 - LinkedList#reduce

***

### remove()

> **remove**(`value`): `boolean`

Removes first occurrence of value found.

#### Parameters

##### value

`T`

value to remove once

#### Returns

`boolean`

***

### removeAllOccurrences()

> **removeAllOccurrences**(`value`): `boolean`

Removes every occurrance of value within this.

#### Parameters

##### value

`T`

value to remove completely

#### Returns

`boolean`

***

### shift()

> **shift**(): `T` \| `undefined`

Returns and removes first element from LinkedList

#### Returns

`T` \| `undefined`

***

### some()

> **some**\<`C`\>(`callback`, `thisArg?`): `boolean`

Runs callback for every entry and returns true immediately if call of callback returns truthy.

#### Type Parameters

##### C

`C`

#### Parameters

##### callback

(`currentValue`, `item`, `list`) => `boolean`

called for every element. If response is truthy, this currentvalue will be returned by `.some()`.

##### thisArg?

`C`

If given, callback function will be bound to thisArg

#### Returns

`boolean`

`true` once a callback call returns truthy, `false` if none returned truthy.

***

### unshift()

> **unshift**(...`values`): `number`

Adds given values to the beginning of this LinkedList

#### Parameters

##### values

...`T`[]

Values to be added

#### Returns

`number`

***

### values()

> **values**(): `IterableIterator`\<`T`\>

Returns a value for every entry of this LinkedList

#### Returns

`IterableIterator`\<`T`\>
