const express = require('express')
// const path = require('path')
// const cookieParser = require('cookie-parser')
// const rateLimit = require('express-rate-limit')
// const userRouter = require('./routes/userRouter')
// const myNotesRouter = require('./routes/myNotesRouter')
// const AppError = require('./utils/appError')
// const globalErrorHandler = require('./controllers/errorController')


const App = express()

// App.use(cookieParser())


// Сделаю чтобы в свойство body объекта запроса заносились данные присланные в теле запроса
// App.use(express.json({limit: '10kb'}))

// Ограничение количества запросов
/*const rater = rateLimit({
    max: 100,
    windowMs: 60 * 60 * 1000,
    message: 'Too many request from this IP, please try again in an hour!'
})*/
// App.use('/', rater)


// Маршруты API
/*App.use('/users', userRouter);
App.use('/myNotes', myNotesRouter)*/
App.get('/', (req, res) => {
    res.send('Hello, Express! 41-')
})


// Статические файлы на сервере.
// App.use(express.static(path.join(__dirname, 'static-files')))


// Обработка несуществующего маршрута
/*App.all("*", (req, res, next) => {
    next(
        new AppError(`Can't find ${req.originalUrl} on the server!`, 404)
    )
})*/

// Глобальный обработчик ошибок
// App.use(globalErrorHandler)


module.exports = App