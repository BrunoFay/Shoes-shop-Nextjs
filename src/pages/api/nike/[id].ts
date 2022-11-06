import type { NextApiRequest, NextApiResponse } from 'next'
import { getSneakers } from '../../../libs/firebase/functions'

export default async function userHandler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const {
    query: { id },
    method,
  } = req

  if (method !== 'GET') {
    return res.status(405).end(`Method ${method} Not Allowed`)
  }
  if (id) {
    const nike = await getSneakers('Nike')
    const nikeFiltered = nike.filter((sneaker) => sneaker.id === id)[0]
    return res.status(200).json(nikeFiltered)
  }
}
