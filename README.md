# BrainBuzz Microservices Quiz Application

BrainBuzz is a microservices-based quiz application designed to provide a scalable and flexible platform for quiz management. It includes various services for handling quiz creation, scoring, and more. The application is built using Spring Boot and other modern technologies, with plans to add an Angular frontend implementation in the future.

## Microservices

1. **API Gateway Service**: Acts as the central entry point for all client requests.
2. **Question Bank Service**: Manages the creation and storage of questions for quizzes and result calculation.
3. **Quiz Engine Service**: Handles quiz logic, including question selection, scoring.
4. **Service Manager**: Service registry and discovery using Eureka.

## Tech Stack

- **Backend**: Java, Spring Boot
- **Persistence**: Hibernate, MongoDB
- **Service Discovery**: Eureka Discovery Server

## Tools & Libraries

- **IDE**: IntelliJ IDEA
- **API Testing**: Postman

## Requirements

- **Java**: JDK 21
- **IDE**: IntelliJ IDEA or any other preferred IDE
- **MongoDB**: NoSQL database for unstructured data

### Download Links for Requirements

- **Java JDK 21**: [Oracle JDK](https://www.oracle.com/java/technologies/javase-jdk21-downloads.html)
- **IntelliJ IDEA**: [JetBrains IntelliJ IDEA](https://www.jetbrains.com/idea/download/)
- **MongoDB**: [MongoDB Community Edition](https://www.mongodb.com/try/download/community)
## Installation and Setup

1. **Install Required Software**:
   - Download and install Java JDK, MongoDB and IntelliJ IDEA from the links provided above.

2. **Microservice Setup**:
   - Clone the BrainBuzz repository.
   - Build and start each microservice in the following order:
     - Service Manager
     - API Gateway Service
     - Question Bank Service
     - Quiz Engine Service

## Future Plans

- **Angular Frontend**: A modern Angular frontend will be developed to provide a rich and responsive user interface for the BrainBuzz application.

## License

This project is licensed under the Apache License, Version 2.0 - see the [LICENSE](LICENSE) file for details. The project is free to use, modify, and distribute.
