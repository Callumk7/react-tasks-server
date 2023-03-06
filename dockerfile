FROM node:19-alpine
WORKDIR /app
COPY . .
RUN yarn
CMD ["yarn", "dev"]
EXPOSE 3000