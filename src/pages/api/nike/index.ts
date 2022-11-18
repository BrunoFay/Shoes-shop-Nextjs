// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { query as q } from 'faunadb'
import { fauna } from '../../../libs/fauna'
import type { NextApiRequest, NextApiResponse } from 'next'
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const { method } = req
    if (method !== 'GET') {
      return res.status(405).end(`Method ${method} Not Allowed`)
    }
    const nike: any = await fauna.query(
      q.Map(
        q.Paginate(q.Documents(q.Collection('Nike'))),
        q.Lambda('X', q.Get(q.Var('X'))),
      ),
    )
    const responseApi = nike.data.map((e: any) => ({ ...e.data }))

    return res.status(200).json(responseApi)
  } catch (error) {
    console.log(error)
  }
}
