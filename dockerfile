FROM node:19-alpine
WORKDIR /app
COPY . .
RUN yarn
CMD ["yarn", "start"]
EXPOSE 3000
