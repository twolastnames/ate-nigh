import { Meilisearch } from "meilisearch";

const dbName = process.env.AN_DBNAME || "an_test";
export const dbUri = `${process.env.AN_DBORIGIN || "mongodb://127.0.0.1:27017"}/${dbName}`;

const client = new Meilisearch({
  host: process.env.MEILI_ORIGIN || "http://127.0.0.1:7700",
  apiKey: process.env.MEILI_MASTER_KEY || "realMasterKey123",
});

export const descriptionIndex = client.index(dbName);
