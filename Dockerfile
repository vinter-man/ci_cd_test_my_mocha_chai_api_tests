# Use an official Node.js image with the latest version
FROM node:latest

COPY . .

RUN npm install

# Run API tests
CMD ["npm", "run", "coingecko:junit"]

