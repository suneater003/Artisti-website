FROM node:14

WORKDIR /usr/src/app

ARG MONGODB_URI

ENV env_name $MONGODB_URI

# copy all the files to the container
COPY . .

# install dependencies
RUN npm install

# define the port number the container should expose
EXPOSE 3000

# run the command
CMD ["npm", "start"]