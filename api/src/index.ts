import mongoose from 'mongoose';
import express from 'express';

import session  from 'express-session';
import connectRedis from 'connect-redis';
import Redis from 'ioredis';
import {MONGO_URI, MONGO_OPTIONS, REDIS_OPTIONS, APP_PORT} from './config'
import {createApp} from './app'

const uri = 'mongodb+srv://dinodzo:K3aHHYE5g689amRd@cluster0-4vdzn.mongodb.net/auth?retryWrites=true&w=majority'

;( async () => {
  try {

    await mongoose.connect(uri, MONGO_OPTIONS);

    const RedisStore = connectRedis(session);

    const client = new Redis(REDIS_OPTIONS);

    const store = new RedisStore({ client });

    const app = createApp(store)

    app.listen(APP_PORT, () => console.log('server started...'))

}catch (error) {
      console.log(error)
  }

})()

