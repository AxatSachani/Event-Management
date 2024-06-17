# Event Management

## Project Description

The Event Management API is a RESTful service designed to facilitate the creation and storage of event-related data, including multiple image uploads. Built with Node.js and MongoDB, this API allows users to send event details through a POST request and efficiently manage the storage of event information and associated images. The API is tailored to meet the needs of event organizers, providing a streamlined process for submitting and storing event data.

## Key Features

1. **Event Data Storage:** Allows users to send event details such as name, title, description, location and date through a POST request.
2. **Multiple Image Uploads:** Supports the upload of multiple images associated with an event. Images are stored locally with a unique timestamped filename.
3. **Multer Integration:** Utilizes the Multer middleware for handling multipart/form-data, which is essential for uploading images.
4. **MongoDB Integration:** Stores event data in a MongoDB database, ensuring efficient and reliable data management.
5. **API Endpoint:** Provides a dedicated endpoint (`http://localhost:8032/api/events`) for submitting event data and images.
6. **Success Response:** Sends a success message upon successful data storage and image upload, confirming the creation of the event.

## Technical Stack

- **Node.js:** Provides a fast and scalable runtime environment for building server-side applications.
- **Express.js:** A minimalist web framework for Node.js, used to build the API endpoints.
- **MongoDB:** A NoSQL database used for storing event data.
- **Multer:** A middleware for handling multipart/form-data, used for image uploads.

## API Endpoint

### POST /api/events

- **Description:** Creates a new event and stores event details in the MongoDB database. Uploads multiple images and stores them locally.
- **Payload:**
  - `eventName` (string): The name of the event.
  - `eventTitle` (string): The title of the event.
  - `eventDescription` (string): A brief description of the event.
  - `eventLocation` (string): The location where the event will take place.
  - `eventDate` (date): The date of the event.
  - `images` (array): An array of images to be uploaded.
- **Response:** Success message upon successful creation of the event and image upload.

## Project Setup and Instructions

### Prerequisites

- Node.js
- MongoDB

### Setup

1. **Clone the Repository:**
    ```bash
    git clone https://github.com/AxatSachani/Event-Management
    cd event-management
    ```

2. **Install Dependencies:**
    ```bash
    npm install
    ```

3. **Create .env File:**
    ```env
    PORT=8032
    MONGO_URI=mongodb://localhost:27017/event_management
    ```

4. **Run the Server:**
    ```bash
    npm start
    ```

5. **Using the API:**
   - Use Postman or any other API client to send a POST request to `http://localhost:8032/api/events` with the required payload and images.
   - Example payload:
    ```json
    {
      "eventName": "Annual Meetup",
      "eventTitle": "Tech Conference 2024",
      "eventDescription": "A conference for tech enthusiasts",
      "eventLocation": "San Francisco, CA",
      "eventDate": "2024-09-12",
      "images": [/* array of images */]
    }
    ```
