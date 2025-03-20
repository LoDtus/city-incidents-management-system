# Stage 1: Build stage

FROM node:20-alpine as build-stage

WORKDIR /app

COPY package*.json .

RUN npm ci

COPY . .

RUN npm run build

# Stage 2: Run stage

FROM node:20-alpine

WORKDIR /app

COPY --from=build-stage /app/package*.json ./

RUN npm ci --omit=dev

COPY --from=build-stage /app/.next ./.next

COPY --from=build-stage /app/public ./public

COPY --from=build-stage /app/next.config.mjs ./next.config.mjs

CMD ["npm", "run", "start"]