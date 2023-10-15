import neo4j from "neo4j-driver";
import dotenv from "dotenv";

dotenv.config();

const DB_URL = process.env.DB_URL || "";
const DB_USER = process.env.DB_USER || "";
const DB_PASSWORD = process.env.DB_PASSWORD || "";

const driver = neo4j.driver(DB_URL, neo4j.auth.basic(DB_USER, DB_PASSWORD), {
  disableLosslessIntegers: true,
});

export async function GET(request: Request) {
  const session = driver.session();

  try {
    const res = await session.run("MATCH (p:Person) RETURN p LIMIT 25");
    const people = res.records.map((record) => record.get("p"));
    return new Response(JSON.stringify(people), {
      headers: { "content-type": "application/json" },
    });
  } catch (error) {
    console.log(error);
  } finally {
    await session.close();
  }
}
