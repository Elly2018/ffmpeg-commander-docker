FROM node:18.12.1
EXPOSE 8080
## Tool install
RUN npm install -g http-server

## Copy node script
RUN mkdir /app
WORKDIR /app
COPY dist /app

## Entry point
CMD [ "http-server"]