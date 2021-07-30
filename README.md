npm install --save @nestjs/mongoose mongoose

brew tap mongodb/brew
brew install mongodb-community@4.0
brew --prefix

brew services start mongodb-community@4.0
mongod --config /usr/local/etc/mongod.conf --fork
brew services list


brew services stop mongodb-community@4.0



npm install --save @nestjs/microservices

npm install --save amqplib amqp-connection-manager


docker run -it --rm --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3.9-management