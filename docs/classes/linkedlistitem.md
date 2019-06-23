> ## [x3-linkedlist](../README.md)

[Globals](../globals.md) / [LinkedListItem](linkedlistitem.md) /

# Class: LinkedListItem <**T**>

## Type parameters

■` T`

## Hierarchy

* **LinkedListItem**

### Index

#### Constructors

* [constructor](linkedlistitem.md#constructor)

#### Properties

* [before](linkedlistitem.md#before)
* [behind](linkedlistitem.md#behind)
* [unlinkCleanup](linkedlistitem.md#protected-optional-unlinkcleanup)
* [value](linkedlistitem.md#value)

#### Methods

* [insertBefore](linkedlistitem.md#protected-insertbefore)
* [insertBehind](linkedlistitem.md#insertbehind)
* [unlink](linkedlistitem.md#unlink)

## Constructors

###  constructor

\+ **new LinkedListItem**(`value`: `T`, `unlinkCleanup?`: undefined | function): *[LinkedListItem](linkedlistitem.md)*

*Defined in [LinkedListItem.ts:5](https://github.com/x3cion/x3-linkedlist/blob/94c99a3/src/LinkedListItem.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | `T` |
`unlinkCleanup?` | undefined \| function |

**Returns:** *[LinkedListItem](linkedlistitem.md)*

___

## Properties

###  before

● **before**: *[LinkedListItem](linkedlistitem.md)‹*`T`*› | undefined*

*Defined in [LinkedListItem.ts:5](https://github.com/x3cion/x3-linkedlist/blob/94c99a3/src/LinkedListItem.ts#L5)*

___

###  behind

● **behind**: *[LinkedListItem](linkedlistitem.md)‹*`T`*› | undefined*

*Defined in [LinkedListItem.ts:4](https://github.com/x3cion/x3-linkedlist/blob/94c99a3/src/LinkedListItem.ts#L4)*

___

### `Protected` `Optional` unlinkCleanup

● **unlinkCleanup**? : *undefined | function*

*Defined in [LinkedListItem.ts:7](https://github.com/x3cion/x3-linkedlist/blob/94c99a3/src/LinkedListItem.ts#L7)*

___

###  value

● **value**: *`T`*

*Defined in [LinkedListItem.ts:7](https://github.com/x3cion/x3-linkedlist/blob/94c99a3/src/LinkedListItem.ts#L7)*

___

## Methods

### `Protected` insertBefore

▸ **insertBefore**(`before`: [LinkedListItem](linkedlistitem.md)‹*`T`*›): *void*

*Defined in [LinkedListItem.ts:10](https://github.com/x3cion/x3-linkedlist/blob/94c99a3/src/LinkedListItem.ts#L10)*

**Parameters:**

Name | Type |
------ | ------ |
`before` | [LinkedListItem](linkedlistitem.md)‹*`T`*› |

**Returns:** *void*

___

###  insertBehind

▸ **insertBehind**(`item`: [LinkedListItem](linkedlistitem.md)‹*`T`*›): *void*

*Defined in [LinkedListItem.ts:15](https://github.com/x3cion/x3-linkedlist/blob/94c99a3/src/LinkedListItem.ts#L15)*

**Parameters:**

Name | Type |
------ | ------ |
`item` | [LinkedListItem](linkedlistitem.md)‹*`T`*› |

**Returns:** *void*

___

###  unlink

▸ **unlink**(): *void*

*Defined in [LinkedListItem.ts:29](https://github.com/x3cion/x3-linkedlist/blob/94c99a3/src/LinkedListItem.ts#L29)*

**Returns:** *void*

___