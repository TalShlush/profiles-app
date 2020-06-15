# Build server
go to server directory and run:
`docker build -t profile-backend .`

# Build frontend
go to app directory and run:
`docker build -t profile-frontend .`

# init postgres database
run the following command:
`docker-compose -f docker-compose-db.yml up -d`
*NOTE*
Posgres db initialization can take some time

# launch the app 
run the following command:
`docker-compose -f docker-compose.yml up -d`
