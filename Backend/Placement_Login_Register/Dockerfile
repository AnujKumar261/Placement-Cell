# Use official Java 17 runtime
FROM eclipse-temurin:17-jdk

# Set working directory
WORKDIR /app

# Copy project into container
COPY . .

# Make Maven wrapper executable (safe check)
RUN chmod +x mvnw || true

# Build Spring Boot project
RUN ./mvnw clean package -DskipTests || mvn clean package -DskipTests

# Find and run generated JAR
CMD ["sh", "-c", "java -jar target/*.jar"]