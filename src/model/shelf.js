import crypto from 'node:crypto';

export class Shelf {
    id;
    owner;
    createdAt;
    items;

    /**
     
     * ### Shelf model required data

     * owner: address (eg.: "0x...")
     
    */
    constructor(owner) {
        this.id = crypto.randomUUID();
        this.owner = owner;
        this.createdAt = Date.now();
        this.items = new Map();
    }

    /**
     * ### Shelf getData
     
     * return shelf basic data.

     * id: UUID

     * owner: address (eg.: "0x...")

     * createdAt: number

     */
    getData() {
        return {
            id: this.id,
            owner: this.owner,
            createdAt: this.createdAt,
        };
    }

    /**
     * ### Shelf getItems
     
     * return all reading items from the shelf.

     * item: ReadingItem model

     */
    getItems() {
        return Array.from(this.items.values());
    }

    /**
     * ### Shelf addItem
     
     * add a single item to the shelf.

     * item: ReadingItem model

     */
    addItem(item) {
        this.items.set(item.id, item);
    }
}
