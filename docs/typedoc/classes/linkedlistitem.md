[x3-linkedlist](../README.md) › [Globals](../globals.md) › [LinkedListItem](linkedlistitem.md)

# Class: LinkedListItem <**T**>

Represents an Item within LinkedList
An item holds a value and the links to other LinkedListItem's
LinkedListItem's can only be attached behind.
Theirfor, to add one before, before has to add one behind.

## Type parameters

▪ **T**

## Hierarchy

* **LinkedListItem**

## Index

### Constructors

* [constructor](linkedlistitem.md#constructor)

### Properties

* [before](linkedlistitem.md#before)
* [behind](linkedlistitem.md#behind)
* [unlinkCleanup](linkedlistitem.md#protected-optional-unlinkcleanup)
* [value](linkedlistitem.md#value)

### Methods

* [insertBefore](linkedlistitem.md#protected-insertbefore)
* [insertBehind](linkedlistitem.md#insertbehind)
* [unlink](linkedlistitem.md#unlink)

## Constructors

###  constructor

\+ **new LinkedListItem**(`value`: T, `unlinkCleanup?`: undefined | function): *[LinkedListItem](linkedlistitem.md)*

*Defined in [LinkedListItem.ts:20](https://github.com/x3cion/x3-linkedlist/blob/bff069f/src/LinkedListItem.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |
`unlinkCleanup?` | undefined &#124; function |

**Returns:** *[LinkedListItem](linkedlistitem.md)*

## Properties

###  before

• **before**: *[LinkedListItem](linkedlistitem.md)‹T› | undefined*

*Defined in [LinkedListItem.ts:20](https://github.com/x3cion/x3-linkedlist/blob/bff069f/src/LinkedListItem.ts#L20)*

Item before this item
A -> ThisItem -> C
^

___

###  behind

• **behind**: *[LinkedListItem](linkedlistitem.md)‹T› | undefined*

*Defined in [LinkedListItem.ts:13](https://github.com/x3cion/x3-linkedlist/blob/bff069f/src/LinkedListItem.ts#L13)*

Item behind this item
A -> ThisItem -> C
                 ^

___

### `Protected` `Optional` unlinkCleanup

• **unlinkCleanup**? : *undefined | function*

*Defined in [LinkedListItem.ts:27](https://github.com/x3cion/x3-linkedlist/blob/bff069f/src/LinkedListItem.ts#L27)*

Called on unlink. Usually used by LinkedList to fix first and last pointers and reduce length.

___

###  value

• **value**: *T*

*Defined in [LinkedListItem.ts:23](https://github.com/x3cion/x3-linkedlist/blob/bff069f/src/LinkedListItem.ts#L23)*

## Methods

### `Protected` insertBefore

▸ **insertBefore**(`before`: [LinkedListItem](linkedlistitem.md)‹T›): *void*

*Defined in [LinkedListItem.ts:72](https://github.com/x3cion/x3-linkedlist/blob/bff069f/src/LinkedListItem.ts#L72)*

Item given will be inserted before this item.
unlinkCleanup will be copied if neccessary.
This function is protected, because LinkedListItem's can only be attached behind.

**`see`** insertBehind

**Parameters:**

Name | Type |
------ | ------ |
`before` | [LinkedListItem](linkedlistitem.md)‹T› |

**Returns:** *void*

___

###  insertBehind

▸ **insertBehind**(`item`: [LinkedListItem](linkedlistitem.md)‹T›): *void*

*Defined in [LinkedListItem.ts:35](https://github.com/x3cion/x3-linkedlist/blob/bff069f/src/LinkedListItem.ts#L35)*

This will link given LinkListItem behind this item.
If there's already a LinkedListItem linked behind, it will be relinked accordingly

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`item` | [LinkedListItem](linkedlistitem.md)‹T› | LinkListItem to be inserted behind this one  |

**Returns:** *void*

___

###  unlink

▸ **unlink**(): *void*

*Defined in [LinkedListItem.ts:52](https://github.com/x3cion/x3-linkedlist/blob/bff069f/src/LinkedListItem.ts#L52)*

Unlinks this LinkedListItem and calls unlinkCleanup

**`see`** LinkedListItem#unlinkCleanup

**Returns:** *void*
