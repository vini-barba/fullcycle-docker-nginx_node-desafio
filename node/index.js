const express = require("express");
const config = {
  host: "db",
  user: "root",
  password: "root",
  database: "nodedb",
};
const mysql = require("mysql");
const conn = mysql.createConnection(config);

const app = express();

app.get("/", async (req, res) => {
  const { name = "dev fullcycle" } = req.query;
  const query = `INSERT INTO people(name) values('${name}');`;

  await conn.query(query);
  conn.query("SELECT * FROM people;", (err, result, fields) => {
    const nameList = result.map((user) => `<li>${user.name}</li>`);
    const page = `<h1>Full Cycle Rocks!</h1>
    <ul>${nameList.join("\n")}</ul>`;

    return res.send(page);
  });
});

app.listen(3000, () => {
  console.log("listen...\n");
});
