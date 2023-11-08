import type { APIRoute } from 'astro'

export const GET: APIRoute = async function ({ params }) {
  const { id } = params
  const apiBaseUrl = import.meta.env.API_OF_ICE_AND_FIRE

  try {
    const response = await fetch(`${apiBaseUrl}/houses/${id}`)
    const house = await response.json()

    // Prepare response headers
    const secondsInDay = 86400
    const inOneDay = new Date(Date.now() + secondsInDay * 1000).toUTCString()
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Cache-Control': `public, max-age=${secondsInDay}`,
      Expires: inOneDay,
    })

    return new Response(JSON.stringify(house), {
      headers,
    })
  } catch (error) {
    // TODO: Log error
    return new Response(
      JSON.stringify({ error: 'Error while fetching house data' }),
      { status: 500 }
    )
  }
}
