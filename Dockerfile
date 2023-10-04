# Use an official Node.js runtime as a parent image for development
FROM node:18 

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application source code to the container
COPY . .

# Expose port 3000 for Vite development server
EXPOSE 3000

# Start the Vite development server
CMD ["npm", "run", "dev"]

# # Use a lightweight Node.js runtime for serving the production application
# FROM node:18-alpine as production

# # Set the working directory in the container
# WORKDIR /app

# # Copy package.json and package-lock.json to the container
# COPY package*.json ./

# # Install project dependencies
# RUN npm install --only=production

# # Copy the built application from the development stage
# COPY --from=development /app/build ./build

# # Expose port 80 for serving the production application
# EXPOSE 80

# # Define the command to start serving the application
# CMD ["npm", "start"]
