## Quick Start
* Перед первым запуском почистить `cash` docker  связанный с проектом
* Первый запуск контейнеров `docker-compose up --build`

## Postgres:
* `localhost:5432`
* **Username:** `POSTGRES_USER`
* **Password:** `POSTGRES_PASSWORD`
* **Database:** `POSTGRES_DB`
* для входа через докер консоль:
  - `docker-compose run postges bash`, если контейнер запущен то `docker exec -it pg_container bash`
  - `psql -h pg_container -d [POSTGRES_DB] -U [POSTGRES_USER]`

## Доступ:
* [Панель pgAdmin local](http://localhost:8080)
* **Username:** `admin@admin.com`
* **Password:** `yp21`
* **Config .env:** `database/`

## Добавить сервер в PgAdmin:
* **Host name/address** `pg_container`
* **Port** `5432`
* **Database:** `POSTGRES_DB`
* **Username** as `POSTGRES_USER`,
* **Password** as `POSTGRES_PASSWORD`,
