# Use the official Node.js 20 image as a base
FROM node:20

# Set the working directory in the container
WORKDIR /app

# Install json-server globally
RUN npm install -g json-server

# Copy package.json and package-lock.json first for better caching
COPY package*.json ./

# Clear npm cache and install dependencies
RUN npm cache clean --force && npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Expose the ports used by Vite and json-server
EXPOSE 5173 8000

# Start the application using concurrently to run both the Vite preview server and json-server
CMD ["npx", "concurrently", "\"vite preview --port 5173 --host\"", "\"node server.js\""]
