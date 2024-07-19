import { ROLLUP_SERVER } from './config';
import { toHex } from 'viem';

export class RollupStateHandler {
    /**
     * ### RollupStateHandler advanceWrapper
     * @description wrapps advance state handling logics.
     * @param {*} callback controller action
     * @returns Promise[status: accept | reject]
     */
    static async advanceWrapper(callback) {
        try {
            const result = await callback();
            const bodyFallback = result ?? undefined;
            const noticeResponse = await fetch(`${ROLLUP_SERVER}/notice`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    payload: toHex(JSON.stringify(bodyFallback)),
                }),
            });
            const noticeResponseText = await noticeResponse.text();

            if (noticeResponse.status >= 400) {
                throw {
                    message: noticeResponseText,
                    status: noticeResponse.status,
                };
            }

            console.info(
                `Notice generated with status: ${noticeResponse.status}.`
            );
            console.info(`Notice response: ${noticeResponseText}`);
            console.info(`Notice data: ${JSON.stringify(bodyFallback)}`);

            return 'accept';
        } catch (err) {
            return this.handleReport(err);
        }
    }

    static inspectWrapper() {}

    /**
     * ### RollupStateHandler handleReport
     * @description encapsulate and reuse of report sending logics.
     * @param {*} error any
     * @param {*} rollupServer string
     * @returns Promise[reject]
     */
    static async handleReport(error, rollupServer = ROLLUP_SERVER) {
        const reportResponse = await fetch(`${rollupServer}/report`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                payload: toHex(JSON.stringify(error)),
            }),
        });

        console.error(
            `Report generated with status: ${reportResponse.status}.`
        );
        console.error(`Report cause: ${JSON.stringify(error)}`);

        return 'reject';
    }
}
