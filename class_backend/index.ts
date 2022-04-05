console.log("타입스크립트를 실행했어요");

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
// logging typeorm이 어떤 명령어로 데이터를 전해주는지 확인할 수 있음
AppDataSource.initialize()
  .then(() => {
    console.log("연결성공");
  })
  .catch(() => {
    console.log("연결실패");
  });
// 연결을 시도하는데 성공하면 .then 실패하면 .catch
