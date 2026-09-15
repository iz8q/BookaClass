import type { HttpContext } from '@adonisjs/core/http'

export default class ClassesController {
  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {
    return 'admin classes'
  }

  /**
   * Display form to create a new record
   */
  async create({}: HttpContext) {
    return 'create class'
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request }: HttpContext) {}

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {
    return 'class record'
  }

  /**
   * Edit individual record
   */
  async edit({ params }: HttpContext) {
    return 'edit class'
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request }: HttpContext) {}

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {}
}
