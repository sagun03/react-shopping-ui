# Step 1: Use the official Node.js image as the base image for the build stage
FROM node:14-alpine AS build

# Step 2: Set the working directory inside the container to /app
WORKDIR /app

# Step 3: Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Step 4: Install the project dependencies
RUN npm install

# Step 5: Copy the rest of the application code to the working directory
COPY . .

# Step 6: Build the React application for production
RUN npm run build

# Step 7: Serve the built React application using a lightweight HTTP server
CMD ["npx", "http-server", "build", "-p", "80"]
