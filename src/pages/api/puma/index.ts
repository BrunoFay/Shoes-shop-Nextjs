// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { query as q } from 'faunadb'
import type { NextApiRequest, NextApiResponse } from 'next'
import { fauna } from '../../../libs/fauna'
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const { method } = req
    if (method !== 'GET') {
      return res.status(405).end(`Method ${method} Not Allowed`)
    }
    const puma: any = await fauna.query(
      q.Map(
        q.Paginate(q.Documents(q.Collection('Puma'))),
        q.Lambda('X', q.Get(q.Var('X'))),
      ),
    )
    const responseApi = puma.data.map((e: any) => ({ ...e.data }))

    return res.status(200).json(responseApi)
  } catch (error) {
    console.log(error)
  }
}
