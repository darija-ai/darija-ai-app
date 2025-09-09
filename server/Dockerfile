FROM node:20 AS build-storage

WORKDIR /app

COPY package*.json ./

RUN npm i 

COPY . .

RUN npx prisma generate

EXPOSE 3001

CMD ["sh", "-c", "npx prisma migrate deploy && npm run dev"]

