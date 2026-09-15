/* eslint-disable prettier/prettier */
import type { routes } from './index.ts'

export interface ApiDefinition {
  home: typeof routes['home']
  classes: {
    index: typeof routes['classes.index']
    show: typeof routes['classes.show']
  }
  newAccount: {
    create: typeof routes['new_account.create']
    store: typeof routes['new_account.store']
  }
  session: {
    create: typeof routes['session.create']
    store: typeof routes['session.store']
    destroy: typeof routes['session.destroy']
  }
  admin: {
    dashboard: typeof routes['admin.dashboard']
    classes: {
      index: typeof routes['admin.classes.index']
      create: typeof routes['admin.classes.create']
      store: typeof routes['admin.classes.store']
      show: typeof routes['admin.classes.show']
      edit: typeof routes['admin.classes.edit']
      update: typeof routes['admin.classes.update']
      destroy: typeof routes['admin.classes.destroy']
    }
  }
}
