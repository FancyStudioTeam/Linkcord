import type { Readable } from "node:stream";
import prism from "prism-media";

const { FFmpeg, opus } = prism;
const CHANNELS = 2;
const FRAME_SIZE = 960;
const RATE = 48000;
const FFMPEG_ARGS = [
  "-analyzeduration",
  "0",
  "-loglevel",
  "0",
  "-f",
  "s16le",
  "-ar",
  RATE.toString(),
  "-ac",
  CHANNELS.toString(),
];

/**
 * @public
 */
export class VoiceStreamTransformer {
  ffmpeg = new FFmpeg({
    args: FFMPEG_ARGS,
  });
  opus = new opus.Encoder({
    channels: CHANNELS,
    frameSize: FRAME_SIZE,
    rate: RATE,
  });

  transformToOpus(stream: Readable): Promise<Buffer> {
    return new Promise((resolve, reject) => {
      const chunks: Buffer[] = [];

      stream
        .pipe(this.ffmpeg)
        .pipe(this.opus)
        .on("data", (chunk: Buffer) => chunks.push(chunk))
        .on("end", () => {
          const concatedBuffer = Buffer.concat(chunks);

          resolve(concatedBuffer);
        })
        .on("error", (error) => reject(error));
    });
  }
}
