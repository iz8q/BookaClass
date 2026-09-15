import { adminAccess } from '#abilities/main'
import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'

export default class AdminMiddleware {
  async handle({ bouncer }: HttpContext, next: NextFn) {
    await bouncer.authorize(adminAccess)

    await next()
  }
}
