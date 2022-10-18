// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../libs/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const { method } = req
    if (method !== 'GET') {
      return res.status(405).end(`Method ${method} Not Allowed`)
    }
    const page = req.query.p || 0
    const sneakersPerPage = 50
    const category = req.query.c

    if (category) {
      const vansCategory = await prisma.vans.findMany({
        where: {
          title: { contains: String(category), mode: 'insensitive' },
        },
        skip: Number(page) * sneakersPerPage,
        take: 50,
      })

      return res.status(200).json(vansCategory)
    }

    const vans = await prisma.vans.findMany({
      skip: Number(page) * sneakersPerPage,
      take: 50,
    })
    console.log(vans.length)

    res.status(200).json(vans)
  } catch (error) {
    console.log(error)
  }
}
