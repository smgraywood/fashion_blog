import dotenv from "dotenv";
import pgp from "pg-promise";

const db = initDb();

export const getBlog = () => db.any("SELECT * FROM fashion_blog");

export const addBlog = ({ season, image_url, image_description, date }) =>
  db.one(
    "INSERT INTO fashion_blog(season, image_url, image_description, date) VALUES($1, $2, $3, $4) RETURNING *",
    [season, image_url, image_description, date],
  );

  export const addPost = async ({
    season, image_url, image_description, date
  }) => 
    await db.any(
      "INSERT INTO fashion_blog(season, image_url, image_description, date) VALUES(${season}, ${image_url}, ${image_description}, ${date}",
        season, image_url, image_description, date
    );
   
export const updateBlog = ({ season, image_url, image_description, date }, id) =>
  db.one(
    "UPDATE fashion_blog set Season=*thing1, image_url=*thing2, image_description=*thing3, date=*thing4 WHERE id=*thing5 RETURNING *",
    [season, image_url, image_description, date],
  );

function initDb() {
  let connection;

  if (process.env.DATABASE_URL === undefined) {
    dotenv.config({ path: "../.env" });
    connection = {
      user: "postgres",
      database: process.env.POSTGRES_DB,
      password: process.env.POSTGRES_PASSWORD,
      port: 5442,
    };
  } else {
    connection = {
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false },
    };
  }

  return pgp()(connection);
}
