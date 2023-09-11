FROM node:20-alpine
LABEL org.opencontainers.image.source https://github.com/developkosarev/FrontolServiceNext
LABEL org.opencontainers.image.title="FrontolServiceNext"
LABEL org.opencontainers.image.authors="develop.kosarev@gmail.com"
LABEL org.opencontainers.image.version="0.0.3"

WORKDIR /opt/app
ADD package.json package.json
RUN npm install

ADD . .
ENV NODE_ENV production
RUN npm run build
RUN npm prune --production
CMD ["npm", "start"]
EXPOSE 3000
