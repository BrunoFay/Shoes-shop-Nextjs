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

    const productsCount = await prisma.sneakers.count()
    const skip = Math.floor(Math.random() * productsCount)
    const random = await prisma.sneakers.findMany({
      take: 4,
      skip,
      orderBy: {
        id: 'desc',
      },
    })
    return res.status(200).json(random)
  } catch (error) {
    console.log(error)
  }
}
