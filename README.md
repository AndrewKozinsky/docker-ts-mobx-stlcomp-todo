# Список дел

Работающий проект находится на https://todo.editorium.net.

### Используемые технологии
Клиентская часть
- React;
- MobX;
- Styled-components;
- Formic;
- Webpack;
- Babel

Серверная часть
- Node.js;
- Express;
- MongoDB;
- Mongoose

Инфраструктура
- Docker;
- Nginx

### Запуск на локальном компьютере

1. В Консоле нужно перейти в папку, где будет проект
cd /some/folder

2. Склонировать проект в эту папку
git clone https://github.com/AndrewKozinsky/docker-ts-mobx-stlcomp-todo.git

3. Перейти в папку проекта
cd docker-ts-mobx-stlcomp-todo

4. Запустить проект в Докере (перед этим не забудьте запустить Докер)

***Для разработки:***
- docker-compose -f docker-compose.dev.yml up --build

***Для публикации:***
- docker-compose -f docker-compose-prod.yml up --build

5. После проект можно открыть на localhost