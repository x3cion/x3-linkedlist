[x3-linkedlist](../README.md) / LinkedListItem

# Class: LinkedListItem<T\>

Represents an Item within LinkedList.
An item holds a value and the links to other LinkedListItem's
LinkedListItem's can only be attached behind.
Theirfor, to add one before, before has to add one behind.

**`Typeparam`**

T - Type of the vaulue in this LinkedListItem

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Constructors

- [constructor](LinkedListItem.md#constructor)

### Properties

- [before](LinkedListItem.md#before)
- [behind](LinkedListItem.md#behind)
- [unlinkCleanup](LinkedListItem.md#unlinkcleanup)
- [value](LinkedListItem.md#value)

### Methods

- [insertBefore](LinkedListItem.md#insertbefore)
- [insertBehind](LinkedListItem.md#insertbehind)
- [unlink](LinkedListItem.md#unlink)

## Constructors

### constructor

• **new LinkedListItem**<`T`\>(`value`, `unlinkCleanup?`)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `T` | Value of this item |
| `unlinkCleanup?` | (`item`: [`LinkedListItem`](LinkedListItem.md)<`T`\>) => `void` | Function to run on unlink() call. Usually used by LinkedList to fix first and last pointers and reduce length. |

## Properties

### before

• **before**: `undefined` \| [`LinkedListItem`](LinkedListItem.md)<`T`\>

Item before this item
```
A -> ThisItem -> C
^
```

___

### behind

• **behind**: `undefined` \| [`LinkedListItem`](LinkedListItem.md)<`T`\>

Item behind this item
```
A -> ThisItem -> C
                 ^
```

___

### unlinkCleanup

• `Protected` `Optional` **unlinkCleanup**: (`item`: [`LinkedListItem`](LinkedListItem.md)<`T`\>) => `void`

#### Type declaration

▸ (`item`): `void`

Function to run on unlink() call. Usually used by LinkedList to fix first and last pointers and reduce length.

##### Parameters

| Name | Type |
| :------ | :------ |
| `item` | [`LinkedListItem`](LinkedListItem.md)<`T`\> |

##### Returns

`void`

___

### value

• **value**: `T`

Value of this item

## Methods

### insertBefore

▸ `Protected` **insertBefore**(`before`): `void`

Item given will be inserted before this item.
unlinkCleanup will be copied if neccessary.
This function is protected, because LinkedListItem's can only be attached behind.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `before` | [`LinkedListItem`](LinkedListItem.md)<`T`\> | LinkListItem to be inserted before this one |

#### Returns

`void`

**`See`**

insertBehind

___

### insertBehind

▸ **insertBehind**(`item`): `void`

This will link given LinkListItem behind this item.
If there's already a LinkedListItem linked behind, it will be relinked accordingly

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `item` | [`LinkedListItem`](LinkedListItem.md)<`T`\> | LinkListItem to be inserted behind this one |

#### Returns

`void`

___

### unlink

▸ **unlink**(`unchain?`): `void`

Unlinks this LinkedListItem and calls unlinkCleanup

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `unchain` | `boolean` | `false` | If true, additionally removes the reference to the item before and behind |

#### Returns

`void`

**`See`**

LinkedListItem#unlinkCleanup
