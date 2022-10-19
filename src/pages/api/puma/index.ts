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

    const filterType = req.query.filter

    if (filterType) {
      const pumaCategory = await prisma.puma.findMany({
        where: {
          title: { contains: String(filterType), mode: 'insensitive' },
        },
      })

      return res.status(200).json(pumaCategory)
    }
    const puma = await prisma.puma.findMany({})

    return res.status(200).json(puma)
  } catch (error) {
    console.log(error)
  }
}
