## Используем базовый образ для Node.js
#FROM node:20
#
## Создаем рабочую директорию для frontend
#WORKDIR /app
#
## Копируем файлы frontend и устанавливаем зависимости
#COPY package*.json ./
#RUN npm install
#
## Копируем остальные файлы
#COPY . /app
#
## Открываем порт для frontend
#EXPOSE 3000
#
## Команда для запуска Nuxt.js
#CMD ["npm", "run", "dev"]

ARG NODE_VERSION=18.14.2

FROM node:${NODE_VERSION}-slim as base

ARG PORT=3000

ENV NODE_ENV=production

WORKDIR /src

# Build
FROM base as build

COPY --link package.json package-lock.json .
RUN npm install --production=false

COPY --link . .

RUN npm run build
RUN npm prune

# Run
FROM base

ENV PORT=$PORT

COPY --from=build /src/.output /src/.output
# Optional, only needed if you rely on unbundled dependencies
# COPY --from=build /src/node_modules /src/node_modules

CMD [ "node", ".output/server/index.mjs" ]

## Используем базовый образ для Node.js
#FROM node:20-alpine as build
#
## Создаем рабочую директорию для сборки frontend
#WORKDIR /app
#
## Копируем файлы frontend и устанавливаем зависимости
#COPY package*.json ./
#RUN npm install
#
## Копируем остальные файлы и собираем проект
#COPY . .
#RUN npm run build
#
## Используем базовый образ для сервера
#FROM nginx:alpine
#
## Копируем собранные файлы из предыдущего этапа
#COPY --from=build /app/.output/public /usr/share/nginx/html
#
## Открываем порт для фронтенда
#EXPOSE 80
#
## Запуск nginx
#CMD ["nginx", "-g", "daemon off;"]
