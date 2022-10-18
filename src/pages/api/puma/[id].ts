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
  const puma = await prisma.puma.findUnique({
    where: {
      id: id as string,
    },
  })
  return res.status(200).json(puma)
}
