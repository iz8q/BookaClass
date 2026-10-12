import { DateTime } from 'luxon'
import factory from '@adonisjs/lucid/factories'
import Class from '#models/class'
import type { Faker } from '@faker-js/faker'

const generateRecurrenceRule = (faker: Faker): string | null => {
  if (faker.datatype.boolean({ probability: 0.1 })) {
    return null
  }

  const isWeekly = faker.datatype.boolean()

  if (isWeekly) {
    const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
    const day = faker.helpers.arrayElement(days)

    const hour = String(faker.number.int({ min: 6, max: 21 })).padStart(2, '0')
    const minute = String(faker.helpers.arrayElement([0, 15, 30, 45])).padStart(2, '0')

    return `weekly:${day}:${hour}:${minute}`
  } else {
    return faker.date.future().toISOString().split('T')[0]
  }
}

export const ClassFactory = factory
  .define(Class, async ({ faker }) => {
    return {
      title: faker.company.buzzPhrase(),
      description: faker.lorem.paragraph(),
      instructorName: faker.person.fullName(),
      capacity: faker.number.int({ min: 10, max: 50 }),
      startTime: DateTime.fromJSDate(faker.date.soon({ days: 30 })),
      durationMinutes: faker.helpers.arrayElement([30, 45, 60, 75, 90]),
      recurrenceRule: generateRecurrenceRule(faker),
    }
  })
  .build()
