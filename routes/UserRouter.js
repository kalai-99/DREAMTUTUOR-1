import User from '../model/User';
import bcrypt from 'bcrypt';
import express from 'express';

const router = express.Router();
router.post('/user', (request, response) => {
      const user = new User({
         name :request.body.name,
         email :request.body.email,
         password : request.body.password,
         phone_no : request.body.phone_no 
      });
bcrypt.hash(user.password, 10, function (err, hash){
if (err) { 
    return next(err);
}
user.password = hash;
user.save().then(data => {
    console.log('Successfully created a new User');
}).catch(error => {
     // you can send an error code here
    })
  })
});

export default router;