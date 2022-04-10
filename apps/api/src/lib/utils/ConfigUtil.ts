import { readJSON } from 'fs-extra'
import { join } from 'path'

export class ConfigUtil {
  private getFilePath(name: string): string {
    return join(__dirname, '..', '..', '..', 'configs', `${name}.json`)
  }

  async getConfig<T>(name: string): Promise<T> {
    const fileContent = await readJSON(this.getFilePath(name))

    return fileContent as T
  }
}
