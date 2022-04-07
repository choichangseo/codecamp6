import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from "typeorm";

@Entity()
export class Return extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  _id!: string;
  @PrimaryGeneratedColumn("increment")
  number!: number;
  @Column({ type: "text" })
  message!: string;
}
