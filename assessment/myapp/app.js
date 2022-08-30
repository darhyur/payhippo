const express = require('express')
const bodyParser = require('body-parser');
const chooseLanguage = require('./handlers/chooseLanguage');
// deepcode ignore UseCsurfForExpress: <please specify a reason of ignoring this>, deepcode ignore DisablePoweredBy: <please specify a reason of ignoring this>
const app = express()

app.use(bodyParser.json());
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.post('/language', (req, res) => {
    const body = req.body; /** { language: string } */
    const {code, ...rest} = chooseLanguage(body.language);
    return res.status(code).json(rest);
})

module.exports = app;
