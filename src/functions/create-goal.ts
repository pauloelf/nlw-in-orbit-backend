import { db } from "../db"
import { goals } from "../db/schema"

interface createGoalInterface {
  title: string
  desiredWeeklyFrequency: number
}

export async function createGoal(request: createGoalInterface) {
  const result = await db.insert(goals).values({...request}).returning()

  const goal = result[0]

  return {
    goal
  }
}