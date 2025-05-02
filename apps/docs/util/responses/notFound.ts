/**
 * Creates a "Not Found" response.
 * @returns The created response instance.
 */
export const notFound = (data = "Not Found") =>
  new Response(data, {
    status: 404,
    statusText: data,
  });
