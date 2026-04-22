# Use Java 17
FROM openjdk:17-jdk-slim

# Set working directory
WORKDIR /app

# Copy all files
COPY . .

# Build the project
RUN ./mvnw clean package -DskipTests

# Run the jar file
CMD ["java", "-jar", "target/Placement_regis_login-0.0.1-SNAPSHOT.jar"]