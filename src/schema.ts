export const typeDefs = `

type Sentence {
    _id: Int,
    text: String
}

type Query {
    getSentence(_id:Int):Sentence
}

type Mutation {
    saveSentence(text: String): Sentence
}`;
