import type { APIRoute } from 'astro'

export const GET: APIRoute = async function ({ params }) {
  const { query } = params
  // API allows max 50 entries per page, so we need to fetch 9 pages
  const pages = Array.from({ length: 9 }, (_, i) => i + 1)
  const apiBaseUrl = import.meta.env.API_OF_ICE_AND_FIRE

  try {
    const allHouses = await Promise.all(
      pages.map((pageNum) =>
        fetch(`${apiBaseUrl}/houses?pageSize=50&page=${pageNum}`).then(
          (response) => response.json()
        )
      )
    )
    // Filter houses by query
    const safeQuery = query?.toLowerCase()
    const houses = allHouses
      .flat()
      .filter((house) => house.name.toLowerCase().includes(safeQuery))

    // Prepare response headers
    const secondsInDay = 86400
    const inOneDay = new Date(Date.now() + secondsInDay * 1000).toUTCString()
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Cache-Control': `public, max-age=${secondsInDay}`,
      Expires: inOneDay,
    })

    return new Response(
      JSON.stringify({
        houses,
      }),
      {
        headers,
      }
    )
  } catch (error) {
    // TODO: Log error
    return new Response(
      JSON.stringify({ error: 'Error while fetching house data' }),
      { status: 500 }
    )
  }
}
