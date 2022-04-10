import { logger } from '@4lch4/logger'
import { execa } from 'execa'

/** A utility class for interacting with the Apprise CLI. */
export class AppRiseUtil {
  async sendMessage(_source: string, ..._input: any) {
    const res = await execa('apprise', ['-v'])

    logger.info(JSON.stringify(res, null, 2))
  }
}
