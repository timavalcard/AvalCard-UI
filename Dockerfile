FROM node:20.18.3-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

FROM node:20.18.3-alpine

WORKDIR /app

COPY --from=builder /app ./

EXPOSE 4345

CMD ["npm", "start"]
