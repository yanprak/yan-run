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

## RUN
1. Запуск в режиме SSR (запустит и API server в режиме разработки) `npm run start:ssr`
2. Запуск в режиме CSR (запустит и API server в режиме разработки) `npm run start:csr`
3. Запуск d ht;bvt разработки только API сервера `npm run start:api-watch`


