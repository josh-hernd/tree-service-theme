import type { RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request }) => {

  const body = await request.json(); // or .json(), or .text(), .formbody()

  if (!body.honeypot) {
    try {
      return new Response(JSON.stringify(body), {
        headers: {
          'Content-Type': 'application/json'
        },
        status: 201
      });
    } catch (error) {
      return new Response('Error parsing JSON content', { status: 400 });
    }
  } else {

    return new Response("Sorry! Spam messages are not accepted.", {
      headers: {
        'Content-Type': 'application/json'
      },
      status: 403
    });
  }

}