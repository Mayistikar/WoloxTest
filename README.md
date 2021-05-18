# Wolox
# REST API test application

This is a API test application for recruitment. Works like a [CoinGeckoAPI](https://www.coingecko.com/en/api) wrapper with basic features and a JWT authentication.

The entire application running is contained within the `docker-compose.yml` file.

`ormconfig.js` is a minimal Typeorm configuration for use a MySQL database.

`sudo permissions` sorry :( you need sudo to run docker-compose up.

If you don't have docker-compose, go get it into: https://docs.docker.com/compose/install/

## Install

  1.  git clone https://github.com/Mayistikar/WoloxTest.git
  2.   cd WoloxTest
  3.   Copy the ormconfig.js file that i send you into the email to the WoloxTest/ dir
  4.   npm install
    

## Run the app

    sudo docker-compose up

## Run the tests

    Working on it :(

# REST API

The REST API to the example app is described into http://localhost:3000/api/v1/api-docs or https://documenter.getpostman.com/view/5831053/TzRYbQ34.

## Get Token

First Add an user.
### Request
`POST /api/v1/login/`

    curl --location --request POST 'http://localhost:3000/api/v1/users' \
    --header 'Content-Type: application/json' \
    --data-raw '{
      "name": "Anderson",
      "surname": "Rodriguez",
      "username": "Andy",
      "password": "123456789",
      "currency": "usd"
    }'

Then get token
### Request
Use `Basic Auth` Authentication type (user/password)

`POST /api/v1/login/`

    curl --location --request POST 'http://localhost:3000/api/v1/login' \
    --header 'Authorization: Basic QW5keToxMjM0NTY3ODk='

    
