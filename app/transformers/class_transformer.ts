import { BaseTransformer } from '@adonisjs/core/transformers'
import Class from '#models/class'

export default class ClassTransformer extends BaseTransformer<Class> {
  toObject() {
    return this.pick(this.resource, Class.$columns)
  }
}
