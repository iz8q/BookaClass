import Class from '#models/class'
import ClassTransformer from '#transformers/class_transformer'
import type { HttpContext } from '@adonisjs/core/http'

export default class ClassesController {
  /**
   * Display a list of resource
   */
  async index({ inertia, request }: HttpContext) {
    return inertia.render('admin/classes/index', {
      classes: inertia.scroll(async () => {
        const page = request.input('page', 1)
        const classes = await Class.query().orderBy('id', 'asc').paginate(page, 10)
        return ClassTransformer.paginate(classes.all(), classes.getMeta())
      }),
    })
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
