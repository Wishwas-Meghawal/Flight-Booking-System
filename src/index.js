const express = require('express');

const { ServerConfig } = require('./config');
const apiRoutes = require('./routes');
const { where } = require('sequelize');
const { City } = require('./models');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', apiRoutes);



app.listen(ServerConfig.PORT, async () => {
    console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);


    // bad code alert
    //const {City,Airport} = require('./models');
    //const chicago = await City.findByPk(1);
    //console.log(chicago);
   // const airports = await Airport.create({name:'Chicago  International Airport',code:'CHI',cityId:1});
  // const iataairport = await chicago.createAirport({name:'Chicago Midway International Airport',code:'MDW'});
   //console.log(iataairport);

//    await City.destroy({
//     where:{
//         id: 1
//     }
//    })
});
  