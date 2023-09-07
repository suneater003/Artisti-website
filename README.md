# Artisti SMIT

Welcome to the Artisti SMIT repository! 
This project is a dynamic web application for the only **Art Club of Sikkim Manipal Institute of Technology** , developed by Pooranjoy Bhattacharya.

## Features

- Browse and view a collection of artworks and creations by talented artists of our club.
- Learn about upcoming events, workshops, and exhibitions organized by the art club.
- Connect with fellow art enthusiasts, share your creations, and engage in discussions.
- Easily manage and update content using the MongoDB database.

## Technologies Used

- **Node.js:** The server-side runtime for building the web application.
- **EJS:** A template engine for rendering dynamic HTML pages.
- **MongoDB:** A NoSQL database for storing and managing artwork, events, and user data.
- **Tailwind CSS:** A utility-first CSS framework for responsive and stylish designs.

### Please note that access to MongoDB is NOT provided for security reasons.

## Getting Started

### Install Dependencies

1. Clone the repository:

   ```bash
   git clone https://github.com/pooranjoyb/Artisti-website.git
2. Navigate to the project directory:

    ```bash
    cd Artisti-website
3. Install the required Node.js dependencies:
    ```bash
    npm install
### Start the Application

1. Start the Node.js server:

   ```bash
   npm start
2. Open your web browser and visit http://localhost:3000 to explore the Artisti-SMIT website.

## Docker Container

You can also run the Artisti-SMIT Website in a Docker container.

### Build the Docker Image

1. Build the Docker image:

   ```bash
   docker build -t pooranjoyb/artisti-website --build-arg MONGODB_URI="DB_ACCESS_KEY" .
2. Run the Docker Container
    ```bash
    docker run -p 3000:3000 -d artisti-website

## Docker Hub Image

You can find the Docker image for the Artisti-Website on Docker Hub: [Docker Hub - Artisti-Website](https://hub.docker.com/r/pooranjoyb/artisti-webiste)

To pull and run the Docker image from Docker Hub:

1. Pull the Docker image:

   ```bash
   docker pull pooranjoyb/artisti-website:latest
2. Run the Docker container:
    ```bash
    docker run -p 3000:3000 -d pooranjoyb/artisti-website
3. Access the website in your browser by navigating to http://localhost:3000.

Feel free to contribute, report issues, and explore the codebase to enhance the Artisti-SMIT Website!

## LICENSE
***This project is licensed under the [MIT License](LICENSE)***
