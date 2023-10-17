FROM node:18

WORKDIR /admin

COPY package.json ./
COPY . .
RUN npm install

RUN npx prisma generate
RUN npx prisma db push

EXPOSE 3000

CMD ["npm","run","dev"]