const { app } = require('./app')
const port = process.env.APP_PORT || '3000'

app.listen(port, (err) => {
  if (err) console.log('Error: ', err)
  console.log(`API listening at http://localhost:${port}`)
})
