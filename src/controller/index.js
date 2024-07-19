import { ReadingItemController } from './reading-item';
import { ShelfController } from './shelf';

const shelfController = new ShelfController();
const readingItemController = new ReadingItemController();

export const controller = {
    createShelf: shelfController.createShelf,
    getAllShelfs: shelfController.getAllShelfs,
    getShelfById: shelfController.getShelfById,
    addReadingItem: readingItemController.addReadingItem,
    getItemById: readingItemController.getItemById,
};
