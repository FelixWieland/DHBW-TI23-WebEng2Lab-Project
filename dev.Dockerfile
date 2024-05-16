FROM eclipse-temurin:21-jre-focal
ARG jarFile=Posts-0.0.1-SNAPSHOT
VOLUME /tmp

COPY ./build/libs/${jarFile}.jar app.jar

EXPOSE 8080
ENTRYPOINT ["java", "-jar", "-Pdev", "app.jar"]