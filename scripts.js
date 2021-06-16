require('dotenv').config()

const cors = require('cors')
const mongoose = require('mongoose')
const express = require('express')
const morgan = require('morgan')

const { router } = require('./api/routes/router.js')

const api = express()

api
  .use(cors())
  .use(morgan('dev'))
  .use(express.json())
  .use('/api', router)
  .listen(process.env.PORT || 2222, (err) => {
    if (err) {
      throw new Error(err)
    }
    mongoose
      .connect(process.env.MONGO_URL,
        {
          dbName: process.env.MONGO_DB,
          useNewUrlParser: true,
          useCreateIndex: true,
          useUnifiedTopology: true,
          useFindAndModify: false
        }, err => {
          if (err) { throw new Error(err) }
          console.info('Connected to Mongo Database \n')
          console.info('>'.repeat(40))
          console.info('   Reboot Server Live')
          console.info(`   PORT: http://localhost:${process.env.PORT}`)
          console.info('>'.repeat(40) + '\n')
        })
  })
