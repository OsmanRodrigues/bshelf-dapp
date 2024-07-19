import { Shelf } from '../model/shelf';
import { RollupStateHandler } from '../shared/rollup-state-handler';
import { shelfStorage } from '../storage/shelf';

export class ShelfController {
    /**
     * ### ShelfController createShelf
     * @description create a shelf.
     * @param {*} data {owner: address ("0x...")}
     */
    async createShelf(data) {
        return await RollupStateHandler.advanceWrapper(() => {
            const newShelf = new Shelf(data.owner);
            shelfStorage.addOne(newShelf);

            return {
                ok: true,
                message: `Shelf created successfully!`,
                data: newShelf.getData(),
            };
        });
    }

    /**
     * ### ShelfController getAllShelfs
     * @description get all shelfs.
     */
    async getAllShelfs() {
        return await RollupStateHandler.inspectWrapper(() =>
            shelfStorage.getAll()
        );
    }

    /**
     * ### ShelfController getShelfById
     * @description get a shelf by given id.
     * @param {*} data shelf id (UUID)
     */
    async getShelfById(data) {
        const shelfId = data[0];
        const storageRequest = shelfStorage.getOneById(shelfId);

        if (!storageRequest?.id)
            return await RollupStateHandler.handleReport({
                error: `Shelf not found for id '${shelfId}'.`,
            });

        return await RollupStateHandler.inspectWrapper(() => ({
            data: {
                details: storageRequest.getData(),
                items: storageRequest.getItems(),
            },
        }));
    }
}
