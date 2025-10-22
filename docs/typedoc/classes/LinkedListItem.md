[**x3-linkedlist**](../README.md)

***

[x3-linkedlist](../README.md) / LinkedListItem

# Class: LinkedListItem\<T\>

Represents an Item within LinkedList.
An item holds a value and the links to other LinkedListItem's
LinkedListItem's can only be attached behind.
Theirfor, to add one before, before has to add one behind.

## Typeparam

T - Type of the vaulue in this LinkedListItem

## Type Parameters

### T

`T`

## Constructors

### Constructor

> **new LinkedListItem**\<`T`\>(`value`, `unlinkCleanup?`): `LinkedListItem`\<`T`\>

#### Parameters

##### value

`T`

Value of this item

##### unlinkCleanup?

(`item`) => `void`

Function to run on unlink() call. Usually used by LinkedList to fix first and last pointers and reduce length.

#### Returns

`LinkedListItem`\<`T`\>

## Properties

### before

> **before**: `LinkedListItem`\<`T`\> \| `undefined`

Item before this item
```
A -> ThisItem -> C
^
```

***

### behind

> **behind**: `LinkedListItem`\<`T`\> \| `undefined`

Item behind this item
```
A -> ThisItem -> C
                 ^
```

***

### unlinkCleanup()?

> `protected` `optional` **unlinkCleanup**: (`item`) => `void`

Function to run on unlink() call. Usually used by LinkedList to fix first and last pointers and reduce length.

#### Parameters

##### item

`LinkedListItem`\<`T`\>

#### Returns

`void`

***

### value

> **value**: `T`

Value of this item

## Methods

### insertBefore()

> `protected` **insertBefore**(`before`): `void`

Item given will be inserted before this item.
unlinkCleanup will be copied if neccessary.
This function is protected, because LinkedListItem's can only be attached behind.

#### Parameters

##### before

`LinkedListItem`\<`T`\>

LinkListItem to be inserted before this one

#### Returns

`void`

#### See

insertBehind

***

### insertBehind()

> **insertBehind**(`item`): `void`

This will link given LinkListItem behind this item.
If there's already a LinkedListItem linked behind, it will be relinked accordingly

#### Parameters

##### item

`LinkedListItem`\<`T`\>

LinkListItem to be inserted behind this one

#### Returns

`void`

***

### unlink()

> **unlink**(`unchain`): `void`

Unlinks this LinkedListItem and calls unlinkCleanup

#### Parameters

##### unchain

`boolean` = `false`

If true, additionally removes the reference to the item before and behind

#### Returns

`void`

#### See

LinkedListItem#unlinkCleanup
