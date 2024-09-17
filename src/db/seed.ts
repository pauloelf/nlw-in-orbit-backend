import dayjs from "dayjs";
import { client, db } from ".";
import { goalCompletions, goals } from "./schema";

async function seed() {
  await db.delete(goalCompletions)
  await db.delete(goals)

  const result = await db.insert(goals).values([
    {title: 'Acordar cedo', desiredWeeklyFrequency: 3},
    {title: 'Comer um doce', desiredWeeklyFrequency: 1},
    {title: 'Ler livro', desiredWeeklyFrequency: 2},
    {title: 'Me exercitar', desiredWeeklyFrequency: 3}
  ]).returning()

  const startOfWeek = dayjs().startOf('week')

  await db.insert(goalCompletions).values([
    { goalId: result[1].id, createdAt: startOfWeek.toDate()},
    { goalId: result[3].id, createdAt: startOfWeek.add(3, 'day').toDate()},
  ])
}

seed().finally(() => {
  client.end()
})