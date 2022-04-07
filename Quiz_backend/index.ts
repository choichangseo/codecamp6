import { DataSource } from "typeorm";
import { ApolloServer, gql } from "apollo-server";
import { ReturnProduct } from "./ReturnProduct";
import { Return } from "./Return";
import { argsToArgsConfig } from "graphql/type/definition";

const typeDefs = gql`
  type Query {
    fetchProducts: [ReturnProduct!]
    fetchProduct(productId: String): [ReturnProduct!]
  }
  input CreateProductInput {
    name: String
    detail: String
    price: Int
  }

  input UpdateProductInput {
    name: String
    detail: String
    price: Int
  }

  type ReturnProduct {
    seller: String
    name: String
    detail: String
    price: Int
    _id: String
    createdAt: String
  }

  type Return {
    seller: String
    name: String
    detail: String
    price: Int
  }

  type Mutation {
    createProduct(
      seller: String
      createProductInput: CreateProductInput!
    ): String
  }
  type Mutation {
    deleteProduct(productId: String): String
  }
  type Mutation {
    updateProduct(
      productId: String
      updateProductInput: UpdateProductInput!
    ): String
  }
`;

const resolvers = {
  Query: {
    fetchProduct: async (_: any, args: any) => {
      const result = await ReturnProduct.find({
        where: { _id: args.productId },
      });
      return result;
    },
    fetchProducts: async (_: any, args: any) => {
      const result = await ReturnProduct.find({
        where: { _id: args.productId },
      });
      return result;
    },
  },
  Mutation: {
    createProduct: async (_: any, args: any) => {
      await ReturnProduct.insert({
        seller: args.seller,
        ...args.createProductInput,
      });
      return "상품등록완료";
    },
    updateProduct: async (_: any, args: any) => {
      await ReturnProduct.update(
        { _id: args.productId },
        { ...args.updateProductInput }
      );
      return "상품수정완료";
    },
    deleteProduct: async (_: any, args: any) => {
      await ReturnProduct.update(
        { _id: args.productId },
        { deletedAt: new Date() }
      );
      return "삭제완료";
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
  entities: [ReturnProduct, Return],
  synchronize: true,
  logging: true,
});

AppDataSource.initialize()
  .then(() => {
    console.log("연결에 성공했습니다.");
    server.listen(4000).then(({ url }) => {
      console.log(`🚀 Server ready at ${url}`);
    });
  })
  .catch(() => {
    console.log("연결에 실패했습니다.");
  });
