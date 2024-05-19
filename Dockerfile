# Use the official Node.js 16 image as a base
FROM node:16

# Set the working directory in the container
WORKDIR /app

# Install json-server globally
RUN npm install -g json-server

# Copy package.json and package-lock.json first for better caching
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application code
COPY . .

# Expose the port json-server will run on
EXPOSE 8000

# Build the application
RUN npm run build

# Start the application using concurrently to run both the Vite server and json-server
CMD ["concurrently", "\"vite preview\"", "\"json-server --watch public/jobs.json --port 8000\""]
