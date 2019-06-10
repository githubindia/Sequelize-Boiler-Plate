const Express = require('express');
const app = Express();
const bodyParser = require('body-parser');
const Tempcard = require('./models/tempDetails')

const db = require('./config/database')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));

db.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

  // Tempcard.findAll()
  // .then(TEMPCARD_ID => console.log(TEMPCARD_ID))
  // .catch(err => console.log(err));

  // Tempcard.create({ EMP_ID: 12121, DATE: '2019-06-04', IN_TIME: '16:01:29', OUT_TIME: '17:01:29',   }).then(jane => {
  //   console.log("Jane's auto-generated ID:", jane.EMP_ID);
  // });
  
  Tempcard.findAll({
    attributes: ['EMP_ID'],
    where: {
      DATE: '2019-12-11'
    },
  })
  .then(res => console.log(res.length))
  .catch(err => console.log("Error retreiving data: " + err));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
