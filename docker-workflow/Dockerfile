FROM node:6

ADD https://github.com/Yelp/dumb-init/releases/download/v1.2.0/dumb-init_1.2.0_amd64 /usr/local/bin/dumb-init

# Create app directory
RUN mkdir -p /usr/src/app \
    && chmod +x /usr/local/bin/dumb-init

WORKDIR /usr/src/app

# Install app dependencies
COPY .eslintrc /usr/src/app/
COPY package.json /usr/src/app/
RUN npm install

COPY server /usr/src/app

VOLUME ["/usr/src/app/server"]

EXPOSE 3333

ENTRYPOINT ["/usr/local/bin/dumb-init", "--"]

