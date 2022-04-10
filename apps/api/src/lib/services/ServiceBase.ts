import { IServiceConfig } from '../../interfaces'

export abstract class ServiceBase {
  constructor(protected serviceConfig: IServiceConfig) { }

  /**
   * The function executed by all services. Returns unimplemented error by default.
   */
  execute(..._input: any): Promise<any> {
    return new Promise((_resolve, reject) => {
      reject(new Error('Unimplemented'))
    })
  }
}
