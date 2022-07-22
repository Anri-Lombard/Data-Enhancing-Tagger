# Production Build

# Stage 1: Build react client
FROM node:14.15.3-alpine3.12 as client

# Working directory be app
WORKDIR /usr/app/client/

COPY client/package*.json ./

# Install dependencies
RUN npm install

# copy local files to app folder
COPY client/ ./


RUN npm run build

# Stage 2 : Build Server

FROM node:14.15.3-alpine3.12

WORKDIR /usr/src/app/server/
COPY server/package*.json ./
RUN npm install
COPY server/ ./

ENV PORT 2000

EXPOSE 2000

CMD ["npm", "start"]
