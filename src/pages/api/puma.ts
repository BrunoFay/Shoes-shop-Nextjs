// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../libs/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const puma = await prisma.puma.findMany({})
    console.log(puma.length)

    res.status(200).json(puma)
  } catch (error) {
    console.log(error)
  }
}
