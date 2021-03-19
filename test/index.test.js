/*!
 * bytes-gzip/test/index.test.js
 * e53e04ac <e53e04ac@gmail.com>
 * MIT License
 */

'use strict';

const stream = require('stream');

const chai = require('chai');

describe('index.js', async () => {

    const { BytesGzip } = require('../');

    it('coverage', async () => {

        const input = new stream.Readable({
            objectMode: false,
            read: (size) => {
                input.push(Buffer.from([0]));
                input.push(null);
            }
        });

        const bytesGzip = BytesGzip({});
        bytesGzip.BytesGzipConstructorOptions();
        bytesGzip._BytesGzip();

        const output = new stream.Writable({
            objectMode: false,
            write: (chunk, encoding, callback) => {
                callback();
            }
        });

        await new Promise((resolve, reject) => {
            stream.pipeline([
                input,
                bytesGzip,
                output
            ], (error) => {
                if (error != null) {
                    reject(error);
                } else {
                    resolve();
                }
            });
        });

    });

});
