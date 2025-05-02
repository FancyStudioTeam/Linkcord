/**
 * Creates a 404 response.
 * @returns The created 404 response instance.
 */
export const notFound = () =>
  new Response(null, {
    status: 404,
  });
