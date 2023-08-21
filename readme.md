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

`docker run -p 27017:27017 -d -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=password --name mongodb --net mongo-network mongo` 
start a container with:
- opening port on the host
- environmentals variables
- named
- asign network


 ***comands**
`docker logs`