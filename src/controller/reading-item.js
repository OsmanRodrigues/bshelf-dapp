import { ReadingItem } from '../model/reading-item';
import { RollupStateHandler } from '../shared/rollup-state-handler';
import { shelfStorage } from '../storage/shelf';

export class ReadingItemController {
    /**
     * ### ReadingItemController addReadingItem
     * @description add a reading item to a given shelf.
     * @param {*} required {shelf: UUID, title: string}
     * @param {*} notRequired {description: string, content: string, contentType: plainText | url | html}
     */
    async addReadingItem(data) {
        if (!data.shelf || !data.title) {
            return await RollupStateHandler.handleReport({
                error: 'Shelf id and title must be provided.',
            });
        }

        const shelf = shelfStorage.getOneById(data.shelf);

        if (!shelf.id) {
            return await RollupStateHandler.handleReport({
                error: `Shelf not found for id '${data.shelf}'`,
            });
        }

        return await RollupStateHandler.advanceWrapper(() => {
            const newReadingItem = new ReadingItem(data);
            shelf.addItem(newReadingItem);
            shelfStorage.updateOne(shelf);

            return {
                ok: true,
                message: `Reading item added successfully to shelf '${shelf.id}'!`,
                data: newReadingItem.getData(),
            };
        });
    }

    /**
     * ### ReadingItemController getItemById
     * @description get a shelf item by a given both shelf and item id.
     * @param {*} data shelf id (UUID)
     */
    async getItemById(data) {
        const shelfId = data[0];
        const storageRequest = shelfStorage.getOneById(shelfId);

        if (!storageRequest?.id)
            return await RollupStateHandler.handleReport({
                error: `Shelf not found for id '${shelfId}'.`,
            });

        const itemId = data[1];
        const item = storageRequest.getItemById(itemId);

        if (!item?.id)
            return await RollupStateHandler.handleReport({
                error: `Shelf item not found for id '${itemId}'.`,
            });

        return await RollupStateHandler.inspectWrapper(() => ({
            details: item,
        }));
    }
}
