import { IDBConfig } from "./IDBConfig"

export interface IAppConfig {
  name: string
  version: string
  port: number
  apiPrefix: string

  /** 
   * The settings necessary to access the MongoDB, which is where the service
   * configurations are stored.
   */
  dbConfig: IDBConfig
}
