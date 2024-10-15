FROM node:16-alpine
WORKDIR /usr
COPY package.json ./
COPY package-lock.json ./
COPY tsconfig.prod.json ./
COPY src ./src
RUN npm ci --omit=dev
RUN npm run build
ENV PORT 80
RUN npm install pm2 -g
EXPOSE 80
CMD ["pm2-runtime","index.js"]