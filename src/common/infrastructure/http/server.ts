import { env } from '../env'
import { dataSource } from '../typeorm'
import { app } from './app'

dataSource
  .initialize()
  .then(() => {
    app.listen(env.PORT, () => {
      console.log(`Server running on port ${env.PORT} 🏆`)
      console.log(`API docs available at GET /docs 📖`)
    })
  })
  .catch(error => {
    console.error('Error during Data Source initialization:', error)
  })
