const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");
const db = require('./models/index');
const app = express();
const sequelize=require('./config/db');
const { Op } = require("sequelize");

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

app.get("/getResult", async (req, res) => {
  console.log(req.query?.types);
  try {
    const transaction = await db.sequelize.transaction();

    const types=req.query?.types || [];
    try {
      const travel = await db.travel.findAll({ transaction, logging: console.log, where: {
        type: {
          [Op.in]: types,
        },
      },
    });
      //console.log(travel);
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
