# ChitChat - Real-Time Chat Application

Welcome to ChitChat, a powerful real-time chat application designed with the MERN stack, Vite.js, Socket.io, TailwindCSS, and DaisyUI. This project showcases modern web development practices, integrating TypeScript and JavaScript to build a responsive and scalable chat platform.

## Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [How It Works](#how-it-works)
- [Installation](#installation)
- [Usage](#usage)
- [Example Commands](#example-commands)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## About the Project

ChitChat is a real-time chat application built to provide instant messaging capabilities with a sleek, modern interface. This application is suitable for small teams, communities, or anyone looking to integrate a chat feature into their web app.

Visit the project repository on GitHub: [ChitChat Repository](https://github.com/SyedMoin-lab/fictional-computing-machine)

## Features

- **Real-Time Messaging**: Instantly send and receive messages without page refresh, powered by Socket.io.
- **User Authentication**: Secure login and signup system using JWT.
- **Group Chat**: Users can create and participate in chat rooms, enabling group conversations.
- **Responsive Design**: Built with TailwindCSS and DaisyUI, the application looks great on any device.
- **Message History**: Persistent chat history stored in MongoDB.
- **Notifications**: Real-time notifications for new messages.
- **TypeScript & JavaScript Integration**: Leverages both JavaScript and TypeScript for development, ensuring flexibility and type safety.
- **Vite.js for Fast Development**: Utilizes Vite.js for a blazing-fast development experience and optimized builds.

## Tech Stack

ChitChat is built with the following technologies:

### Frontend
- **React.js**: JavaScript library for building user interfaces.
- **Vite.js**: Next-generation frontend tooling, providing fast builds and hot module replacement.
- **TypeScript**: Superset of JavaScript that adds static types, enhancing code quality and development experience.
- **TailwindCSS**: Utility-first CSS framework for creating responsive designs quickly.
- **DaisyUI**: TailwindCSS plugin providing pre-designed components.

### Backend
- **Node.js**: JavaScript runtime environment.
- **Express.js**: Web framework for Node.js, providing robust routing and middleware support.
- **Socket.io**: Real-time, bidirectional event-based communication.
- **MongoDB**: NoSQL database used for storing user data and chat history.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.

### Tools & Libraries
- **JWT (JSON Web Token)**: For secure user authentication.
- **NPM**: Node package manager for managing dependencies.
- **Git**: Version control system.

## Project Structure

The project is organized into the following directories:

- **client/**: Contains the frontend code, built with React.js and Vite.js.
  - **src/**: Main source directory containing components, pages, and styles.
  - **public/**: Static assets and the root HTML file.

- **server/**: Backend code, built with Express.js and Socket.io.
  - **models/**: Mongoose models for MongoDB collections.
  - **routes/**: API routes for user authentication and chat operations.
  - **controllers/**: Logic for handling requests and responses.
  - **config/**: Configuration files for environment variables and database connections.

- **config/**: Contains configuration files like environment variables.

## How It Works

ChitChat uses Socket.io to enable real-time communication between clients and the server. Users can engage in instant messaging, with their chat history stored securely in MongoDB for later access.

### Key Components

- **Socket.io Integration**: Establishes a WebSocket connection for real-time message exchange.
- **User Authentication**: Managed through JWT, providing a secure login system.
- **Database Management**: MongoDB stores user information and chat histories, ensuring data persistence.

## Installation

To get started with ChitChat, follow these steps:

### Prerequisites

- Node.js and npm installed on your machine.
- A running instance of MongoDB (local or cloud-based).

### Clone the Repository

```bash
git clone https://github.com/SyedMoin-lab/fictional-computing-machine.git
cd fictional-computing-machine
```

### Install Dependencies

Navigate to both the `client` and `server` directories and install the necessary dependencies:

```bash
cd client
npm install

cd ../server
npm install
```

### Configure Environment Variables

Create a `.env` file in the `server` directory with the following environment variables:

```plaintext
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
SOCKET_PORT=your_desired_port_for_socket_io
```

### Start the Application

#### Backend:

```bash
cd server
npm start
```

#### Frontend:

```bash
cd client
npm run dev
```

The application should now be running locally and accessible at `http://localhost:3000`.

## Usage

Once the application is up and running, users can sign up, create chat rooms, and start chatting in real-time. The UI is designed to be intuitive and user-friendly, making it easy for users to engage in conversations.

## Example Commands

- **Starting the Development Server**:

  ```bash
  npm run dev
  ```

- **Building the React App**:

  ```bash
  npm run build
  ```

- **Running Tests**:

  ```bash
  npm test
  ```

## Screenshots

Here are some screenshots of the ChitChat application:

*Include screenshots of the login page, chat interface, and any other key features.*

## Contributing

Contributions to ChitChat are welcome! Whether it's bug fixes, feature enhancements, or new ideas, feel free to fork the repository and submit a pull request.

### Steps to Contribute:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/YourFeatureName`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature/YourFeatureName`.
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contact

If you have any questions or suggestions, feel free to reach out:

- **Syed Moinuddin** - [GitHub](https://github.com/SyedMoin-lab) | [LinkedIn](https://www.linkedin.com/in/syedmoinuddin/)
