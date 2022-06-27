import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm'
import {Field, ObjectType} from 'type-graphql'

@Entity()
@ObjectType()
export class User {
  @Field()
  @PrimaryGeneratedColumn()
  id: number

  @Field()
  @Column()
  email: string

  @Column()
  password: string
}
