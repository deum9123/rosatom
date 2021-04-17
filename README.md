**backend Интернатива** Серверная часть приложения. Демо [доступно по ссылке ](http://game-api.na4u.ru/) REST API
 
Приложение написано на node.js с использованием:

> express
> joi 
> pg
> Переменные окружения (основные настройки в **.env** файле)


## Запуск приложения

> В дерриктории проекта

1. Запуск **Docker** контейнера с Базой данных (**Postgres**). или локальный запуск Базы данных.

   $ docker-compose up

2. Залить дамп таблиц и тестовые данные в Базу данных (**dump.sql**)

3. Проверить корректность настроек переменного окружения - при необходимости отредактировать (**.env**) файл

4. При помощи [npm](https://npmjs.org/) устанавливаем зависимости.

   $ npm i

5. После успешной установки зависимостей, запуск приложения:

   $ npm run start:dev

---

## Набор Эндпоинтов

GET http://game-api.na4u.ru/api/islands

GET http://game-api.na4u.ru/api/user

GET http://game-api.na4u.ru/api/islandTask

GET http://game-api.na4u.ru/api/ivents


GET http://game-api.na4u.ru/api/communication


GET http://game-api.na4u.ru/api/questions

POST http://game-api.na4u.ru/api/questionValidate  
 {
     "question_id":1,
     "answer": "ew"
 }



















