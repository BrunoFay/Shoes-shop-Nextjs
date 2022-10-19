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
    const filterType = req.query.filter

    if (filterType) {
      const allSneakersCategory = await prisma.sneakers.findMany({
        where: {
          title: { contains: String(filterType), mode: 'insensitive' },
        },
        skip: Number(page) * sneakersPerPage,
        take: 50,
      })

      return res.status(200).json(allSneakersCategory)
    }
    const allSneakers = await prisma.sneakers.findMany({
      skip: Number(page) * sneakersPerPage,
      take: 50,
    })

    return res.status(200).json(allSneakers)
  } catch (error) {
    console.log(error)
  }
}
