import { collection, getDocs } from 'firebase/firestore/lite'
import { db } from './clientApp'

export async function getSneakers(colName: string) {
  const sneakersCol = collection(db, colName)
  const sneakerSnapshot = await getDocs(sneakersCol)
  const sneakersList = sneakerSnapshot.docs.map((doc) => doc.data())
  return sneakersList
}
