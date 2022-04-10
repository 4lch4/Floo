import Router from '@koa/router'
import { Health } from './Health'
import { SendEndpoint } from './Send'

const Endpoints = [Health, SendEndpoint]

export function getRoutes(): Router[] {
  const routes: Router[] = []

  for (const Endpoint of Endpoints) routes.push(new Endpoint().build())

  return routes
}
