import { adminAccess } from '#abilities/main'
import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'

export default class AdminMiddleware {
  async handle({ bouncer, session, inertia, response }: HttpContext, next: NextFn) {
    if (await bouncer.denies(adminAccess)) {
      session.flash('error', 'Access Denied')

      if (inertia?.requestInfo().isInertiaRequest) {
        inertia.location('/')
        return response
      }

      return response.redirect().toPath('/')
    }

    await next()
  }
}
