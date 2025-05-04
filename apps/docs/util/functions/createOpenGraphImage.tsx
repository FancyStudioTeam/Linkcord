// import { Resvg } from "@resvg/resvg-js";
import satori from "satori";

export const createOpenGraphImage = async (): Promise<string> => {
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
  /*const resvg = new Resvg(svg);
  const render = resvg.render();
  const png = render.asPng();*/

  return svg;
};
