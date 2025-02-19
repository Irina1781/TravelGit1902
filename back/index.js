const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");
const util = require("util");
const app = express();

app.use(cors());
app.use(bodyParser.json());


//   let connection = mysql.createConnection({
//   host: "vip41.hostiman.ru",
//   port: 3306,
//   user: "travel",
//   password: "mG738i7ReVmj8kZU",
//   database: "travel",
// });

// connection.connect((err) => {
//   if (err) {
//     console.error(
//       `Невозможно соединиться с базой данных: ${util.inspect(err)}`
//     );
//     process.exit(1);
//   }
//   console.log("Подключено к базе данных");
// });

app.get("/search", async (req, res) => {
  //console.log('запрос успешен /api/search');
  //console.log('req', req);
  const departureCity = req.query.departureCity | undefined;;
  const typeRest = req.query.typeRest | undefined;;
  
 try {
  const result = await travel.findAll({ where: {city: departureCity, type: typeRest } });
  res.json(result);
  } catch (error) {
  console.error('Ошибка при получении данных:', error);
  res.status(500).json({ message: 'Ошибка сервера', error });
 }

  console.log(req.query,departureCity,typeRest);
  res.json([]);
});

app.post("/getResult", async (req, res) => {
  try {
  const result = await travel.findAll({ where: {city: departureCity, type: typeRest } });
  res.json(result);
  } catch (error) {
  console.error('Ошибка при получении данных:', error);
  res.status(500).json({ message: 'Ошибка сервера', error });
 }

  }
);

app.listen(3000, () => {
  console.log("API is listening on port 3000");
});
