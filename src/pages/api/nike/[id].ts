import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../libs/prisma'

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
  if (id) {
    const nike = await prisma.nike.findUnique({
      where: {
        id: id as string,
      },
    })
    res.status(200).json(nike)
  }
}
