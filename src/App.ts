import * as express from 'express'
import routes from './routes/index';
import * as bodyParser from 'body-parser';

class App {
  public express

  constructor () {
    this.express = express()
    this.express.use(bodyParser.json())
    this.express.use(bodyParser.urlencoded({ extended: true }))
    this.mountRoutes()
  }

  private mountRoutes (): void {
    this.express.use('/', routes)
  }
}

export default new App().express
