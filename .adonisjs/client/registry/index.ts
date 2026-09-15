/* eslint-disable prettier/prettier */
import type { AdonisEndpoint } from '@tuyau/core/types'
import type { Registry } from './schema.d.ts'
import type { ApiDefinition } from './tree.d.ts'

const placeholder: any = {}

const routes = {
  'home': {
    methods: ["GET","HEAD"],
    pattern: '/',
    tokens: [{"old":"/","type":0,"val":"/","end":""}],
    types: placeholder as Registry['home']['types'],
  },
  'classes.index': {
    methods: ["GET","HEAD"],
    pattern: '/classes',
    tokens: [{"old":"/classes","type":0,"val":"classes","end":""}],
    types: placeholder as Registry['classes.index']['types'],
  },
  'classes.show': {
    methods: ["GET","HEAD"],
    pattern: '/classes/:id',
    tokens: [{"old":"/classes/:id","type":0,"val":"classes","end":""},{"old":"/classes/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['classes.show']['types'],
  },
  'new_account.create': {
    methods: ["GET","HEAD"],
    pattern: '/signup',
    tokens: [{"old":"/signup","type":0,"val":"signup","end":""}],
    types: placeholder as Registry['new_account.create']['types'],
  },
  'new_account.store': {
    methods: ["POST"],
    pattern: '/signup',
    tokens: [{"old":"/signup","type":0,"val":"signup","end":""}],
    types: placeholder as Registry['new_account.store']['types'],
  },
  'session.create': {
    methods: ["GET","HEAD"],
    pattern: '/login',
    tokens: [{"old":"/login","type":0,"val":"login","end":""}],
    types: placeholder as Registry['session.create']['types'],
  },
  'session.store': {
    methods: ["POST"],
    pattern: '/login',
    tokens: [{"old":"/login","type":0,"val":"login","end":""}],
    types: placeholder as Registry['session.store']['types'],
  },
  'session.destroy': {
    methods: ["POST"],
    pattern: '/logout',
    tokens: [{"old":"/logout","type":0,"val":"logout","end":""}],
    types: placeholder as Registry['session.destroy']['types'],
  },
  'admin.dashboard': {
    methods: ["GET","HEAD"],
    pattern: '/admin',
    tokens: [{"old":"/admin","type":0,"val":"admin","end":""}],
    types: placeholder as Registry['admin.dashboard']['types'],
  },
  'admin.classes.index': {
    methods: ["GET","HEAD"],
    pattern: '/admin/classes',
    tokens: [{"old":"/admin/classes","type":0,"val":"admin","end":""},{"old":"/admin/classes","type":0,"val":"classes","end":""}],
    types: placeholder as Registry['admin.classes.index']['types'],
  },
  'admin.classes.create': {
    methods: ["GET","HEAD"],
    pattern: '/admin/classes/create',
    tokens: [{"old":"/admin/classes/create","type":0,"val":"admin","end":""},{"old":"/admin/classes/create","type":0,"val":"classes","end":""},{"old":"/admin/classes/create","type":0,"val":"create","end":""}],
    types: placeholder as Registry['admin.classes.create']['types'],
  },
  'admin.classes.store': {
    methods: ["POST"],
    pattern: '/admin/classes',
    tokens: [{"old":"/admin/classes","type":0,"val":"admin","end":""},{"old":"/admin/classes","type":0,"val":"classes","end":""}],
    types: placeholder as Registry['admin.classes.store']['types'],
  },
  'admin.classes.show': {
    methods: ["GET","HEAD"],
    pattern: '/admin/classes/:id',
    tokens: [{"old":"/admin/classes/:id","type":0,"val":"admin","end":""},{"old":"/admin/classes/:id","type":0,"val":"classes","end":""},{"old":"/admin/classes/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['admin.classes.show']['types'],
  },
  'admin.classes.edit': {
    methods: ["GET","HEAD"],
    pattern: '/admin/classes/:id/edit',
    tokens: [{"old":"/admin/classes/:id/edit","type":0,"val":"admin","end":""},{"old":"/admin/classes/:id/edit","type":0,"val":"classes","end":""},{"old":"/admin/classes/:id/edit","type":1,"val":"id","end":""},{"old":"/admin/classes/:id/edit","type":0,"val":"edit","end":""}],
    types: placeholder as Registry['admin.classes.edit']['types'],
  },
  'admin.classes.update': {
    methods: ["PUT","PATCH"],
    pattern: '/admin/classes/:id',
    tokens: [{"old":"/admin/classes/:id","type":0,"val":"admin","end":""},{"old":"/admin/classes/:id","type":0,"val":"classes","end":""},{"old":"/admin/classes/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['admin.classes.update']['types'],
  },
  'admin.classes.destroy': {
    methods: ["DELETE"],
    pattern: '/admin/classes/:id',
    tokens: [{"old":"/admin/classes/:id","type":0,"val":"admin","end":""},{"old":"/admin/classes/:id","type":0,"val":"classes","end":""},{"old":"/admin/classes/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['admin.classes.destroy']['types'],
  },
} as const satisfies Record<string, AdonisEndpoint>

export { routes }

export const registry = {
  routes,
  $tree: {} as ApiDefinition,
}

declare module '@tuyau/core/types' {
  export interface UserRegistry {
    routes: typeof routes
    $tree: ApiDefinition
  }
}
