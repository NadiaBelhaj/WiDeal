const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();

//const swaggerJSDoc =require('swagger-jsdoc');
//const swaggerUi=require('swagger-ui-express');



/*const swaggerOptions = {
    swaggerDefinition: {
      info: {
        version: "1.0.0",
        title: "iLab API",
        description: "Seat and Materials Reservation App",
        contact: {
          name: "Fact Check"
        },
        servers: ["http://localhost:3000"]
      }
    },
    // ['.routes/*.js']
    apis:['./routes/*.js']
  };

  const swaggerDocs =swaggerJSDoc(swaggerOptions);
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
  */
  
  //PIM
const UtilisateurRoute=require('./routes/utilisateur')
const AuthentificationRoute=require('./routes/authentification')

const coinsRoute=require('./routes/coins')
const coinsController=require('./controllers/CoinsController')

const favorieRoute=require('./routes/favori')
const favorieController=require('./controllers/FavorieController')

const nftRoute=require('./routes/Nft')
const nftController=require('./controllers/NftController')

const offerRoute=require('./routes/offer')
const offerController=require('./controllers/OffersController')

const partnerRoute=require('./routes/partners')
const partnerController=require('./controllers/PartnersController')

const requestRoute=require('./routes/request')
const requestController=require('./controllers/RequestController')

const reservationRoute=require('./routes/reservationOffer')
const reservationController=require('./controllers/ReservationofferController')

const reviewRoute=require('./routes/review')
const reviewController=require('./controllers/ReviewController')

const supportRoute=require('./routes/support')
const supportController=require('./controllers/SupportController')

const voucherRoute=require('./routes/voucher')
const voucherController=require('./controllers/VoucherController')


const reclamationRoute=require('./routes/reclamation')
const ReclamationController=require('./controllers/ReclamationController')

//************** */


mongoose.connect('mongodb://localhost:27017/pimdb',{useNewUrlParser: true, useUnifiedTopology: true})
//mongoose.connect('mongodb+srv://root:root@cluster0.ohxro.mongodb.net/test',{ UseUnifiedTopology:true})

const db = mongoose.connection

db.on('error',(err) => {
    console.log(err)
    console.log("Error")
})


db.once('open', () => {
    console.log('Database Connection Established!')
})


app.use(morgan('dev'))

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000

/*app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});*/

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))

app.use('/api/authentification', AuthentificationRoute)
app.use('/api/utilisateur', UtilisateurRoute)


//PIM
app.use('/api/favorie', favorieRoute)
app.use('/api/coins', coinsRoute)
app.use('/api/nft', nftRoute)
app.use('/api/offer', offerRoute)
app.use('/api/partner', partnerRoute)
app.use('/api/request', requestRoute)
app.use('/api/reservation', reservationRoute)
app.use('/api/review', reviewRoute)
app.use('/api/support', supportRoute)
app.use('/api/voucher', voucherRoute)
app.use('/api/reclamation', voucherRoute)




//app.use('/api/reserverchaise', reservationchaiseRoute)

