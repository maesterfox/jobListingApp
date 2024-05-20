# Use the official Node.js 14 image as a base for the build stage
FROM node:14 AS build

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

# Use a smaller Node.js image for the final stage
FROM node:14-alpine AS production

# Set the working directory in the container to the root of your project
WORKDIR /app

# Copy only the necessary files from the build stage
COPY --from=build /app/package*.json ./
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist
COPY --from=build /app/server.js ./
COPY --from=build /app/public ./public

# Install only production dependencies
RUN npm install --production

# Expose the ports used by Vite and json-server
EXPOSE 5173 8000

# Start the application using the npm script
CMD ["npm", "start"]
