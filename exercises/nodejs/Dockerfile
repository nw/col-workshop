FROM node:boron

ENV PORT 3000

ADD https://github.com/Yelp/dumb-init/releases/download/v1.2.0/dumb-init_1.2.0_amd64 /usr/local/bin/dumb-init
RUN chmod +x /usr/local/bin/dumb-init

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json /usr/src/app/package.json
RUN npm install --production
COPY server.js /usr/src/app/server.js

ENTRYPOINT ["/usr/local/bin/dumb-init", "--", "node", "server.js"]