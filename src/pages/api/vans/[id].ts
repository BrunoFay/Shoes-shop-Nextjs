import { query as q } from 'faunadb'
import type { NextApiRequest, NextApiResponse } from 'next'
import { fauna } from '../../../libs/fauna'

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
  const vans: any = await fauna.query(
    q.Map(
      q.Paginate(q.Documents(q.Collection('Vans'))),
      q.Lambda('X', q.Get(q.Var('X'))),
    ),
  )
  const responseApi = vans.data
    .map((e: any) => ({ ...e.data }))
    .filter((e: any) => e.id === id)[0]

  return res.status(200).json(responseApi)
}
