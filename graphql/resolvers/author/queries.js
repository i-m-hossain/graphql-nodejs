import { Author } from "../../../db/models";

const authorQueries = {
  authors: async (_, args, { loaders }) => {
    const authors = await Author.find();
    return loaders.author.many(authors.map(({ id }) => id));
  },
  author: async (_, { id }, { loaders }) => {
    // const author = await Author.findById(id);
    return loaders.author.one(id);
  },
};

export default authorQueries;
