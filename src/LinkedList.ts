import LinkedListItem from "./LinkedListItem";

/**
 * Implements a linked list structure
 * @typeparam T Type of values within this LinkedList
 */
export default class LinkedList<T> {
	/**
	 * First item in list
	 */
	first: LinkedListItem<T> | undefined;
	/**
	 * Last item in list
	 */
	last: LinkedListItem<T> | undefined;
	/**
	 * @param values Values to be added upfront into list
	 */
	constructor(values?: Iterable<T> | LinkedList<any>) {
		if (values) {
			if (values instanceof LinkedList) {
				this.push(...values.values());
			} else {
				this.push(...values);
			}
		}
	}

	/**
	 * Returns the item by given index. 
	 * Supports negative values and will return the item at `LinkedList.size - 1 + index` in that case.
	 * @param index Index of item to get from list
	 */
	private getItemByIndex(index: number): LinkedListItem<T> | undefined {
		if (index === undefined) throw new Error("index must be a number!");
		if (!this.first) return;
		let current: LinkedListItem<T> | undefined;
		if (index > 0) {
			current = this.first;
			while (current && index--) {
				current = current.behind;
			}
		} else if (index < 0) {
			current = this.last;
			while (current && ++index) {
				current = current.before;
			}
		} else {
			return this.first;
		}

		return current;
	}

	/**
	 * Given to own LinkedListItem's for following jobs regarding an unlink:
	 * - If item is first item, set the next item as first item
	 * - If item is last item, set the previous item as last item
	 * - Decrease length
	 * @param item Item that has been unlinked
	 */
	private unlinkCleanup = (item: LinkedListItem<T>) => {
		if (this.first === item) {
			this.first = this.first.behind;
		}
		if (this.last === item) {
			this.last = this.last.before;
		}
		this.length--;
	}

	/**
	 * As Array#every() given callback is called for every element until one call returns falsy or all elements had been processed
	 * @returns `false` if there was a falsy response from the callback, `true` if all elements have been processed "falselesly"
	 * @see Array#every
	 */
	every(callback: (value: T, item: LinkedListItem<T>, list: this) => any, thisArg?: any) {
		if (thisArg) {
			callback = callback.bind(thisArg);
		}

		for (const item of this.keys()) {
			if (!callback(item.value, item, this)) return false;
		}
		return true;
	}

	/**
	 * Filters values into a new LinkedList
	 * @param callback decides wether given element should be part of new LinkedList
	 * @see Array#filter
	 */
	filter(callback: (value: T, item: LinkedListItem<T>, list: this) => any, thisArg?: any): LinkedList<T> {
		if (thisArg) {
			callback = callback.bind(thisArg);
		}

		const newList: LinkedList<T> = new LinkedList();
		for (const [item, value] of this) {
			callback(value, item, this) && newList.push(value);
		}
		return newList;
	}

	/**
	 * Returns value for which given callback returns truthy
	 * @param callback runs for every value in LinkedList. If it returns truthy, current value is returned.
	 * @see Array#find
	 */
	find(callback: (value: T, item: LinkedListItem<T>, list: this) => any, thisArg?: any): T | undefined {
		if (thisArg) {
			callback = callback.bind(thisArg);
		}

		for (const [item, value] of this) {
			if (callback(value, item, this)) {
				return value;
			}
		}
	}

	/**
	 * Returns the LinkedListItem for which given callback returns truthy
	 * @param callback runs for every LinkedListItem in LinkedList. If it returns truthy, current LinkedListItem is returned.
	 * @see Array#findIndex
	 */
	findItem(callback: (value: T, item: LinkedListItem<T>, list: this) => boolean, thisArg?: any): LinkedListItem<T> | undefined {
		if (thisArg) {
			callback = callback.bind(thisArg);
		}

		for (const [item, value] of this) {
			if (callback(value, item, this)) {
				return item;
			}
		}
	}

	/**
	 * Iterates this LinkedList's items and values
	 * @param callback Gets every value in LinkedList once with corresponding LinkedListItem and LinkedList
	 * @param thisArg If given, callback will be bound here
	 * @see Array#forEach
	 */
	forEach(callback: (value: T, item: LinkedListItem<T>, list: this) => void, thisArg?: any): void {
		if (thisArg) {
			callback = callback.bind(thisArg);
		}
		for (const [item, value] of this) {
			callback(value, item, this);
		}
	}

	/**
	 * Checks if value can be found within LinkedList, starting from fromIndex, if given.
	 * @param value value to be found in this
	 * @param fromIndex Starting index. Supports negative values for which `this.size - 1 + fromIndex` will be used as starting point.
	 * @returns true if value could be found in LinkedList (respecting fromIndex), false otherwhise
	 * @see Array#includes
	 */
	includes(value: T, fromIndex: number = 0): boolean {
		let current = this.getItemByIndex(fromIndex);
		if (!current) return false;
		do {
			if (current.value === value) {
				return true;
			}
		} while (current && (current = current.behind))
		return false;
	}

	/**
	 * Searches backwards for given value and returns the first corresponding LinkedListItem found
	 * @param searchedValue Value to be found
	 * @param fromIndex Index to start from
	 * @see Array#indexOf
	 */
	itemOf(searchedValue: T, fromIndex: number = 0): LinkedListItem<T> | undefined {
		let current = this.getItemByIndex(fromIndex);
		if (!current) return;
		do {
			if (current.value === searchedValue) {
				return current;
			}
		} while (current = current.behind);
	}

	/**
	 * Searches backwards for given value and returns the first corresponding LinkedListItem found
	 * @param searchedValue Value to be found
	 * @param fromIndex Index to start from
	 * @see Array#indexOf
	 */
	lastItemOf(searchedValue: T, fromIndex: number = -1): LinkedListItem<T> | undefined {
		let current = this.getItemByIndex(fromIndex);
		if (!current) return;
		do {
			if (current.value === searchedValue) {
				return current;
			}
		} while (current = current.before);
	}

	/**
	 * Creates a new LinkedList with each of its itesm representing the output of the callback with each item in current LinkedList.
	 * @param callback Gets value, LinkedListeItem and LinkedList. The response will be used as value in the new LinkedList
	 * @param thisArg If given, callback is bound to thisArg
	 * @see Array#map
	 */
	map<V>(callback: (value: T, item: LinkedListItem<T>, list: this) => V, thisArg?: any): LinkedList<V> {
		if (thisArg) {
			callback = callback.bind(thisArg);
		}
		const newList = new LinkedList<V>();
		for (const [item, value] of this) {
			newList.push(callback(value, item, this));
		}
		return newList;
	}

	/**
	 * From Array#reduce on MDN: The reduce() method executes a reducer function (that you provide) on each element of the LinkedList, 
	 * resulting in a single output value.
	 * @param callback Gets accumulator, value, LinkedListeItem and LinkedList. The response will be used as the next accumulator
	 * @param initialValue 
	 * @see Array#reduce
	 */
	reduce<V>(callback: (accumulator: T, currentValue: T, currentItem: LinkedListItem<T>, list: this) => V): V;
	reduce<V>(callback: (accumulator: V, currentValue: T, currentItem: LinkedListItem<T>, list: this) => V, initialValue: V): V;
	reduce<V>(callback: (accumulator: V | T, currentValue: T, currentItem: LinkedListItem<T>, list: this) => V, initialValue?: V | T): V | T {
		if (!this.first) {
			if (!initialValue) {
				throw new TypeError("Empty accumulator on empty LinkedList is not allowed.");
			}
			return initialValue;
		}
		let current: LinkedListItem<T> = this.first;
		// let accumulator: V | T;
		if (initialValue === undefined) {
			initialValue = current.value;
			if (!current.behind)
				return initialValue;
			current = current.behind;
		} else {
			initialValue = initialValue;
		}
		do {
			initialValue = callback(initialValue!, current!.value, current!, this);
		} while (current.behind && (current = current.behind));
		return initialValue!;
	}

	/**
	 * From Array#reduce on MDN: The reduceRight() method applies a function against an accumulator and each value of the LinkedList (from last-to-first) 
	 * to reduce it to a single value.
	 * @param callback Gets accumulator, value, LinkedListeItem and LinkedList. The response will be used as the next accumulator
	 * @param initialValue Initial accumulator being passed to first call
	 */
	reduceRight<V>(callback: (accumulator: T, currentValue: T, currentItem: LinkedListItem<T>, list: this) => V): V;
	reduceRight<V>(callback: (accumulator: V, currentValue: T, currentItem: LinkedListItem<T>, list: this) => V, initialValue: V): V;
	reduceRight<V>(callback: (accumulator: V | T, currentValue: T, currentItem: LinkedListItem<T>, list: this) => V, initialValue?: V | T): V | T {
		if (!this.last) {
			if (!initialValue) {
				throw new TypeError("Empty accumulator on empty LinkedList is not allowed.");
			}
			return initialValue;
		}
		let current: LinkedListItem<T> = this.last;
		// let accumulator: V | T;
		if (initialValue === undefined) {
			initialValue = current.value;
			if (!current.before)
				return initialValue;
			current = current.before;
		} else {
			initialValue = initialValue;
		}
		do {
			initialValue = callback(initialValue!, current!.value, current!, this);
		} while (current.before && (current = current.before));
		return initialValue!;
	}

	/**
	 * Runs callback for every entry and returns true immediately if call of callback returns truthy.
	 * @param callback called for every element. If response is truthy, iteration
	 * @param thisArg If set, callback is bound to this
	 * @returns `true` once a callback call returns truthy, `false` if none returned truthy.
	 */
	some(callback: (currentValue: T, item: LinkedListItem<T>, list: this) => boolean, thisArg?: any): boolean {
		if (thisArg) {
			callback = callback.bind(thisArg);
		}
		for (const [item, value] of this) {
			if (callback(value, item, this)) {
				return true;
			}
		}
		return false;
	}

	/**
	 * Joins values within this by given separator. Uses Array#join directly.
	 * @param separator separator to be used
	 * @see Array#join
	 */
	join(separator?: string): string {
		return [...this.values()].join(separator);
	}

	/**
	 * Concats given values and returns a new LinkedList with all given values.
	 * If LinkedList's are given, they will be spread.
	 * @param others Other values or lists to be concat'ed together
	 * @see Array#concat
	 */
	concat<V>(...others: (V | LinkedList<V>)[]): LinkedList<V | T> {
		const newList = new LinkedList<V | T>(this);
		for (const other of others) {
			if (other instanceof LinkedList)
				newList.push(...other.values());
			else
				newList.push(other);
		}
		return newList;
	}

	/**
	 * Current length of this LinkedList.
	 * Note that this does not work anymore if you for some reason add your own LinkedListItems to LinkedList by hand
	 */
	length: number = 0;

	/**
	 * Removes the last LinkedListItem and returns its inner value
	 */
	pop(): T | undefined {
		if (!this.last)
			return;
		const item = this.last;
		item.unlink();
		return item.value;
	}

	/**
	 * Adds given values on the end of this LinkedList
	 * @param values Values to be added
	 */
	push(...values: T[]) {
		for (const value of values) {
			const item = new LinkedListItem(value, this.unlinkCleanup);
			if (!this.first || !this.last) {
				this.first = this.last = item;
			} else {
				this.last.insertBehind(item);
				this.last = item;
			}
			this.length++;
		}
	}

	/**
	 * Adds given values to the beginning of this LinkedList
	 * @param values Values to be added
	 */
	unshift(...values: T[]) {
		for (const value of values) {
			const item = new LinkedListItem(value, this.unlinkCleanup);
			if (!this.last || !this.first) {
				this.first = this.last = item;
			} else {
				item.insertBehind(this.first);
				this.first = item;
			}
			this.length++;
		}
	}

	/**
	 * Removes first occurrence of value found.
	 * @param value value to remove from LinkedList
	 */
	remove(value: T): boolean {
		for (const item of this.keys()) {
			if (item.value === value) {
				item.unlink();
				return true;
			}
		}

		return false;
	}

	/**
	 * Removes every occurrance of value within this.
	 * @param value value to remove from LinkedList
	 */
	removeAllOccurrences(value: T): boolean {
		let foundSomethingToDelete = false;

		for (const item of this.keys()) {
			if (item.value === value) {
				item.unlink();
				foundSomethingToDelete = true;
			}
		}

		return foundSomethingToDelete;
	}

	/**
	 * Returns and removes first element from LinkedList
	 */
	shift(): T | undefined {
		if (!this.first)
			return;
		const item = this.first;
		item.unlink();
		return item.value;
	}

	/**
	 * Returns LinkedListItem and value for every entry of this LinkedList
	 */
	*[Symbol.iterator](): IterableIterator<[LinkedListItem<T>, T]> {
		if (!this.first) return;
		let current: LinkedListItem<T> = this.first;
		do {
			yield [current, current.value];
		} while (current.behind && (current = current.behind));
	}

	/**
	 * Returns only values.
	 * The "keys" in a LinkedList are actually the LinkedListItem's. I found them to be
	 * dangerous enough to avoid returning them here.
	 * @see LinkedList#keys
	 */
	entries() {
		return this[Symbol.iterator]();
	}

	/**
	 * Iterates the LinkedListItem's of this LinkedList
	 */
	*keys(): IterableIterator<LinkedListItem<T>> {
		if (!this.first) return;
		let current = this.first;
		do {
			yield current;
		} while (current.behind && (current = current.behind));
	}

	/**
	 * Returns a value for every entry of this LinkedList
	 */
	*values(): IterableIterator<T> {
		if (!this.first) return;
		let current: LinkedListItem<T> = this.first;
		do {
			yield current.value;
		} while (current.behind && (current = current.behind));
	}
}