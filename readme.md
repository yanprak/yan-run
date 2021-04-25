# Yan Run
    
## Механика игры

1. **Жанр**: раннер-платформер.
2. **Цель игрока**: набрать наибольшее количество очков.
3. Очки засчитываются за пройденную дистанцию (чем дольше длится игровая сессия без ошибок, тем больше очков).
4. Персонаж, управляемый игроком, автоматически двигается слева направо. Параллельно с этим происходит прогрузка/отображение дальнейшей вселенной игры (карты). Таким образом, персонаж всегда находится в левой части экрана.
5. Персонаж может менять своё положение только по оси Y.
6. Игрок может управлять персонажем выполняя действие "прыжок", необходимое для преодоления препятствий, возникающих на пути персонажа.

## Предварительная настройка
1. Находим файл `/etc/hosts` на Mac OS / Linux, `C:\Windows\System32\Drivers\etc\hosts` на Windows.
2. Добавляем в найденный `hosts` строчку `127.0.0.1 local.ya-praktikum.tech`.
3. Генерируем SSL сертификаты в папку `./cert` с помощью команды `openssl req -newkey rsa:2048 -new -nodes -x509 -days 3650 -keyout key.pem -out cert.pem`.
4. Открываем проект по адресу [https://local.ya-praktikum.tech:5000](https://local.ya-praktikum.tech:5000)
5. PORT для приложения 5000, API_PORT для сервера 3500
6. Соединение с MongoDB базой указывается в env-переменной MONGO_URI (пример значения - `mongodb://localhost:27017/`)

## RUN
1. `npm run start` - запускает api-server в режиме пересборки, и веб клиент-сервер в режиме hot-reload,
   при этом сам клиентский сервер (который отдает CSR/SSR) в этом не участвует, иначе он будет постоянно
   перезапускаться при изменении клиентской части и HMR не будет адекватно работать.
2. `npm run start:api` - запускает только api-сервер в режиме разработки

## База данных PostgreSQL
- [ER-модель](https://dbdiagram.io/d/606249c1ecb54e10c33dd608)

## ENV
1. Чтобы проект завелся - надо создать `.env` в корне и определить следующие переменные
```
# postgres connect options
POSTGRES_HOST=
POSTGRES_PORT=
# do not rename this options since postgres docker image use them to initialize
POSTGRES_USER=
POSTGRES_PASSWORD=
POSTGRES_DB=

# mongo connect options
MONGO_HOST=
MONGO_PORT=
MONGO_USER=
MONGO_PASS=
MONGO_DB=

# mongo docker image options
MONGO_INITDB_ROOT_USERNAME=
MONGO_INITDB_ROOT_PASSWORD=

# pgadmin docker image options
PGADMIN_DEFAULT_EMAIL=
PGADMIN_DEFAULT_PASSWORD=
PGADMIN_LISTEN_PORT=

# application options
NODE_ENV=production
SR=server
WEB_HOST=https://local.ya-praktikum.tech
WEB_PORT=443
API_HOST=https://local.ya-praktikum.tech
API_PORT=3000
```
Следует помнить что от NODE_ENV зависит HMR и https сервер. 

В случае DEV - это https и HMR
В случае PROD - это http и !HMR, при этом при локальной проверке не будут работать куки.

В случае DEV, манипулируя WEB/API HOST/PORT вы определяете где будет WEB часть, где API часть.

Таким образом, вы определите проксирование через /backend переменную (в продакшене этим будет заниматься nginx)

В случае с докером, эти переменные нужно будет настроить на 3000, потому что этот порт прокидывается докерфайлом
