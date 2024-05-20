# Use the official Node.js 14 image as a base
FROM node:14

# Set the working directory in the container to the root of your project
WORKDIR /app

# Copy package.json and package-lock.json first for better caching
COPY package*.json ./

# Install all dependencies, including devDependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Expose the ports used by Vite and json-server
EXPOSE 5173 8000

# Start the application using the npm script
CMD ["npm", "start"]
