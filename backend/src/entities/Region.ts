import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity,
    OneToMany,
  } from "typeorm";
  import { ObjectType, Field, Int, InputType } from "type-graphql";
  import Country from "./Country";
  
  @Entity()
  @ObjectType()
  export default class Region extends BaseEntity {
    @PrimaryGeneratedColumn()
    @Field(() => Int)
    id: number;
  
    @Column()
    @Field()
    name: string;
  
    @OneToMany(() => Country, (country) => country.region)
    countries: Country[];
  }
  
