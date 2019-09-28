import 'jest-extended';

import { LinkedListItem } from 'LinkedListItem';

describe("LinkedListItem#constructor", () => {
  test("holds given value", () => {
    const item = new LinkedListItem("value");
    expect(item.value).toBe("value");
  });

  test("calls given unlinkCleanup function if given", () => {
    let called = false;
    const item = new LinkedListItem(1, () => {
      called = true;
    });

    expect(called).toBeFalse();
    item.unlink();
    expect(called).toBeTrue();
  });
});

describe("LinkedListItem#insertBehind", () => {
  test("inserts given LinkedListItem behind this", () => {
    const itemBefore = new LinkedListItem(0);
    const baseItem = new LinkedListItem(1);
    itemBefore.insertBehind(baseItem);

    expect(itemBefore.behind).toBe(baseItem);
    expect(baseItem.before).toBe(itemBefore);

    const itemBehind = new LinkedListItem(2);
    baseItem.insertBehind(itemBehind);

    expect(baseItem.behind).toBe(itemBehind);

    const newItemBehind = new LinkedListItem(1.5);
    baseItem.insertBehind(newItemBehind);

    expect(baseItem.behind).toBe(newItemBehind);

    expect(baseItem.behind!.behind).toBe(itemBehind);
  });

  test("Adds multiple in a row", () => {
    const item1 = new LinkedListItem(1);
    const item2 = new LinkedListItem(2);
    const item3 = new LinkedListItem(3);
    const item21 = new LinkedListItem(4);
    const item22 = new LinkedListItem(5);
    const item23 = new LinkedListItem(6);

    item1.insertBehind(item2);
    item2.insertBehind(item3);

    item21.insertBehind(item22);
    item22.insertBehind(item23);

    item2.insertBehind(item21);

    const expectedResult = [1, 2, 4, 5, 6, 3];
    const result = [];
    let current: any = item1;
    do {
      result.push(current.value);
      current = current.behind;
    } while (current);
    expect(result).toStrictEqual(expectedResult);
  });
});

describe("LinkedListItem#unlink", () => {
  test("unlinks this item from chain, but doesn't remove the chain info from item", () => {
    const item1 = new LinkedListItem(1);
    const item2 = new LinkedListItem(2);
    const item3 = new LinkedListItem(3);

    item1.insertBehind(item2);
    item2.insertBehind(item3);

    item2.unlink();

    expect(item1.behind).toBe(item3);
    expect(item3.before).toBe(item1);

    expect(item2.before).toBe(item1);
    expect(item2.behind).toBe(item3);
  });

  test("runs given unlinkCleanup function", () => {
    let called = false;
    const item1 = new LinkedListItem(1, () => {
      called = true;
    });

    expect(called).toBeFalse();

    item1.unlink();

    expect(called).toBeTrue();
  });
});
