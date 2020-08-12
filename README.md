## Node+RabbitMQ - Publisher and Consumer

[![N|Solid](https://raw.githubusercontent.com/mribeirogabriel/noderabbitmq/master/misc/image.png)](https://github.com/mribeirogabriel/noderabbitmq)

[RabbitMQ](https://www.rabbitmq.com/) is a open source message-queueing software also known as a message broker or queue manager that uses AMQP(Advanced Message Queuing Protocol) to exchange menssages.

### Docker
For this lab I recommends run RabbitMQ server in a container using [Docker](https://docs.docker.com/get-started/overview/).

#### Installing Docker
```curl
curl -fsSL https://get.docker.com -o get-docker.sh && sh get-docker.sh
```
#### Running RabbitMQ Container
```docker
sudo docker run -d --hostname my-rabbitmq --name container-rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3-management
```

### RabbitMQ
Open the browser and go to:

```bash
http://localhost:15672 - Management Panel

Username: guest
Password: guest
```
The server use default port 5672/tcp to exchange menssages.

## Running
Starting the consumer 
```node
node consumer/worker.js
```
Sending messages to queue with amount of menssages that you want publish
```node
node publisher/publisher.js 100
```
