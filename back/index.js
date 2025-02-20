const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");
const db = require('./models/index');
const app = express();
const sequelize=require('./config/db');

app.use(cors());
app.use(bodyParser.json());

app.use(express.json({ limit: '500kb' }));

db.sequelize.sync({ alter: true }) 
  .then(() => {
    console.log('Database synced');
  })
  .catch(err => {
    console.error('Error syncing database:', err);
  });

db.sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

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

// app.get("/search", async (req, res) => {
//   //console.log('запрос успешен /api/search');
//   //console.log('req', req);
//   const departureCity = req.query.departureCity | undefined;;
//   const typeRest = req.query.typeRest | undefined;;
  
//  try {
//   const result = await travel.findAll({ where: {city: departureCity, type: typeRest } });
//   res.json(result);
//   } catch (error) {
//   console.error('Ошибка при получении данных:', error);
//   res.status(500).json({ message: 'Ошибка сервера', error });
//  }

// console.log(req.query,departureCity,typeRest);
//   res.json([]);
// });

// app.post("/getResult", async (req, res) => {
//   try {
//   const result = await travel.findAll({ where: {city: departureCity, type: typeRest } });
//   res.json(result);
//   } catch (error) {
//   console.error('Ошибка при получении данных:', error);
//   res.status(500).json({ message: 'Ошибка сервера', error });
//  }
//   }
// );

// app.get("/getResult", async (req, res) => {
//   const transaction = await db.sequelize.transaction();
//   const travel = await db.travel.findAll({ 
//       transaction
//  });
//  console.log(travel);
//  res.json(travel);
//  }
// );
// 
// app.post("/getResult", async (req, res) => {
//   try {
//     const NewTravel = {name:'Райлей',
//        photo:'https://www.sunny-trip.ru/wp-content/uploads/2018/01/thailand.jpg',
//        description:'Тайский райский полуостров Райлей знаменит своими поражающими воображение пляжами и «вырастающими» из морских вод скалами-островами. Белоснежный песок, прозрачная вода и поразительная красота природы вокруг-отдых станет поистине незабываемым',
//        geo:'Таиланд, провинция Краби',
//        type: 1, 
//     climate: 6, 
//     21, 
//     NULL, '{''Москва,Санкт-Петербург,Екатеринбург,Новосибирск''}
//     const transaction = await db.sequelize.transaction();

//     try {
//       const travel = await db.travel.findAll({ transaction });
//       console.log(travel);
//       res.json(travel);
//       await transaction.commit();
//     } catch (error) {
//       console.error("Error fetching travel data:", error);
//       await transaction.rollback();
//       res.status(500).json({ error: 'Failed to fetch travel data' });
//     }

//   } catch (error) {
//     console.error("Error starting transaction:", error);
//     res.status(500).json({ error: 'Failed to start transaction' }); 
//   }
// });

app.get("/getResult", async (req, res) => {
  try {
    const transaction = await db.sequelize.transaction();

    try {
      const travel = await db.travel.findAll({ transaction, logging: console.log, where: {type: 1 }});
      console.log(travel);
      res.json(travel);
      await transaction.commit();
    } catch (error) {
      console.error("Error fetching travel data:", error);
      await transaction.rollback();
      res.status(500).json({ error: 'Failed to fetch travel data' });
    }

  } catch (error) {
    console.error("Error starting transaction:", error);
    res.status(500).json({ error: 'Failed to start transaction' }); 
  }
});

app.listen(3000, () => {
  console.log("API is listening on port 3000");
});
