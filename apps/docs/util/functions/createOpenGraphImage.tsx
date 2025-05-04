import { Resvg, initWasm } from "@resvg/resvg-wasm";
// import { Canvg } from "canvg";
// import { Resvg } from "@resvg/resvg-js";
import satori from "satori";

export const createOpenGraphImage = async (): Promise<Uint8Array> => {
  const { default: extraBoldFont } = await import("./fonts/JetBrainsMono_ExtraBold.ttf?arraybuffer");
  const jsx = <div>Hello, world!</div>;
  const svg = await satori(jsx, {
    fonts: [
      {
        data: extraBoldFont,
        name: "JetBrainsMono_ExtraBold",
      },
    ],
    height: 720,
    width: 1280,
  });

  await initWasm(await fetch("https://unpkg.com/@resvg/resvg-wasm/index_bg.wasm"));

  const resvg = new Resvg(svg);
  const render = resvg.render();
  const png = render.asPng();

  return png;

  /*const resvg = new Resvg(svg);
  const render = resvg.render();
  const png = render.asPng();*/

  /*const canvas = new OffscreenCanvas(1280, 720);
  const context = canvas.getContext("2d");

  if (!context) {
    return Buffer.alloc(0);
  }

  const data = Canvg.fromString(context, svg);

  await data.render();

  const blobImage = await canvas.convertToBlob({
    type: "image/png",
  });
  const arrayBuffer = await blobImage.arrayBuffer();
  const image = Buffer.from(arrayBuffer);

  return image;*/
};
