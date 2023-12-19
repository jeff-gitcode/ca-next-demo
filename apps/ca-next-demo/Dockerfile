FROM node:20.10.0 as development

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build:next

FROM node:20.10.0 as production
ENV NODE_ENV=production

USER node
WORKDIR /app

COPY --from=development /app/dist/apps/ca-next-demo ./
RUN npm install --only=production

CMD ["npx", "next", "start"]
