import 'jest-extended';

import { LinkedList } from './LinkedList';
import { LinkedListItem } from './LinkedListItem';

/**
 * Returns a LinkedList, the corresponding LinkedListItem's and an array of every value
 * @param count Amount of entries in returned list, items and values
 * @param offset Added as offset to the number being stringified and used as value
 */
function getListWithItems(
  count: number,
  offset: number = 0
): {
  list: LinkedList<string>;
  items: Array<LinkedListItem<string>>;
  values: string[];
} {
  const list = new LinkedList<string>();
  const items = [];
  const values = [];
  for (let i = 0; i < count; i++) {
    const value = (i + offset).toString();
    values.push(value);
    list.push(value);
  }

  items.push(...list.keys());

  return {
    items,
    list,
    values
  };
}

/**
 * Returns a value at given index position in given LinkedList
 * @param list Linkedlist to be traversed
 * @param index Index of entry to be returned
 */
function getValueOnIndex(list: LinkedList<string>, index: number): string {
  let current = list.first;
  while (index--) {
    current = current!.behind;
  }
  if (!current) {
    throw new Error("Index number yields no entry!");
  }
  return current && current.value;
}

interface ICallbackBasedFunctionReturningObject {
  [key: string]: (callback: (...args: any[]) => any, thisArg?: any) => any;
}

function getCallbackThisArgTest<
  K extends keyof Pick<
    LinkedList<string>,
    "every" | "filter" | "find" | "findItem" | "forEach" | "map" | "some"
  >
>(targetedFunction: K): () => void {
  return () => {
    const { list, items, values } = getListWithItems(1);

    const newThis1 = { testvalue: 1 };
    let callbackBeenCalled1 = false;
    list[targetedFunction](function(
      this: typeof newThis1,
      ...args: any[]
    ): any {
      callbackBeenCalled1 = true;
      expect(this).toBe(newThis1);
    },
    newThis1);

    expect(callbackBeenCalled1).toBeTrue();

    const newThis2 = -1;
    let callbackBeenCalled2 = false;
    list[targetedFunction](function(this: any, ...args: any[]): any {
      callbackBeenCalled2 = true;
      expect(this).toBe(newThis2);
    }, newThis2);

    expect(callbackBeenCalled2).toBeTrue();
  };
}

describe("Helper functions are working", () => {
  test("getListWithItems returns valid pairs of list, items and values", () => {
    const consistentLength = 7;
    const { list, items, values: givenValues } = getListWithItems(
      consistentLength
    );
    const expectedValues = ["0", "1", "2", "3", "4", "5", "6"];

    expect(expectedValues.length).toBe(consistentLength);
    expect(items.length).toBe(consistentLength);
    expect(givenValues.length).toBe(consistentLength);
    expect(list.length).toBe(consistentLength);

    expect(
      expectedValues.every(value => expectedValues.includes(value))
    ).toBeTrue();
    expect(items.every(item => expectedValues.includes(item.value))).toBeTrue();
    expect(list.every(value => expectedValues.includes(value))).toBeTrue();
  });

  test("getValueOnIndex returns the right value for given index", () => {
    const { list, values } = getListWithItems(5);

    for (let i = 0; i < values.length; i++) {
      expect(getValueOnIndex(list, i)).toBe(values[i]);
    }
  });

  // test("getCallbackThisArgTest returns a test function", () => {
  // 	const testFunction = getCallbackThisArgTest("every");
  // 	expect(testFunction).toBeFunction();
  // })
});

describe("LinkedList#constructor", () => {
  test("creates new LinkedList on call", () => {
    const list = new LinkedList<any>();
    expect(list).toBeInstanceOf(LinkedList);
    expect(list.length).toBe(0);
    expect(list.first).toBeUndefined();
    expect(list.last).toBeUndefined();
  });

  test("creates filled LinkedList if iteratable is given", () => {
    const list = new LinkedList([1, 2, false, true]);
    expect(list.length).toBe(4);
    expect([...list.values()]).toStrictEqual([1, 2, false, true]);
  });
});

describe("LinkedList#every", () => {
  test("iterates for every element as long as a truthy value is returned", () => {
    const { list, items, values } = getListWithItems(3);
    let count = 0;
    const fncReturn = list.every(value => ++count);
    expect(count).toBe(3);
    expect(fncReturn).toBeTrue();
  });

  test("breaks on any falsy return", () => {
    const { list, items, values } = getListWithItems(3);
    let countdown = 2;
    let count = 0;

    const fncReturn = list.every(value => ++count && --countdown);
    expect(count).toBe(2);
    expect(fncReturn).toBe(false);
  });

  test("set callback-this correctly", getCallbackThisArgTest("every"));
});

describe("LinkedList#filter", () => {
  test("returns only values for which callback returns truthy", () => {
    const { list, items, values } = getListWithItems(10);
    const allowedItems = new Set(["1", "2", "5", "7"]);

    const filteredList = list.filter((value, item, innerList) => {
      expect(items.includes(item)).toBeTrue();
      expect(innerList).toBe(list);
      return allowedItems.has(value);
    });

    const filteredValues = [...filteredList.values()];
    expect(filteredValues.length).toBe(allowedItems.size);
    expect(filteredValues.every(value => allowedItems.has(value)));
  });

  test("returns empty LinkedList if callback never was truthy", () => {
    const { list, items, values } = getListWithItems(3);
    const filteredList = list.filter(() => false);
    expect(filteredList.length).toBe(0);
  });

  test("returns empty LinkedList for empty LinkedList", () => {
    const { list, items, values } = getListWithItems(0);
    const filteredList = list.filter(() => true);
    expect(filteredList.length).toBe(0);
  });

  test("set callback-this correctly", getCallbackThisArgTest("filter"));
});

describe("LinkedList#find", () => {
  test("finds in LinkedList", () => {
    const { list, items, values } = getListWithItems(5);
    const found = list.find(value => value === "3");

    expect(found).toBe("3");
  });

  test("set callback-this correctly", getCallbackThisArgTest("find"));
});

describe("LinkedList#findItem", () => {
  test("finds in LinkedList", () => {
    const { list, items, values } = getListWithItems(7);
    const foundItem = list.findItem(value => value === "6");

    expect(foundItem).toBe(items[6]);
  });

  test("set callback-this correctly", getCallbackThisArgTest("findItem"));
});

describe("LinkedList#forEach", () => {
  test("runs function for each element", () => {
    const { list, items, values } = getListWithItems(4);

    const forEachResponses = [true, false, {}, 5];
    let forEachRun = 0;
    list.forEach(value => {
      forEachRun++;
      expect(values.includes(value)).toBeTrue();
      return forEachResponses[forEachRun];
    });

    expect(forEachRun).toBe(4);
  });

  test("set callback-this correctly", getCallbackThisArgTest("forEach"));
});

describe("LinkedList#includes", () => {
  test("returns true on found element", () => {
    const { list } = getListWithItems(5);
    expect(list.includes("3")).toBeTrue();
  });
  test("returns false if element is not found", () => {
    const { list } = getListWithItems(5);
    expect(list.includes("5")).toBeFalse();
  });

  test("returns false on empty list", () => {
    const { list } = getListWithItems(0);
    expect(list.includes("0")).toBeFalse();
  });
});

describe("LinkedLIst#itemOf", () => {
  test("returns item for found value", () => {
    const { list, items } = getListWithItems(5);
    const item = list.itemOf("4");
    expect(item).toBe(items[4]);
  });

  test("returns first item found", () => {
    const { list, items } = getListWithItems(5);
    list.push("0");
    const item = list.itemOf("0");
    expect(item).toBe(list.first);
    expect(item).not.toBe(list.last);
    expect(list.first).not.toBe(list.last);
  });

  test("returns undefined for not found item or empty list", () => {
    const { list: emptyList } = getListWithItems(0);
    const { list } = getListWithItems(2);
    expect(emptyList.itemOf("0")).toBeUndefined();
    expect(list.itemOf("2")).toBeUndefined();
  });
});

describe("LinkedList#lastItemOf", () => {
  test("returns item for found value", () => {
    const { list, items } = getListWithItems(5);
    const item = list.lastItemOf("4");
    expect(item).toBe(items[4]);
  });

  test("returns first item found", () => {
    const { list, items } = getListWithItems(5);
    list.push("0");
    const item = list.lastItemOf("0");
    expect(item).toBe(list.last);
    expect(item).not.toBe(list.first);
    expect(list.first).not.toBe(list.last);
  });

  test("returns undefined for not found item or empty list", () => {
    const { list: emptyList } = getListWithItems(0);
    const { list } = getListWithItems(2);
    expect(emptyList.lastItemOf("0")).toBeUndefined();
    expect(list.lastItemOf("2")).toBeUndefined();
  });
});

describe("LinkedList#map", () => {
  test("maps for every item in list", () => {
    const { list } = getListWithItems(4);
    const expectedOutput = [1, 2, 3, 4];
    const output = list.map(value => parseInt(value, 10) + 1);
    expect(output.length).toBe(4);
    expect(output.every(value => expectedOutput.includes(value))).toBeTrue();
  });

  test("passes items and list as second and third argument", () => {
    const { list, items } = getListWithItems(5);
    let iterationCount = 0;
    list.map((_, item, listParameter) => {
      iterationCount++;
      expect(items.includes(item)).toBeTrue();
      expect(listParameter).toBe(list);
    });

    expect(iterationCount).toBe(5);
  });

  test("returns empty list for lists and doesn't run callback", () => {
    const { list } = getListWithItems(0);
    let callbackRun = false;
    const newList = list.map(value => {
      callbackRun = true;
    });

    expect(newList.length).toBe(0);
    expect(callbackRun).toBeFalse();
  });

  test("set callback-this correctly", getCallbackThisArgTest("map"));
});

describe("LinkedList#reduce", () => {
  test("without given initialValue, uses first value", () => {
    const { list } = getListWithItems(3, 5);
    const expectedOutput = "5,6,7";
    const output = list.reduce((acc, value) => {
      return (acc += `,${value}`);
    });
    expect(output).toBe(expectedOutput);
  });

  test("works with given initialValue", () => {
    const { list } = getListWithItems(3, 1);
    const finalValue = list.reduce(
      (acc, value) => acc + parseInt(value, 10),
      -100
    );
    expect(finalValue).toBe(-94);
  });

  test("throws on empty list with empty accumulator", () => {
    const list = new LinkedList();
    expect(() =>
      list.reduce(() => {
        return;
      })
    ).toThrowError(TypeError);
  });

  test("with empty LinkedList and initialValue, return initialValue", () => {
    const list = new LinkedList<any>();
    let callbackCalled = false;
    const output = list.reduce<any>(() => {
      callbackCalled = true;
    }, "initialValue");

    expect(callbackCalled).toBeFalse();
    expect(output).toBe("initialValue");
  });

  test("LinkedList with only one entry and no initialValue returns its entry", () => {
    const list = new LinkedList([5]);
    let callbackCalled = false;
    const output = list.reduce(() => {
      callbackCalled = true;
    });

    expect(callbackCalled).toBe(false);
    expect(output).toBe(5);
  });
});

describe("LinkedList#reduceRight", () => {
  test("without given initialValue, uses first value", () => {
    const { list } = getListWithItems(3, 5);
    const expectedOutput = "7,6,5";
    const output = list.reduceRight((acc, value) => {
      return (acc += `,${value}`);
    });
    expect(output).toBe(expectedOutput);
  });

  test("works with given initialValue", () => {
    const { list } = getListWithItems(3, 1);
    const finalValue = list.reduceRight<string[]>((acc, value) => {
      acc.push(value);
      return acc;
    }, []);
    expect(finalValue).toEqual(["3", "2", "1"]);
  });

  test("throws on empty list with empty accumulator", () => {
    const list = new LinkedList();
    expect(() =>
      list.reduceRight(() => {
        return;
      })
    ).toThrowError(TypeError);
  });

  test("with empty LinkedList and initialValue, return initialValue", () => {
    const list = new LinkedList<any>();
    let callbackCalled = false;
    const output = list.reduceRight<any>(() => {
      callbackCalled = true;
    }, "initialValue");

    expect(callbackCalled).toBeFalse();
    expect(output).toBe("initialValue");
  });

  test("LinkedList with only one entry and no initialValue returns its entry", () => {
    const list = new LinkedList([5]);
    let callbackCalled = false;
    const output = list.reduceRight(() => {
      callbackCalled = true;
    });

    expect(callbackCalled).toBe(false);
    expect(output).toBe(5);
  });
});

describe("LinkedList#some", () => {
  test("breaks as soon as a value has been found", () => {
    const { list, items, values } = getListWithItems(4);
    let iterationCount = 0;
    const returnedValue = list.some(value => {
      iterationCount++;
      return value === "2";
    });

    expect(iterationCount).toBe(3);
    expect(returnedValue).toBeTrue();
  });

  test("doesn't break if no value could be found", () => {
    const { list } = getListWithItems(5);
    let iterationCount = 0;

    const returnedValue = list.some(value => {
      iterationCount++;
      return value === "5";
    });

    expect(iterationCount).toBe(5);
    expect(returnedValue).toBeFalse();
  });

  test("always false for empty LinkedList", () => {
    const list = new LinkedList<string>();
    let iterationCount = 0;

    const returnedValue = list.some(value => {
      iterationCount++;
      return true;
    });

    expect(iterationCount).toBe(0);
    expect(returnedValue).toBeFalse();
  });

  test("set callback-this correctly", getCallbackThisArgTest("some"));
});

describe("LinkedList#join", () => {
  test("joins like array", () => {
    const list = new LinkedList([-1, "abc", true]);
    const returnValue1 = list.join();
    expect(returnValue1).toBe("-1,abc,true");
    const returnValue2 = list.join("-");
    expect(returnValue2).toBe("-1-abc-true");
  });

  test("joins nothing if LinkedList is empty", () => {
    const list = new LinkedList();
    const returnValue = list.join("/");
    expect(returnValue).toBe("");
  });
});

describe("LinkedList#concat", () => {
  test("joins pure LinkedList's together", () => {
    const { list: list1, items: items1 } = getListWithItems(2);
    const { list: list2, items: items2 } = getListWithItems(2, 10);
    const { list: list3, items: items3 } = getListWithItems(2, 20);

    const joinedList1 = list1.concat(list2, list3);
    // if(!joinedList1.first || !joinedList1.last) {
    // 	return expect(true).toBeFalse();
    // }

    for (const list of [list1, list2, list3]) {
      for (const value of list.values()) {
        expect(joinedList1.includes(value)).toBeTrue();
      }
    }

    for (const value of joinedList1.values()) {
      expect(
        list1.includes(value) || list2.includes(value) || list3.includes(value)
      ).toBeTrue();
    }

    // The first element of the joined list holds the value of the first element of the first list
    expect(joinedList1.first!.value).toBe(list1.first!.value);

    // the last element of the joined list holds the value of the last element of the third list
    expect(joinedList1.last!.value).toBe(list3.last!.value);

    // Includes 11, which is the second element from the second list
    expect(joinedList1.includes("11")).toBeTrue();

    // Includes value of the first item of the third list
    expect(getValueOnIndex(joinedList1, 4)).toBe(items3[0].value);

    const joinedList2 = list1.concat(list2).concat(list3);

    let current1 = joinedList1.first;
    let current2 = joinedList2.first;
    do {
      expect(current1!.value).toBe(current2!.value);
      current1 = current1!.behind;
      current2 = current2!.behind;
    } while (current1 && current2);

    // Expect both to be undefined
    expect(current1).toBeUndefined();
    expect(current2).toBeUndefined();
  });

  test("does not use LinkedListItem's of concat'ed LinkedList's", () => {
    const { list: list1, items: items1 } = getListWithItems(2);
    const { list: list2, items: items2 } = getListWithItems(2, 10);

    const joinedList = list1.concat(list2);

    let current = joinedList.first;

    do {
      expect(items1.includes(current!)).toBe(false);
      expect(items2.includes(current!)).toBe(false);
      current = current!.behind;
    } while (current);
  });

  test("joins abitrary items together", () => {
    const { list: list1, items: items1 } = getListWithItems(2);
    const { list: list2, items: items2 } = getListWithItems(2, 10);
    const stringValue = "abc";
    const objectValue = { a: 1 };
    const arrayValue: any[] = [null];

    const joinedList = list1.concat<any>(
      stringValue,
      list2,
      objectValue,
      arrayValue,
      list1
    );
    expect(getValueOnIndex(joinedList, 4)).toBe(items2[1].value);
    expect(getValueOnIndex(joinedList, 5)).toBe(objectValue);
    expect(getValueOnIndex(joinedList, 8)).toBe(items1[1].value);
  });
});

describe("LinkedList#pop", () => {
  test("returns and removes last element from LinkedList", () => {
    const { list, values } = getListWithItems(4);
    const returnedValue = list.pop();
    expect(returnedValue).toBe(values[values.length - 1]);
    expect(list.length).toBe(3);
  });

  test("returns undefined on empty list", () => {
    const { list } = getListWithItems(0);
    const returnedValue = list.pop();
    expect(returnedValue).toBe(undefined);
    expect(list.length).toBe(0);
  });
});

describe("LinkedList#shift", () => {
  test("returns and removes first element from LinkedList", () => {
    const { list, values } = getListWithItems(4);
    const returnedValue = list.shift();
    expect(returnedValue).toBe(values[0]);
    expect(list.length).toBe(3);
  });

  test("returns undefined on empty list", () => {
    const { list } = getListWithItems(0);
    const returnedValue = list.shift();
    expect(returnedValue).toBe(undefined);
    expect(list.length).toBe(0);
  });
});

describe("LinkedList#push", () => {
  test("adds element to the end of the LinkedList", () => {
    const emptyList = new LinkedList();
    expect(emptyList.first).toBeUndefined();
    expect(emptyList.last).toBeUndefined();

    emptyList.push("anything");
    expect(emptyList.first).toBe(emptyList.last);
    expect(emptyList.length).toBe(1);
    expect(emptyList.first!.value).toBe("anything");

    const list = new LinkedList([1, 2, 3]);
    list.push(-1);
    expect(list.last!.value).toBe(-1);
    expect(list.length).toBe(4);
  });
});

describe("LinkedList#unshift", () => {
  test("adds element to the beginning of the LinkedList", () => {
    const emptyList = new LinkedList();

    emptyList.unshift("anything");
    expect(emptyList.first).toBe(emptyList.last);
    expect(emptyList.length).toBe(1);
    expect(emptyList.last!.value).toBe("anything");

    const list = new LinkedList([1, 2, 3]);
    list.unshift(-1);
    expect(list.first!.value).toBe(-1);
    expect(list.length).toBe(4);
  });
});

describe("LikedList#remove", () => {
  test("removes a value from LinkedList", () => {
    const list = new LinkedList([3, 4, 5, 3]);
    const returnedValue = list.remove(3);
    expect(returnedValue).toBeTrue();
    expect(list.length).toBe(3);
    expect([...list.values()]).toStrictEqual([4, 5, 3]);
  });

  test("removes nothing if value could not be found", () => {
    const list = new LinkedList([4, 5, 6]);
    const returnedValue = list.remove(7);
    expect(returnedValue).toBeFalse();
    expect(list.length).toBe(3);
    expect([...list.values()]).toStrictEqual([4, 5, 6]);
  });
});

describe("LinkedList#removeAllOccurrences", () => {
  test("removes a value from LinkedList", () => {
    const list = new LinkedList([3, 4, 5, 3]);
    const returnedValue = list.removeAllOccurrences(3);
    expect(returnedValue).toBeTrue();
    expect(list.length).toBe(2);
    expect([...list.values()]).toStrictEqual([4, 5]);
  });

  test("removes nothing if value could not be found", () => {
    const list = new LinkedList([4, 5, 6]);
    const returnedValue = list.removeAllOccurrences(7);
    expect(returnedValue).toBeFalse();
    expect(list.length).toBe(3);
    expect([...list.values()]).toStrictEqual([4, 5, 6]);
  });
});

describe("LinkedList#entries,[Symbol.iterator]", () => {
  test("returns exactly the content of the list", () => {
    const { list, items, values } = getListWithItems(4);
    const iteratorResponse = [...list[Symbol.iterator]()];
    const entriesResponse = [...list.entries()];

    expect(iteratorResponse.length).toBe(4);
    expect(
      iteratorResponse.every(
        ([item, value]) => items.includes(item) && values.includes(value)
      )
    ).toBeTrue();

    expect(entriesResponse.length).toBe(4);
    expect(
      entriesResponse.every(
        ([item, value]) => items.includes(item) && values.includes(value)
      )
    ).toBeTrue();
  });

  test("returns nothing if list is empty", () => {
    const { list, items, values } = getListWithItems(0);
    const iteratorResponse = [...list[Symbol.iterator]()];
    const entriesResponse = [...list.entries()];

    expect(iteratorResponse.length).toBe(0);
    expect(entriesResponse.length).toBe(0);
  });
});

describe("LinkedList#keys", () => {
  test("returns exactly the content of the list", () => {
    const { list, items, values } = getListWithItems(4);
    const keyResponse = [...list.keys()];

    expect(keyResponse.length).toBe(4);
    expect(keyResponse.every(item => items.includes(item))).toBeTrue();
  });

  test("returns nothing if list is empty", () => {
    const { list, items, values } = getListWithItems(0);
    const keyResponse = [...list.keys()];

    expect(keyResponse.length).toBe(0);
  });
});

describe("LinkedList#values", () => {
  test("returns exactly the content of the list", () => {
    const { list, items, values } = getListWithItems(4);

    const valuesResponse = [...list.values()];
    expect(valuesResponse.length).toBe(4);
    expect(valuesResponse.every(value => values.includes(value))).toBeTrue();
  });

  test("returns nothing if list is empty", () => {
    const { list, items, values } = getListWithItems(0);
    const valuesResponse = [...list.values()];

    expect(valuesResponse.length).toBe(0);
  });
});
