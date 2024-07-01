import {
    Entity,
    BaseEntity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    Column,
    ManyToOne,
    JoinTable,
    ManyToMany,
  } from "typeorm";
  import { ObjectType, Field, Int, InputType } from "type-graphql";
  import Region from "./Region";
  
  @Entity()
  @ObjectType()
  export default class Country extends BaseEntity {
    @PrimaryGeneratedColumn()
    @Field(() => Int)
    id: number;
  
    @Column({ length: 50 })
    @Field()
    code: string;
  
    @Column({ nullable: true, type: "text" })
    @Field()
    name: string;
  
    @Column()
    @Field()
    emoji: string;
    
    @ManyToOne(() => Region, (r) => r.countries, {
      cascade: true,
      onDelete: "CASCADE",
    })
    @Field()
    region: Region;
  
  }
  
