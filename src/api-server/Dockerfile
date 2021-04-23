FROM node:alpine AS build
WORKDIR /app
COPY ./package.json .
RUN npm install --legacy-peer-deps
COPY ./src ./src
COPY ./webpack ./webpack
COPY ./tsconfig.json ./tsconfig.json
COPY ./server.tsconfig.json ./server.tsconfig.json
COPY ./babel.config.js ./babel.config.js
COPY .env .
RUN rm -rf dist && npm run build:api

FROM node:alpine AS service
WORKDIR /app
COPY --from=build ./app/dist ./dist
COPY --from=build ./app/node_modules ./node_modules
COPY ./api-index.js ./api-index.js
COPY .env .
EXPOSE 3000
CMD node api-index.js
