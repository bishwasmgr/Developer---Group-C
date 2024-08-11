const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

// 定义 GraphQL 架构
const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// 定义根解析器
const root = {
  hello: () => {
    return 'Hello, world!';
  },
};

// 创建 Express 应用
const app = express();

// 将 GraphQL 中间件连接到 Express 应用
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true, // 启用 GraphiQL UI，用于在浏览器中测试 GraphQL 查询
}));

// 启动服务器
app.listen(4000, () => {
  console.log('Running a GraphQL API server at http://localhost:4000/graphql');
});
