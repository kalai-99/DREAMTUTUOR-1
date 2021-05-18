import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import router from './routes/UserRouter';

var app = express();
app.listen(6000, () => {
   console.log('Server listening on 6000');
})

mongoose
  .connect('mongodb://localhost/dreamtutordb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log('Connected to mongodb.');
  })
  .catch((error) => {
    console.log(error.reason);
  });

app.use( bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/users',router);
