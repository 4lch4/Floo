/**
 * The root configuration object used when adding a new service configuration
 * to Floo. Services such as E-Mail will have a custom object that extends this
 * interface.
 */
export interface IServiceConfig {
  /** The unique name for this service configuration. */
  name: string

  /** A brief description of the service/configuration. */
  description: string

  /** The version of the service/configuration. */
  version: string
}
