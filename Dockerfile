# Use the official Node.js 14 image as a base
FROM node:14

# Set the working directory in the container to the root of your project
WORKDIR /app

# Copy package.json and package-lock.json first for better caching
COPY package*.json ./

# Install dependencies locally within the project directory
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the ports used by Vite and json-server
EXPOSE 5173 8000

# Start the application using an npm script
CMD ["npm", "run", "start"]
