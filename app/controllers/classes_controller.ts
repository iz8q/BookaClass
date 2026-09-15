import type { HttpContext } from '@adonisjs/core/http'

export default class ClassesController {
  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {
    return 'classes'
  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {
    return 'class record'
  }
}
