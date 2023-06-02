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
RUN npm install express connect-history-api-fallback
RUN npm prune

EXPOSE 8080

CMD node server.js 0.0.0.0 8080