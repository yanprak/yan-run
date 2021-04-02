## Quick Start
* Запуск контейнеров `docker-compose up -d`

## Environments
1. В корне проекта создать папку `**./docker**`
2. Создать файл `**./docker/database.env**` содержащий:

* POSTGRES_USER: [**name**]
* POSTGRES_PASSWORD: [**password**]
* POSTGRES_DB: [**yanrun_database**]

## Postgres:
* `localhost:5432`
* **Username:** `POSTGRES_USER`
* **Password:** `POSTGRES_PASSWORD`

## Доступ PgAdmin:
* [pgAdmin local](http://localhost:8080)
* **Username:** `admin@admin.com`
* **Password:** `yanrun`

## Добавить сервер в PgAdmin:
* **Host name/address** `postgres`
* **Port** `5432`
* **Username** as `POSTGRES_USER`,
* **Password** as `POSTGRES_PASSWORD`,
