FROM node:24-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json .

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . . 

# Generate Prisma client
RUN npx prisma generate

# Expose the application port
EXPOSE 3000

# Start the application
CMD node src/server.js