FROM mcr.microsoft.com/playwright:v1.44.0-jammy

WORKDIR /app

COPY . /app/

RUN apt-get update && \
    apt-get install -y openjdk-11-jre-headless && \
    npm install

ENV JAVA_HOME=/usr/lib/jvm/java-11-openjdk-amd64

CMD ["npm", "test"]