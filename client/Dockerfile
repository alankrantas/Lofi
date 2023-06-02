FROM node:alpine as builder

WORKDIR /app

COPY ./client /app
RUN npm install --production --frozen-lockfile
RUN npm prune
RUN npm run build

FROM node:alpine

WORKDIR /app

COPY --from=builder /app/dist /app/dist
COPY ./express /app

RUN npm i -g http-server

EXPOSE 8080

CMD http-server ./dist -a 0.0.0.0 -p 8080