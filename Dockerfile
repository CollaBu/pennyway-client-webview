FROM node:18.18.0
RUN yarn global add serve

RUN mkdir ./dist
COPY ./dist ./dist

ENTRYPOINT [ "serve", "-s", "dist" ]