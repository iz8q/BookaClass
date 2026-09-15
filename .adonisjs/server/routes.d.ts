import '@adonisjs/core/types/http'

type ParamValue = string | number | bigint | boolean

export type ScannedRoutes = {
  ALL: {
    'home': { paramsTuple?: []; params?: {} }
    'classes.index': { paramsTuple?: []; params?: {} }
    'classes.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'new_account.create': { paramsTuple?: []; params?: {} }
    'new_account.store': { paramsTuple?: []; params?: {} }
    'session.create': { paramsTuple?: []; params?: {} }
    'session.store': { paramsTuple?: []; params?: {} }
    'session.destroy': { paramsTuple?: []; params?: {} }
    'admin.dashboard': { paramsTuple?: []; params?: {} }
    'admin.classes.index': { paramsTuple?: []; params?: {} }
    'admin.classes.create': { paramsTuple?: []; params?: {} }
    'admin.classes.store': { paramsTuple?: []; params?: {} }
    'admin.classes.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'admin.classes.edit': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'admin.classes.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'admin.classes.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  GET: {
    'home': { paramsTuple?: []; params?: {} }
    'classes.index': { paramsTuple?: []; params?: {} }
    'classes.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'new_account.create': { paramsTuple?: []; params?: {} }
    'session.create': { paramsTuple?: []; params?: {} }
    'admin.dashboard': { paramsTuple?: []; params?: {} }
    'admin.classes.index': { paramsTuple?: []; params?: {} }
    'admin.classes.create': { paramsTuple?: []; params?: {} }
    'admin.classes.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'admin.classes.edit': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  HEAD: {
    'home': { paramsTuple?: []; params?: {} }
    'classes.index': { paramsTuple?: []; params?: {} }
    'classes.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'new_account.create': { paramsTuple?: []; params?: {} }
    'session.create': { paramsTuple?: []; params?: {} }
    'admin.dashboard': { paramsTuple?: []; params?: {} }
    'admin.classes.index': { paramsTuple?: []; params?: {} }
    'admin.classes.create': { paramsTuple?: []; params?: {} }
    'admin.classes.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'admin.classes.edit': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  POST: {
    'new_account.store': { paramsTuple?: []; params?: {} }
    'session.store': { paramsTuple?: []; params?: {} }
    'session.destroy': { paramsTuple?: []; params?: {} }
    'admin.classes.store': { paramsTuple?: []; params?: {} }
  }
  PUT: {
    'admin.classes.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  PATCH: {
    'admin.classes.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  DELETE: {
    'admin.classes.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
}
declare module '@adonisjs/core/types/http' {
  export interface RoutesList extends ScannedRoutes {}
}