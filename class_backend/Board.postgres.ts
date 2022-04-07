import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from "typeorm";

// entity는 함수이고 이 함수 안에 Board 안에 있는 인자를 넣어줌
@Entity()
export class Board extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  number!: number;

  @Column({ type: "text" })
  writer!: string;

  @Column({ type: "text" })
  title!: string;

  @Column({ type: "text" })
  contents!: string;

  // deletedAt : Date // soft-delete
}

// 데이터베이스에 들어갈 타입도 지정해줘야함({type:"text"})
// PrimaryGener 중복되지않은 자동으로 증가하는 Column, increment가 아니라 uuid(중복되지않는 id)를 써줌
