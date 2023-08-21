# Docker Development Process
 
- JavaScript Frontend
- Node express Backend
- Docker MongoDB database

## Isolated Docker Network
Create network for mongo
`docker network create mongo-network`
`docker network ls` 

## run mongo containers
Run two images: mongoDB, mongo-express UI 

start a  mongodb container 
`docker run -p 27017:27017 -d -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=password --name mongodb --net mongo-network mongo` 
- -d detached mode
- opening port on the host
- environmentals variables
- named
- asign network

start a  mongo-express server container
`docker run --network mongo-network -e ME_CONFIG_MONGODB_ADMINUSERNAME=admin -e ME_CONFIG_MONGODB_ADMINPASSWORD=password -e ME_CONFIG_MONGODB_SERVER=mongodb -p 8081:8081 --name mongo-express mongo-express`

create a user-acount database on  http://0.0.0.0:8081


 ***commands**
`docker ps`
`docker logs containerid`