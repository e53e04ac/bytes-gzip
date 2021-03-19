/*!
 * bytes-gzip/types/index.d.ts
 * e53e04ac <e53e04ac@gmail.com>
 * MIT License
 */

import stream from 'stream';

type BytesGzipConstructorOptions = {
    flush?: number;
    finishFlush?: number;
    chunkSize?: number;
    windowBits?: number;
    level?: number;
    memLevel?: number;
    strategy?: number;
    info?: boolean;
    maxOutputLength?: number;
};

type _BytesGzip = {

};

type BytesGzip = stream.Transform & {
    BytesGzipConstructorOptions: {
        (): BytesGzipConstructorOptions;
    };
    _BytesGzip: {
        (): _BytesGzip;
    };
};

type BytesGzipConstructor = {
    (options: BytesGzipConstructorOptions): BytesGzip;
};

export const BytesGzip: BytesGzipConstructor;
