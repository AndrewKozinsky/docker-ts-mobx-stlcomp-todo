const config = require('./config.ts')
const { connectDb } = require('./utils/db.ts')

// Выключение сервера при ошибке типа uncaughtException
process.on('uncaughtException', err => {
    console.log('UNCAUGHT EXCEPTION 💥. Shutting down...');
    console.log(err.name, err.message);
    process.exit(1)
})

connectDb()
    .on('error', console.log)
    .on('disconnected', connectDb)
    .once('open', startServer)


function startServer() {
    // Подключение файла App.ts с маршрутами
    const App = require('./app.ts')
    
    // Прослушивание порта на сервере
    const server = App.listen(config.port, () => {
        console.log('Server started 🔥 at port ' + config.port)
    })


    // Выключение сервера при ошибке типа unhandledRejection
    process.on('unhandledRejection', err => {
        console.log(err)
        console.log('UNHANDLED REJECTION. 💥 Shitting down...');
        server.close(() => {
            process.exit(1)
        })
    })
}
