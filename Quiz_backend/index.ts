import { DataSource } from "typeorm";
import { Board } from "./Board.postgres";

const AppDataSource = new DataSource({
  type: "postgres",
  host: "34.64.124.189",
  port: 5023,
  username: "postgres",
  password: "postgres2021",
  database: "postgres",
  entities: [Board],
  synchronize: true,
  logging: true,
});

AppDataSource.initialize()
  .then(() => {
    console.log("연결에 성공했습니다.");
  })
  .catch(() => {
    console.log("연결에 실패했습니다.");
  });
