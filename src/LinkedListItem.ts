
export default class LinkedListItem<T> {

	behind: LinkedListItem<T> | undefined;
	before: LinkedListItem<T> | undefined;

	constructor(public value: T, protected unlinkCleanup?: (item: LinkedListItem<T>) => void) {
	}

	protected insertBefore(before: LinkedListItem<T>) {
		this.before = before;
		if (!this.unlinkCleanup) this.unlinkCleanup = before.unlinkCleanup;
	}

	insertBehind(item: LinkedListItem<T>) {
		item.insertBefore(this);

		if (this.behind) {
			let itemChainEnd = item;
			while (itemChainEnd.behind) {
				itemChainEnd = itemChainEnd.behind;
			}
			this.behind.insertBefore(itemChainEnd);
			itemChainEnd.insertBehind(this.behind);
		}
		this.behind = item;
	}
	
	unlink() {
		if (this.before)
			this.before.behind = this.behind;
		if (this.behind)
			this.behind.before = this.before;
		this.unlinkCleanup && this.unlinkCleanup(this);
		this.unlinkCleanup = undefined;
	}

}