FROM node:16

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

# Expose ports
EXPOSE 5173
EXPOSE 8000

# Command to run the application
CMD ["npm", "start"]
