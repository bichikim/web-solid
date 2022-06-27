import {config} from 'src/config'
import * as entities from 'src/entities'
import {DataSource} from 'typeorm'
import {Container, Token} from 'typedi'
import {EntityTarget} from 'typeorm/common/EntityTarget'

export const dataSource = new DataSource({
  database: config.db.database,
  entities: Object.values(entities),
  host: config.db.host,
  password: config.db.password,
  port: 3306,
  synchronize: config.db.synchronize,
  type: 'mysql',
  username: config.db.username,
})

export const USER_REPOSITORY = new Token('user-repository')

Container.set(USER_REPOSITORY, dataSource.getRepository(entities.User))

export function InjectRepository<Entity>(entity: EntityTarget<Entity>) {
  return (object: any, propertyName: string, index?: number) => {
    Container.registerHandler({
      index,
      object,
      propertyName,
      value: () => {
        return dataSource.getRepository(entity)
      },
    })
  }
}
