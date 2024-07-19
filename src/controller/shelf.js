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
}
