/**
 * Creates an "Internal Server Error" response.
 * @returns The created response instance.
 */
export const notFound = (data = "Internal Server Error") =>
  new Response(data, {
    status: 500,
    statusText: data,
  });
