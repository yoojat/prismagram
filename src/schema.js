import { makeExecutableSchema } from "graphql-tools";
import { fileLoader, mergeResolvers, mergeTypes } from "merge-graphql-schemas";
import path from "path";

// api폴더 밑의 모든 폴더에 속해 있고, graphql로 끝나는 모들 파일을 가지고 옴
const allTypes = fileLoader(path.join(__dirname, "/api/**/*.graphql"));
// 마찬가지 js파일을 가지고 옴
const allResolvers = fileLoader(path.join(__dirname, "/api/**/*.js"));
// api폴더 밑에는 resolver가 아닌 js파일을 두면 안됨

// schema만들기
const schema = makeExecutableSchema({
  typeDefs: mergeTypes(allTypes),
  resolvers: mergeResolvers(allResolvers)
});

export default schema;
