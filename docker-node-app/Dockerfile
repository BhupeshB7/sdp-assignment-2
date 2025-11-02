# Step 1: Use official Node.js image as base
FROM node:18-alpine

# Step 2: Set working directory
WORKDIR /app

# Step 3: Copy package.json and package-lock.json
COPY package*.json ./

# Step 4: Copy app files
COPY . .

# Step 5: Expose port and define startup command
EXPOSE 8080
CMD ["npm", "start"]