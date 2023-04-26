import { Author } from "../../db/models";
import { authorQueries, authorMutations } from "./author";
import authorFields from "./author/fields";
import { bookMutations, bookQueries } from "./book";
import bookFields from "./book/fields";
import { publisherMutations, publisherQueries } from "./publisher";
import publisherFields from "./publisher/fields";

const resolvers = {
  Query: {
    ...authorQueries,
    ...bookQueries,
    ...publisherQueries,
  },
  Mutation: {
    ...authorMutations,
    ...bookMutations,
    ...publisherMutations,
  },
  ...authorFields,
  ...bookFields,
  ...publisherFields,
};

export default resolvers;
