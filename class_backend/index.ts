console.log("타입스크립트를 실행했어요");

import { DataSource } from "typeorm";
import { Board } from "./Board.postgres";
import { ApolloServer, gql } from "apollo-server";

// 1. 타입
const typeDefs = gql`
  input CreateBoardInput {
    writer: String
    title: String
    contents: String
  }

  type Board {
    number: Int
    writer: String
    title: String
    contents: String
  }

  type Query {
    fetchBoards: [Board]
  }

  type Mutation {
    # createBoard: (writer:String,title:String,contents:String): String - 연습용(example)
    createBoard(createBoardInput: CreateBoardInput!): String #실제사용(backend06)
  }
`;

// 2. API
const resolvers = {
  Query: {
    fetchBoards: async () => {
      const result = await Board.find();
      return result;
    },
  },
  Mutation: {
    createBoard: async (_: any, args: any) => {
      await Board.insert({
        ...args.createBoardInput,
        // writer: args.createBoardInput.writer,
        // title: args.createBoardInput.title,
        // contents: args.createBoardInput.contents,
      });
      // // 수정하기
      // Board.update({ writer: "철수" }, { title: "제목2" });
      // // 삭제하기
      // Board.delete({ writer: "철수" });
      // Board.update({ writer: "철수" }, {deletedAt:new Date()}; => softDelete
      // return "게시물을 등록했습니다.!!";
      // // 데이터베이스에 접속해서 게시물 등록하기
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  cors: true,
});

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
    // 백엔드 API를 오픈(24시간동안 접속가능하게끔 대기상태로 만들어주기) => rest api를 쓴다면 express,nest.js 같은 프레임워크가 있다.
    server.listen(5252).then(({ url }) => {
      console.log(`🚀 Server ready at ${url}`);
    });
  })
  .catch(() => {
    console.log("연결실패");
  });
// 연결을 시도하는데 성공하면 .then 실패하면 .catch
