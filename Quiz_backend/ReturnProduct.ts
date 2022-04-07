import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  DeleteDateColumn,
} from "typeorm";

@Entity()
export class ReturnProduct extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  _id!: string;
  @Column({ type: "text" })
  name!: string;
  @Column({ type: "text" })
  detail!: any;
  @Column({ type: "integer" })
  price!: number;
  @Column({ type: "text" })
  seller!: string;
  @Column({ type: "timestamp", default: new Date(), nullable: true })
  createdAt!: Date;

  @DeleteDateColumn()
  deletedAt!: Date;
}
