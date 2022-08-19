import { GraphQLClient } from "graphql-request";
const graphqlApi = process.env.ENDPOINT;
const hygraph = new GraphQLClient(graphqlApi);
import { gql } from "graphql-request";

const request = async <T>(query: string): Promise<T> =>
    await hygraph.request(gql`
        ${query}
    `);

export default request;
