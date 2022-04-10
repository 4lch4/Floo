import { Successful } from '@4lch4/koa-oto'
import { logger } from '@4lch4/logger'
import { RouterContext } from '@koa/router'
import { AppRiseUtil, BaseEndpoint } from '../lib'

const getServiceNames = (ctx: RouterContext) => {
  return {
    source: ctx.params.sourceService,
    destination: ctx.params.destinationService
  }
}

export class SendEndpoint extends BaseEndpoint {
  private endpoint = '/send/:sourceService/:destinationService'

  async getMethod(ctx: RouterContext) {
    try {
      const services = getServiceNames(ctx)
      const arUtil = new AppRiseUtil()
      const arRes = await arUtil.sendMessage(services.source, services.destination)

      logger.info(JSON.stringify(services, null, 2))
      logger.info(JSON.stringify(arRes, null, 2))

      Successful.ok(ctx)
    } catch (error) {
      throw error
    }
  }

  build() {
    this.router.post(this.endpoint, (ctx: any) => this.getMethod(ctx))
    this.router.get(this.endpoint, (ctx: any) => this.getMethod(ctx))

    return this.router
  }
}
