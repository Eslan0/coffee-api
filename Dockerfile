ARG NODE_VERSION=24.6.0
FROM node:${NODE_VERSION}-alpine

ENV PORT=5000

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN apk add --no-cache curl

HEALTHCHECK --interval=10s --timeout=10s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:${PORT} || exit 1

EXPOSE ${PORT}

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
