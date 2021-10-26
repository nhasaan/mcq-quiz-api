FROM node:12.19.0-alpine3.9 AS development

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

ENV NODE_ENV=${NODE_ENV}
ENV PORT=${PORT}
ENV DB_URL=${DB_URL}
ENV SECRET_JWT_KEY=${SECRET_JWT_KEY}
ENV SERVER_IP=${SERVER_IP}

RUN npm run build

CMD ["node", "dist/main.js"]

FROM node:12.19.0-alpine3.9 as production


WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/main.js"]