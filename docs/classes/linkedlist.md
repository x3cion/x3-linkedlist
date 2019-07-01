> **[x3-linkedlist](../README.md)**

[Globals](../globals.md) / [LinkedList](linkedlist.md) /

# Class: LinkedList <**T**>

Implements a linked list structure

## Type parameters

▪ **T**

Type of values within this LinkedList

## Hierarchy

* **LinkedList**

### Index

#### Constructors

* [constructor](linkedlist.md#constructor)

#### Properties

* [first](linkedlist.md#first)
* [last](linkedlist.md#last)
* [length](linkedlist.md#length)

#### Methods

* [__@iterator](linkedlist.md#__@iterator)
* [concat](linkedlist.md#concat)
* [entries](linkedlist.md#entries)
* [every](linkedlist.md#every)
* [filter](linkedlist.md#filter)
* [find](linkedlist.md#find)
* [findItem](linkedlist.md#finditem)
* [forEach](linkedlist.md#foreach)
* [getItemByIndex](linkedlist.md#private-getitembyindex)
* [includes](linkedlist.md#includes)
* [itemOf](linkedlist.md#itemof)
* [join](linkedlist.md#join)
* [keys](linkedlist.md#keys)
* [lastItemOf](linkedlist.md#lastitemof)
* [map](linkedlist.md#map)
* [pop](linkedlist.md#pop)
* [push](linkedlist.md#push)
* [reduce](linkedlist.md#reduce)
* [reduceRight](linkedlist.md#reduceright)
* [remove](linkedlist.md#remove)
* [removeAllOccurrences](linkedlist.md#removealloccurrences)
* [shift](linkedlist.md#shift)
* [some](linkedlist.md#some)
* [unlinkCleanup](linkedlist.md#private-unlinkcleanup)
* [unshift](linkedlist.md#unshift)
* [values](linkedlist.md#values)

## Constructors

###  constructor

\+ **new LinkedList**(`values?`: *`Iterable<T>` | [LinkedList](linkedlist.md)‹*any*›*): *[LinkedList](linkedlist.md)*

*Defined in [LinkedList.ts:15](https://github.com/x3cion/x3-linkedlist/blob/ef7de67/src/LinkedList.ts#L15)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`values?` | `Iterable<T>` \| [LinkedList](linkedlist.md)‹*any*› | Values to be added upfront into list  |

**Returns:** *[LinkedList](linkedlist.md)*

## Properties

###  first

• **first**: *[LinkedListItem](linkedlistitem.md)‹*`T`*› | undefined*

*Defined in [LinkedList.ts:11](https://github.com/x3cion/x3-linkedlist/blob/ef7de67/src/LinkedList.ts#L11)*

First item in list

___

###  last

• **last**: *[LinkedListItem](linkedlistitem.md)‹*`T`*› | undefined*

*Defined in [LinkedList.ts:15](https://github.com/x3cion/x3-linkedlist/blob/ef7de67/src/LinkedList.ts#L15)*

Last item in list

___

###  length

• **length**: *number* = 0

*Defined in [LinkedList.ts:333](https://github.com/x3cion/x3-linkedlist/blob/ef7de67/src/LinkedList.ts#L333)*

Current length of this LinkedList.
Note that this does not work anymore if you for some reason add your own LinkedListItems to LinkedList by hand

## Methods

###  __@iterator

▸ **__@iterator**(): *`IterableIterator<[LinkedListItem<T>, T]>`*

*Defined in [LinkedList.ts:426](https://github.com/x3cion/x3-linkedlist/blob/ef7de67/src/LinkedList.ts#L426)*

Returns LinkedListItem and value for every entry of this LinkedList

**Returns:** *`IterableIterator<[LinkedListItem<T>, T]>`*

___

###  concat

▸ **concat**<**V**>(...`others`: *`V` | [LinkedList](linkedlist.md)‹*`V`*›[]*): *[LinkedList](linkedlist.md)‹*`V` | `T`*›*

*Defined in [LinkedList.ts:318](https://github.com/x3cion/x3-linkedlist/blob/ef7de67/src/LinkedList.ts#L318)*

Concats given values and returns a new LinkedList with all given values.
If LinkedList's are given, they will be spread.

**`see`** Array#concat

**Type parameters:**

▪ **V**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...others` | `V` \| [LinkedList](linkedlist.md)‹*`V`*›[] | Other values or lists to be concat'ed together |

**Returns:** *[LinkedList](linkedlist.md)‹*`V` | `T`*›*

___

###  entries

▸ **entries**(): *`IterableIterator<[LinkedListItem<T>, T]>`*

*Defined in [LinkedList.ts:440](https://github.com/x3cion/x3-linkedlist/blob/ef7de67/src/LinkedList.ts#L440)*

Returns only values.
The "keys" in a LinkedList are actually the LinkedListItem's. I found them to be
dangerous enough to avoid returning them here.

**`see`** LinkedList#keys

**Returns:** *`IterableIterator<[LinkedListItem<T>, T]>`*

___

###  every

▸ **every**(`callback`: *function*, `thisArg?`: *any*): *boolean*

*Defined in [LinkedList.ts:78](https://github.com/x3cion/x3-linkedlist/blob/ef7de67/src/LinkedList.ts#L78)*

As Array#every() given callback is called for every element until one call returns falsy or all elements had been processed

**`see`** Array#every

**Parameters:**

▪ **callback**: *function*

▸ (`value`: *`T`*, `item`: *[LinkedListItem](linkedlistitem.md)‹*`T`*›*, `list`: *this*): *any*

**Parameters:**

Name | Type |
------ | ------ |
`value` | `T` |
`item` | [LinkedListItem](linkedlistitem.md)‹*`T`*› |
`list` | this |

▪`Optional`  **thisArg**: *any*

**Returns:** *boolean*

`false` if there was a falsy response from the callback, `true` if all elements have been processed "falselesly"

___

###  filter

▸ **filter**(`callback`: *function*, `thisArg?`: *any*): *[LinkedList](linkedlist.md)‹*`T`*›*

*Defined in [LinkedList.ts:94](https://github.com/x3cion/x3-linkedlist/blob/ef7de67/src/LinkedList.ts#L94)*

Filters values into a new LinkedList

**`see`** Array#filter

**Parameters:**

▪ **callback**: *function*

decides wether given element should be part of new LinkedList

▸ (`value`: *`T`*, `item`: *[LinkedListItem](linkedlistitem.md)‹*`T`*›*, `list`: *this*): *any*

**Parameters:**

Name | Type |
------ | ------ |
`value` | `T` |
`item` | [LinkedListItem](linkedlistitem.md)‹*`T`*› |
`list` | this |

▪`Optional`  **thisArg**: *any*

**Returns:** *[LinkedList](linkedlist.md)‹*`T`*›*

___

###  find

▸ **find**(`callback`: *function*, `thisArg?`: *any*): *`T` | undefined*

*Defined in [LinkedList.ts:111](https://github.com/x3cion/x3-linkedlist/blob/ef7de67/src/LinkedList.ts#L111)*

Returns value for which given callback returns truthy

**`see`** Array#find

**Parameters:**

▪ **callback**: *function*

runs for every value in LinkedList. If it returns truthy, current value is returned.

▸ (`value`: *`T`*, `item`: *[LinkedListItem](linkedlistitem.md)‹*`T`*›*, `list`: *this*): *any*

**Parameters:**

Name | Type |
------ | ------ |
`value` | `T` |
`item` | [LinkedListItem](linkedlistitem.md)‹*`T`*› |
`list` | this |

▪`Optional`  **thisArg**: *any*

**Returns:** *`T` | undefined*

___

###  findItem

▸ **findItem**(`callback`: *function*, `thisArg?`: *any*): *[LinkedListItem](linkedlistitem.md)‹*`T`*› | undefined*

*Defined in [LinkedList.ts:128](https://github.com/x3cion/x3-linkedlist/blob/ef7de67/src/LinkedList.ts#L128)*

Returns the LinkedListItem for which given callback returns truthy

**`see`** Array#findIndex

**Parameters:**

▪ **callback**: *function*

runs for every LinkedListItem in LinkedList. If it returns truthy, current LinkedListItem is returned.

▸ (`value`: *`T`*, `item`: *[LinkedListItem](linkedlistitem.md)‹*`T`*›*, `list`: *this*): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`value` | `T` |
`item` | [LinkedListItem](linkedlistitem.md)‹*`T`*› |
`list` | this |

▪`Optional`  **thisArg**: *any*

**Returns:** *[LinkedListItem](linkedlistitem.md)‹*`T`*› | undefined*

___

###  forEach

▸ **forEach**(`callback`: *function*, `thisArg?`: *any*): *void*

*Defined in [LinkedList.ts:146](https://github.com/x3cion/x3-linkedlist/blob/ef7de67/src/LinkedList.ts#L146)*

Iterates this LinkedList's items and values

**`see`** Array#forEach

**Parameters:**

▪ **callback**: *function*

Gets every value in LinkedList once with corresponding LinkedListItem and LinkedList

▸ (`value`: *`T`*, `item`: *[LinkedListItem](linkedlistitem.md)‹*`T`*›*, `list`: *this*): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | `T` |
`item` | [LinkedListItem](linkedlistitem.md)‹*`T`*› |
`list` | this |

▪`Optional`  **thisArg**: *any*

If given, callback will be bound here

**Returns:** *void*

___

### `Private` getItemByIndex

▸ **getItemByIndex**(`index`: *number*): *[LinkedListItem](linkedlistitem.md)‹*`T`*› | undefined*

*Defined in [LinkedList.ts:35](https://github.com/x3cion/x3-linkedlist/blob/ef7de67/src/LinkedList.ts#L35)*

Returns the item by given index.
Supports negative values and will return the item at `LinkedList.size - 1 + index` in that case.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`index` | number | Index of item to get from list  |

**Returns:** *[LinkedListItem](linkedlistitem.md)‹*`T`*› | undefined*

___

###  includes

▸ **includes**(`value`: *`T`*, `fromIndex`: *number*): *boolean*

*Defined in [LinkedList.ts:162](https://github.com/x3cion/x3-linkedlist/blob/ef7de67/src/LinkedList.ts#L162)*

Checks if value can be found within LinkedList, starting from fromIndex, if given.

**`see`** Array#includes

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`value` | `T` | - | value to be found in this |
`fromIndex` | number | 0 | Starting index. Supports negative values for which `this.size - 1 + fromIndex` will be used as starting point. |

**Returns:** *boolean*

true if value could be found in LinkedList (respecting fromIndex), false otherwhise

___

###  itemOf

▸ **itemOf**(`searchedValue`: *`T`*, `fromIndex`: *number*): *[LinkedListItem](linkedlistitem.md)‹*`T`*› | undefined*

*Defined in [LinkedList.ts:179](https://github.com/x3cion/x3-linkedlist/blob/ef7de67/src/LinkedList.ts#L179)*

Searches backwards for given value and returns the first corresponding LinkedListItem found

**`see`** Array#indexOf

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`searchedValue` | `T` | - | Value to be found |
`fromIndex` | number | 0 | Index to start from |

**Returns:** *[LinkedListItem](linkedlistitem.md)‹*`T`*› | undefined*

___

###  join

▸ **join**(`separator?`: *undefined | string*): *string*

*Defined in [LinkedList.ts:308](https://github.com/x3cion/x3-linkedlist/blob/ef7de67/src/LinkedList.ts#L308)*

Joins values within this by given separator. Uses Array#join directly.

**`see`** Array#join

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`separator?` | undefined \| string | separator to be used |

**Returns:** *string*

___

###  keys

▸ **keys**(): *`IterableIterator<LinkedListItem<T>>`*

*Defined in [LinkedList.ts:447](https://github.com/x3cion/x3-linkedlist/blob/ef7de67/src/LinkedList.ts#L447)*

Iterates the LinkedListItem's of this LinkedList

**Returns:** *`IterableIterator<LinkedListItem<T>>`*

___

###  lastItemOf

▸ **lastItemOf**(`searchedValue`: *`T`*, `fromIndex`: *number*): *[LinkedListItem](linkedlistitem.md)‹*`T`*› | undefined*

*Defined in [LinkedList.ts:195](https://github.com/x3cion/x3-linkedlist/blob/ef7de67/src/LinkedList.ts#L195)*

Searches backwards for given value and returns the first corresponding LinkedListItem found

**`see`** Array#indexOf

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`searchedValue` | `T` | - | Value to be found |
`fromIndex` | number |  -1 | Index to start from |

**Returns:** *[LinkedListItem](linkedlistitem.md)‹*`T`*› | undefined*

___

###  map

▸ **map**<**V**>(`callback`: *function*, `thisArg?`: *any*): *[LinkedList](linkedlist.md)‹*`V`*›*

*Defined in [LinkedList.ts:211](https://github.com/x3cion/x3-linkedlist/blob/ef7de67/src/LinkedList.ts#L211)*

Creates a new LinkedList with each of its itesm representing the output of the callback with each item in current LinkedList.

**`see`** Array#map

**Type parameters:**

▪ **V**

**Parameters:**

▪ **callback**: *function*

Gets value, LinkedListeItem and LinkedList. The response will be used as value in the new LinkedList

▸ (`value`: *`T`*, `item`: *[LinkedListItem](linkedlistitem.md)‹*`T`*›*, `list`: *this*): *`V`*

**Parameters:**

Name | Type |
------ | ------ |
`value` | `T` |
`item` | [LinkedListItem](linkedlistitem.md)‹*`T`*› |
`list` | this |

▪`Optional`  **thisArg**: *any*

If given, callback is bound to thisArg

**Returns:** *[LinkedList](linkedlist.md)‹*`V`*›*

___

###  pop

▸ **pop**(): *`T` | undefined*

*Defined in [LinkedList.ts:338](https://github.com/x3cion/x3-linkedlist/blob/ef7de67/src/LinkedList.ts#L338)*

Removes the last LinkedListItem and returns its inner value

**Returns:** *`T` | undefined*

___

###  push

▸ **push**(...`values`: *`T`[]*): *void*

*Defined in [LinkedList.ts:350](https://github.com/x3cion/x3-linkedlist/blob/ef7de67/src/LinkedList.ts#L350)*

Adds given values on the end of this LinkedList

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...values` | `T`[] | Values to be added  |

**Returns:** *void*

___

###  reduce

▸ **reduce**<**V**>(`callback`: *function*): *`V`*

*Defined in [LinkedList.ts:229](https://github.com/x3cion/x3-linkedlist/blob/ef7de67/src/LinkedList.ts#L229)*

From Array#reduce on MDN: The reduce() method executes a reducer function (that you provide) on each element of the LinkedList,
resulting in a single output value.

**`see`** Array#reduce

**Type parameters:**

▪ **V**

**Parameters:**

▪ **callback**: *function*

Gets accumulator, value, LinkedListeItem and LinkedList. The response will be used as the next accumulator

▸ (`accumulator`: *`T`*, `currentValue`: *`T`*, `currentItem`: *[LinkedListItem](linkedlistitem.md)‹*`T`*›*, `list`: *this*): *`V`*

**Parameters:**

Name | Type |
------ | ------ |
`accumulator` | `T` |
`currentValue` | `T` |
`currentItem` | [LinkedListItem](linkedlistitem.md)‹*`T`*› |
`list` | this |

**Returns:** *`V`*

▸ **reduce**<**V**>(`callback`: *function*, `initialValue`: *`V`*): *`V`*

*Defined in [LinkedList.ts:230](https://github.com/x3cion/x3-linkedlist/blob/ef7de67/src/LinkedList.ts#L230)*

**Type parameters:**

▪ **V**

**Parameters:**

▪ **callback**: *function*

▸ (`accumulator`: *`V`*, `currentValue`: *`T`*, `currentItem`: *[LinkedListItem](linkedlistitem.md)‹*`T`*›*, `list`: *this*): *`V`*

**Parameters:**

Name | Type |
------ | ------ |
`accumulator` | `V` |
`currentValue` | `T` |
`currentItem` | [LinkedListItem](linkedlistitem.md)‹*`T`*› |
`list` | this |

▪ **initialValue**: *`V`*

**Returns:** *`V`*

___

###  reduceRight

▸ **reduceRight**<**V**>(`callback`: *function*): *`V`*

*Defined in [LinkedList.ts:260](https://github.com/x3cion/x3-linkedlist/blob/ef7de67/src/LinkedList.ts#L260)*

From Array#reduce on MDN: The reduceRight() method applies a function against an accumulator and each value of the LinkedList (from last-to-first)
to reduce it to a single value.

**Type parameters:**

▪ **V**

**Parameters:**

▪ **callback**: *function*

Gets accumulator, value, LinkedListeItem and LinkedList. The response will be used as the next accumulator

▸ (`accumulator`: *`T`*, `currentValue`: *`T`*, `currentItem`: *[LinkedListItem](linkedlistitem.md)‹*`T`*›*, `list`: *this*): *`V`*

**Parameters:**

Name | Type |
------ | ------ |
`accumulator` | `T` |
`currentValue` | `T` |
`currentItem` | [LinkedListItem](linkedlistitem.md)‹*`T`*› |
`list` | this |

**Returns:** *`V`*

▸ **reduceRight**<**V**>(`callback`: *function*, `initialValue`: *`V`*): *`V`*

*Defined in [LinkedList.ts:261](https://github.com/x3cion/x3-linkedlist/blob/ef7de67/src/LinkedList.ts#L261)*

**Type parameters:**

▪ **V**

**Parameters:**

▪ **callback**: *function*

▸ (`accumulator`: *`V`*, `currentValue`: *`T`*, `currentItem`: *[LinkedListItem](linkedlistitem.md)‹*`T`*›*, `list`: *this*): *`V`*

**Parameters:**

Name | Type |
------ | ------ |
`accumulator` | `V` |
`currentValue` | `T` |
`currentItem` | [LinkedListItem](linkedlistitem.md)‹*`T`*› |
`list` | this |

▪ **initialValue**: *`V`*

**Returns:** *`V`*

___

###  remove

▸ **remove**(`value`: *`T`*): *boolean*

*Defined in [LinkedList.ts:384](https://github.com/x3cion/x3-linkedlist/blob/ef7de67/src/LinkedList.ts#L384)*

Removes first occurrence of value found.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | `T` | value to remove from LinkedList  |

**Returns:** *boolean*

___

###  removeAllOccurrences

▸ **removeAllOccurrences**(`value`: *`T`*): *boolean*

*Defined in [LinkedList.ts:399](https://github.com/x3cion/x3-linkedlist/blob/ef7de67/src/LinkedList.ts#L399)*

Removes every occurrance of value within this.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | `T` | value to remove from LinkedList  |

**Returns:** *boolean*

___

###  shift

▸ **shift**(): *`T` | undefined*

*Defined in [LinkedList.ts:415](https://github.com/x3cion/x3-linkedlist/blob/ef7de67/src/LinkedList.ts#L415)*

Returns and removes first element from LinkedList

**Returns:** *`T` | undefined*

___

###  some

▸ **some**(`callback`: *function*, `thisArg?`: *any*): *boolean*

*Defined in [LinkedList.ts:291](https://github.com/x3cion/x3-linkedlist/blob/ef7de67/src/LinkedList.ts#L291)*

Runs callback for every entry and returns true immediately if call of callback returns truthy.

**Parameters:**

▪ **callback**: *function*

called for every element. If response is truthy, iteration

▸ (`currentValue`: *`T`*, `item`: *[LinkedListItem](linkedlistitem.md)‹*`T`*›*, `list`: *this*): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`currentValue` | `T` |
`item` | [LinkedListItem](linkedlistitem.md)‹*`T`*› |
`list` | this |

▪`Optional`  **thisArg**: *any*

If set, callback is bound to this

**Returns:** *boolean*

`true` once a callback call returns truthy, `false` if none returned truthy.

___

### `Private` unlinkCleanup

▸ **unlinkCleanup**(`item`: *[LinkedListItem](linkedlistitem.md)‹*`T`*›*): *void*

*Defined in [LinkedList.ts:63](https://github.com/x3cion/x3-linkedlist/blob/ef7de67/src/LinkedList.ts#L63)*

Given to own LinkedListItem's for following jobs regarding an unlink:
- If item is first item, set the next item as first item
- If item is last item, set the previous item as last item
- Decrease length

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`item` | [LinkedListItem](linkedlistitem.md)‹*`T`*› | Item that has been unlinked  |

**Returns:** *void*

___

###  unshift

▸ **unshift**(...`values`: *`T`[]*): *void*

*Defined in [LinkedList.ts:367](https://github.com/x3cion/x3-linkedlist/blob/ef7de67/src/LinkedList.ts#L367)*

Adds given values to the beginning of this LinkedList

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...values` | `T`[] | Values to be added  |

**Returns:** *void*

___

###  values

▸ **values**(): *`IterableIterator<T>`*

*Defined in [LinkedList.ts:458](https://github.com/x3cion/x3-linkedlist/blob/ef7de67/src/LinkedList.ts#L458)*

Returns a value for every entry of this LinkedList

**Returns:** *`IterableIterator<T>`*