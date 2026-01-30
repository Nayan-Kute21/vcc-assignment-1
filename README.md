# Microservices Assignment

## Project Overview
This project implements a microservices architecture consisting of three main services:
- **API Gateway**: Central entry point for all client requests
- **User Service**: Handles user-related operations and data
- **Product Service**: Manages product catalog and inventory

## Project Structure
```
assignment1/
├── api-gateway/          # API Gateway service
│   ├── index.js
│   └── package.json
├── user-service/         # User Service
│   ├── index.js
│   └── package.json
├── product-service/      # Product Service
│   ├── index.js
│   └── package.json
└── README.md           # This file
```

## Dependencies
- **Express.js** (^4.18.2): Web framework for Node.js
- **Axios** (^1.6.8): HTTP client (API Gateway only)

## Setup/Installation Instructions
1. Clone or download the project
2. Navigate to the project root directory
3. Install dependencies for each service:
   ```bash
   cd api-gateway
   npm install
   cd ../user-service
   npm install
   cd ../product-service
   npm install
   cd ..
   ```

## How to Run the Services

### Option 1: Run All Services Individually
Open separate terminal windows and run:

**Terminal 1 - User Service:**
```bash
cd user-service
npm start
```

**Terminal 2 - Product Service:**
```bash
cd product-service
npm start
```

**Terminal 3 - API Gateway:**
```bash
cd api-gateway
npm start
```

### Option 2: Run Sequentially
```bash
cd user-service && npm start &
cd ../product-service && npm start &
cd ../api-gateway && npm start
```

## API Endpoints
- **API Gateway**: Serves as the main entry point for all requests
- **User Service**: Manages user operations
- **Product Service**: Handles product-related operations

*(Specific endpoint details to be added based on service implementation)*

## Technologies Used
- Node.js
- Express.js

## Notes
- Each service runs as an independent Node.js process
- Services can be scaled independently in a production environment
- Ensure all services are running for the full system to function properly
