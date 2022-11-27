// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { query as q } from 'faunadb'
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
    /*     const page = req.query.p || 0
    const sneakersPerPage = 50
    const filterType = req.query.filter
    console.log(filterType)

    if (filterType) {
      const sneaker: any = await fauna.query(
        q.Get(q.Match(q.Index('title'), q.Exp('blue'))),
      )
       const responseApi = sneaker.data.map((e: any) => ({ ...e.data }))

            return res.status(200).json(responseApi)
    }
 */
    const allSneakers: any = await fauna.query(
      q.Map(
        q.Paginate(q.Documents(q.Collection('AllSneakers'))),
        q.Lambda('X', q.Get(q.Var('X'))),
      ),
    )
    const responseApi = allSneakers.data.map((e: any) => ({ ...e.data }))

    return res.status(200).json(responseApi)
  } catch (error) {
    console.log(error)
  }
}
