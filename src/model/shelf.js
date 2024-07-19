import crypto from 'node:crypto';

export class Shelf {
    id;
    owner;
    createdAt;
    items;

    /**
     * ### Shelf model required data
     * @param {*} owner address (eg.: "0x...")
     */
    constructor(owner) {
        this.id = crypto.randomUUID();
        this.owner = owner;
        this.createdAt = Date.now();
        this.items = new Map();
    }

    /**
     * ### Shelf getData
     * @description returns shelf basic data.
     * @returns shelf { 
            id: UUID, owner: 
            address (eg.: "0x..."), 
            createdAt: number 
        }
     */
    getData() {
        return {
            id: this.id,
            owner: this.owner,
            createdAt: this.createdAt,
        };
    }

    /**
     * ### Shelf getItemById
     * @description return an shelf item given an id.
     * @returns ReadingItemModel
     */
    getItemById(id) {
        return this.items.get(id);
    }

    /**
     * ### Shelf getItems
     * @description return all reading items from the shelf.
     * @returns ReadingItemModel[ ]
     */
    getItems() {
        return Array.from(this.items.values());
    }

    /**
     * ### Shelf addItem
     * @description add a single item to the shelf.
     * @param {*} item ReadingItemModel
     */
    addItem(item) {
        this.items.set(item.id, item);
    }
}
