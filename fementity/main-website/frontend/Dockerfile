FROM node:alpine AS base

FROM base AS builder

WORKDIR /app

COPY . .

RUN npm ci && npm run build && npm prune --production

FROM base AS release

ENV HOST 0.0.0.0
ENV PORT 3000

WORKDIR /app

COPY --from=builder /app .

ENV NODE_ENV production

USER node
EXPOSE 3000

ENTRYPOINT [ "npm", "start" ]
