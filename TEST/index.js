const { get } = require("./pkg/config");
require("./pkg/db");
const express = require("express");
const jwt = require("express-jwt");
const {
  listAll,
  add,
  listOne,
  update,
  updatePartial,
  deleteUser,
} = require("./handlers");

const app = express();

app.use(express.json());
// app.use(
//   jwt({ secret: get("service").jwt_key, algorithms: ["HS256"] }).unless({
//     path: ["/api/v1/portable-computer"],
//   })
// );

app.get("/api/v1/portable-computer", listAll);
app.post("/api/v1/portable-computer", add);
app.get("/api/v1/portable-computer/:id", listOne);
app.put("/api/v1/portable-computer/:id", update);
app.patch("/api/v1/portable-computer/:id", updatePartial);
app.delete("/api/v1/portable-computer/:id", deleteUser);

// app.use(function (err, req, res, next) {
//   if (err.name === "UnauthorizedError") {
//     res.status(401).send("invalid token...");
//   }
// });

app.listen(get("service").port, (err) => {
  if (err) throw err;
  console.log(`Server listening on port ${get("service").port}`);
});
