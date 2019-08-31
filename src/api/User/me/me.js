import { prisma } from "../../../../generated/prisma-client";
import { USER_FRAGMENT } from "../../../fragments";

export default {
  Query: {
    me: async (_, __, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { user } = request;
      return await prisma.user({ id: user.id });
    }
  }
  // ,
  // User: {
  //   fullName: parent => {
  //     return `${parent.firstName} ${parent.lastName}`;
  //   }
  // }
  // parent를 활용하여 데이터베이스 컬럼없이 fullName을 리턴할 수 있다
  // src/models.graphql에는 fullName을 추가해주어야 함
};
