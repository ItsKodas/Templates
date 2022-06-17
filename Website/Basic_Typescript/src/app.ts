//!
//! Initialization
//!

import app from '@app/express'
import {init as ExpressInit} from '@app/express'
ExpressInit()

import {connect as MongoConnect} from '@app/mongo'
MongoConnect()



//!
//! Middleware
//!



//!
//! Routes
//!

app.get('/', (req, res) => {
    res.render('pages/index')
})



//!
//! Api
//!