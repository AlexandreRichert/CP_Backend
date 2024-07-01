import { Resolver, Mutation, Arg, Query } from "type-graphql";
import { GraphQLError } from "graphql";
import { Like } from "typeorm";
import Region from "../entities/Region";

@Resolver(Region)
class RegionResolver {
//   @Mutation(() => Region)
//   async createRegion(
//     @Arg("data", { validate: true }) data: NewRegionInput
//   ) {
//     const newRegion = new Region();
//     Object.assign(newRegion, data);
//     const newRegionWithId = await newRegion.save();
//     return newRegionWithId;
//   }
  @Query(() => [Region])
  async regions(@Arg("name", { nullable: true }) name: string) {
    return await Region.find({
      where: { name: name ? Like(`%${name}%`) : undefined },
      order: { id: "desc" },
    });
  }
}
export default RegionResolver;