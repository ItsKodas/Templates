// External Dependencies
import Config from '@lib/config'
import * as Crypto from 'crypto'

import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as cookieParser from 'cookie-parser'
import * as session from 'express-session'


const app = express()
export default app

export function init() {
    app.listen(Config.port, () => console.log(`Listening on port ${Config.port}`))

    app.use(bodyParser.json({ extended: true }))
    app.use(cookieParser())

    app.set('trust proxy', 'loopback')
    app.set('view engine', 'ejs')

    app.use(express.static('public'))

    app.use(session({
        secret: Crypto.randomBytes(30).toString('base64url'),
        resave: false,
        saveUninitialized: true,
        cookie: { secure: true }
    }))
}