import { Resolver, Query, Arg, Mutation, Int } from "type-graphql";
import Country from "../entities/Country";
import { GraphQLError } from "graphql";
import { In, Like } from "typeorm";

@Resolver(Country)
class CountryResolver {
  @Query(() => [Country])
  async countries(
    @Arg("regionId", () => Int, { nullable: true }) regionID?: number,
    @Arg("title", { nullable: true }) title?: string
  ) {
    return Country.find({
      relations: { region: true },
    });
  }


}

export default CountryResolver;