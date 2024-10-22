class ShelfStorage {
    shelfs;

    constructor() {
        this.shelfs = new Map();
    }

    /**
     * ### ShelfStorage getAll
     * @description get all stored shelfs.
     * @returns {*} list ShelfModel[ ]
     */
    getAll() {
        return Array.from(this.shelfs.values());
    }

    /**
     * ### ShelfStorage addOne
     * @description store a single shelf.
     * @param {*} shelf ShelfModel
     */
    addOne(shelf) {
        this.shelfs.set(shelf.id, shelf);
    }

    /**
     * ### ShelfStorage getOneById
     * @description get a single shelf given an id.
     * @param {*} id UUID
     * @returns ShelfModel | undefined (not found)
     */
    getOneById(id) {
        return this.shelfs.get(id);
    }

    /**
     * ### ShelfStorage updateOne
     * @description update a single shelf.
     * @param {*} shelf ShelfModel
     */
    updateOne(shelf) {
        this.shelfs.set(shelf.id, shelf);
    }
}

export const shelfStorage = new ShelfStorage();
