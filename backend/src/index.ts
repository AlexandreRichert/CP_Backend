import "reflect-metadata";
import express, { Request, Response } from "express";
import db from "./db";
import Country from "./entities/Country";
import Region from "./entities/Region";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { buildSchema } from "type-graphql";
import CountryResolver from "./resolvers/CountryResolver";
import RegionResolver from "./resolvers/RegionResolver";

buildSchema({ resolvers: [CountryResolver,RegionResolver] }).then((schema) => {
    db.initialize();
    const server = new ApolloServer({ schema });
  startStandaloneServer(server, {
    listen: { port: 4001 },
  }).then(({ url }) => {
    console.log(`server ready on ${url}`);
  });
});

