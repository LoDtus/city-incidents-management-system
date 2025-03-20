# Stage 1: Build stage

FROM maven:3.9.6-eclipse-temurin-21 AS build-stage

WORKDIR /app

COPY pom.xml .

COPY src ./src

RUN mvn clean package -DskipTests

# Stage 2: Run stage

FROM eclipse-temurin:21-jre-jammy

WORKDIR /app

COPY --from=build-stage /app/target/*.jar app.jar

ENTRYPOINT ["java", "-jar", "app.jar"]