import { createOpenGraphImage } from "#util/functions/createOpenGraphImage";

export const loader = async () => {
  const dynamicImage = await createOpenGraphImage();

  return new Response(dynamicImage, {
    headers: {
      "Content-Type": "image/svg+xml",
    },
  });
};
