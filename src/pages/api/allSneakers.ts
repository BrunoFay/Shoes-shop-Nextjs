// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../libs/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const adidas = await prisma.adidas.findMany()
    console.log(adidas)

    /* res.status(200).json({ name: sneakers }) */
  } catch (error) {
    console.log(error)
  }
}