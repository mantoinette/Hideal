# Build stage
FROM maven:3.9.9-eclipse-temurin-17 AS build
WORKDIR /app

COPY pom.xml .
COPY src ./src

RUN mvn -q -DskipTests package

# Runtime stage
FROM eclipse-temurin:17-jre-jammy
WORKDIR /app

RUN addgroup --system hideal && adduser --system --ingroup hideal hideal
USER hideal

COPY --from=build /app/target/hideal-0.0.1-SNAPSHOT.jar app.jar

EXPOSE 8080

ENV SERVER_PORT=8080

ENTRYPOINT ["java", "-jar", "app.jar"]
