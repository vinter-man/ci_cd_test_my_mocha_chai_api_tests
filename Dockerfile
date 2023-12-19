# Use an official Node.js image with the latest version
FROM node:latest

# # Set the working directory in the container
# WORKDIR /app

# # Copy package.json and package-lock.json to the container
# COPY package*.json ./

# # Set environment variables
# ENV HOME=/app
# ENV NPM_CONFIG_PREFIX=${HOME}/.npm-global
# RUN npm config set prefix $NPM_CONFIG_PREFIX

# # Install Node.js dependencies
# RUN npm install

# # Run API tests
# CMD ["sh", "-c", "npm run coingecko:mochawesome && npm run coingecko:junit"]

