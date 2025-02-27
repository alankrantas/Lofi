# Lofi - Docker Compose Version (With Models)

A slightly modified version of [Lofi](https://github.com/jacbz/Lofi), a ML-powered lo-fi music generator:

* Enables to use a [Docker Compose](https://docs.docker.com/compose/install/) file to run both the client and server containers on your machine.
* Added an static file server for the client.
* Fixed module path in several Python scripts in server.

## Start Lofi

After downloading this repo, run the following command under the project root directory:

```bash
docker-compose up -d
```

The client would be run on ```http://localhost:8080```. (The server APIs would be on ```http://localhost:3000```.)

## Stop Lofi

```bash
docker-compose down
```
