import { hexToString } from 'viem';

const rollup_server = process.env.ROLLUP_HTTP_SERVER_URL;
console.log('HTTP rollup_server url is ' + rollup_server);

async function handle_advance(
    /**
     *Incoming advance data common schema:
     *{
     *  "metadata": {
     *      "msg_sender": "0x...",
     *      "epoch_index": number,
     *      "input_index": number,
     *      "block_number": number,
     *      "timestamp": number
     *  },
     *  "payload": "0x..."
     *}
     */
    data
) {
    console.log('Received advance raw data ->', JSON.stringify(data));
    const payload = hexToString(data.payload);
    console.log('request payload -> ' + payload);

    return 'accept';
}

async function handle_inspect(
    /**
     *Incoming inspect data common schema:
     *{"payload": "0x..."}
     */
    data
) {
    console.log('Received inspect raw data ->', JSON.stringify(data));
    const payload = hexToString(data.payload);
    console.log('request payload -> ' + payload);

    return 'accept';
}

var handlers = {
    advance_state: handle_advance,
    inspect_state: handle_inspect,
};

var finish = { status: 'accept' };

(async () => {
    while (true) {
        const finish_req = await fetch(rollup_server + '/finish', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ status: 'accept' }),
        });

        console.log('Received finish status ' + finish_req.status);

        if (finish_req.status == 202) {
            console.log('No pending rollup request, trying again');
        } else {
            const rollup_req = await finish_req.json();
            var handler = handlers[rollup_req['request_type']];
            finish['status'] = await handler(rollup_req['data']);
        }
    }
})();
