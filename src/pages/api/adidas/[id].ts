import { query as q } from 'faunadb'
import { fauna } from '../../../libs/fauna'
import type { NextApiRequest, NextApiResponse } from 'next'

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
  const adidas: any = await fauna.query(
    q.Map(
      q.Paginate(q.Documents(q.Collection('Adidas'))),
      q.Lambda('X', q.Get(q.Var('X'))),
    ),
  )
  const responseApi = adidas.data
    .map((e: any) => ({ ...e.data }))
    .filter((e: any) => e.id === id)[0]
  return res.status(200).json(responseApi)
}
