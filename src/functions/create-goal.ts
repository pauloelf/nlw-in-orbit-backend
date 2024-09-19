import { db } from "../db"
import { goals } from "../db/schema"

interface CreateGoalInterface {
  title: string
  desiredWeeklyFrequency: number
}

export async function createGoal(request: CreateGoalInterface) {
  const result = await db.insert(goals).values({...request}).returning()

  const goal = result[0]

  return {
    goal
  }
}