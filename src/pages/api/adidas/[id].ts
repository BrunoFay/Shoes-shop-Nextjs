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
  const adidas = await getSneakers('Adidas')
  const adidasFiltered = adidas.filter((sneaker) => sneaker.id === id)[0]

  return res.status(200).json(adidasFiltered)
}
