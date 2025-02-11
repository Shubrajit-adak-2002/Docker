# Here we are using node image for base container and the 'latest' is used for downloading most recent version of node js image  
FROM node:latest
# Here we are copying all the files and folders from my current directory to dockers working directory
COPY . .
# Here we are running a command in the docker container for installing packages
RUN npm install
# Here we are telling that which port our app will use
EXPOSE 5001
# Here we are running the file in the docker container
CMD [ "node" , "index.js"]

# If you want to delete a image just run this commmand(docker rmi <IMAGE_ID_OR_NAME>).
# If that command doesn't work properly use this instead(docker rmi -f <IMAGE_ID_OR_NAME>), actually we are deleting it forcefully.

# If you want to delete a container use this command (docker rm <CONTAINER_ID_OR_NAME>)
# If that command doesn't work properly use this instead(docker rm -f <CONTAINER_ID_OR_NAME>), actually we are deleting it forcefully.

