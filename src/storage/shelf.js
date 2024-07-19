class ShelfStorage {
    shelfs;

    constructor() {
        this.shelfs = new Map();
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
     * @returns ShelfModel
     */
    getOneById(id) {
        return this.shelfs.get(id);
    }
}

export const shelfStorage = new ShelfStorage();
