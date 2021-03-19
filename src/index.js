/*!
 * bytes-gzip/src/index.jss
 * e53e04ac <e53e04ac@gmail.com>
 * MIT License
 */

'use strict';

const zlib = require('zlib');

const { BytesGzip } = (() => {

    /** @typedef BytesGzipConstructorOptions @type {import('../types').BytesGzipConstructorOptions} */
    /** @typedef _BytesGzip @type {import('../types')._BytesGzip} */
    /** @typedef BytesGzip @type {import('../types').BytesGzip} */
    /** @typedef BytesGzipConstructor @type {import('../types').BytesGzipConstructor} */

    /** @type {BytesGzipConstructor}  */
    const BytesGzip = (options) => {

        /** @type {BytesGzipConstructorOptions}  */
        const _options = {};
        _options.flush = options.flush;
        _options.finishFlush = options.finishFlush;
        _options.chunkSize = options.chunkSize;
        _options.windowBits = options.windowBits;
        _options.level = options.level;
        _options.memLevel = options.memLevel;
        _options.strategy = options.strategy;
        _options.info = options.info;
        _options.maxOutputLength = options.maxOutputLength;

        /** @type {_BytesGzip}  */
        const _it = {};

        /** @type {BytesGzip}  */
        // @ts-ignore
        const it = zlib.createGzip({
            flush: _options.flush,
            finishFlush: _options.finishFlush,
            chunkSize: _options.chunkSize,
            windowBits: _options.windowBits,
            level: _options.level,
            memLevel: _options.memLevel,
            strategy: _options.strategy,
            info: _options.info,
            maxOutputLength: _options.maxOutputLength
        });
        it.BytesGzipConstructorOptions = () => {
            return _options;
        };
        it._BytesGzip = () => {
            return _it;
        };
        return it;

    };
    return { BytesGzip };

})();

module.exports = { BytesGzip };
