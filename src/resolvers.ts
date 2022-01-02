let sentences = [
  { _id: 0, text: "Vivons heureux, vivons cachés." },
  {
    _id: 1,
    text: "Il n'y a pas de raccourci, c'est toujours une marche après l'autre.",
  },
  { _id: 2, text: "Posséder ce n'est pas avoir, c'est obtenir." },
];

export const resolvers = {
  Query: {
    getSentence: async (obj: any, args: any, context: any, info: any) => {
      const [sentence] = sentences.filter((each) => each._id === args._id);
      return sentence;
    },
  },
  Mutation: {
    saveSentence: async (obj: any, args: any, context: any, info: any) => {
      const sentence = { ...args, _id: sentences.length };
      sentences.push(sentence);
      return sentence;
    },
  },
};
