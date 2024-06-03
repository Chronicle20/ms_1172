FROM maven:3.9.6-eclipse-temurin-22-alpine AS jar

# Build in a separated location which won't have permissions issues.
WORKDIR /opt/dir
# Any changes to the pom will affect the entire build, so it should be copied first.
COPY pom.xml ./pom.xml
# Grab all the dependencies listed in the pom early, since it prevents changes to source code from requiring a complete re-download.
# Skip compiling tests since we don't want all the dependecies to be downloaded.
RUN mvn -f ./pom.xml clean dependency:go-offline -Dmaven.test.skip -T 1C
# Source code changes may not change dependencies, so it can go last.
# Skip compiling tests since we don't want all the dependecies to be downloaded for plugins.
COPY src ./src
RUN mvn -f ./pom.xml clean package -Dmaven.test.skip -T 1C

FROM eclipse-temurin:22-alpine

# Host the server in a location that won't have permissions issues.
WORKDIR /opt/server

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.12.1/wait /wait
RUN chmod +x /wait

COPY /scripts ./scripts/
COPY /wz ./wz/
COPY recv.properties ./
COPY send.properties ./

# Copy the JAR we build earlier.
COPY --from=jar /opt/dir/target/ms1172.jar ./ms1172.jar

EXPOSE 8484 7575 7576 7577
ENV WAIT_COMMAND="java -jar ./ms1172.jar"
ENTRYPOINT ["/wait"]
