import { Author } from "../../../db/models";

const authorQueries = {
  authors: async (_, { params = { page: 1, pageSize: 2 } }, { loaders }) => {
    const { page, pageSize } = params;
    return {
      results: async () => {
        const authors = await Author.find()
          .skip(pageSize * (page - 1))
          .limit(pageSize);
        return loaders.author.many(authors.map(({ id }) => id));
      },
      info: async () => {
        const count = await Author.countDocuments();

        const pages = Math.ceil(count / pageSize);
        const prev = page > 1 ? page - 1 : null;
        const next = page < pages ? page + 1 : null;

        return {
          count,
          pages,
          prev,
          next,
        };
      },
    };
  },
  author: async (_, { id }, { loaders }) => {
    // const author = await Author.findById(id);
    return loaders.author.one(id);
  },
};

export default authorQueries;
