import { Resolver, Query, Arg, Mutation, Int } from "type-graphql";
import Country from "../entities/Country";
import { GraphQLError } from "graphql";
import { In, Like } from "typeorm";

@Resolver(Country)
class CountryResolver {
  @Query(() => [Country])
  async countries(
    @Arg("regionId", () => Int, { nullable: true }) regionID?: number,
    @Arg("code", { nullable: true }) code?: string
  ) {
    return Country.find({
      relations: { region: true },
    });
  }
  
  @Query(() => Country)
  async getCountryById(@Arg("countryId", () => Int) id: number) {
    const country = await Country.findOne({
      where: { id },
      relations: { region: true},
    });
    if (!country) throw new GraphQLError("not found");
    return country;
  }

  @Mutation(() => Country)
  async createCountry(
    @Arg("code") code: string,
    @Arg("name") name: string,
    @Arg("emoji") emoji: string
  ) {
    const country = Country.create({ code, name, emoji });
    await country.save();
    return country;
  }
}

export default CountryResolver;