FROM node:24-alpine3.21

RUN addgroup app && \
    adduser -D -G app app 
WORKDIR /app

COPY package*.json . 

RUN npm install 

COPY . .

USER app 

EXPOSE 3000

CMD ["npm", "start"]