#SE577 Group 1 ~ Microservices: Client UI

# Train Sim

An application to simulate purchasing train tickets for SE577 Group Homework Assignment 2.

This is the user interface of our application. It is written in [TypeScript](https://www.typescriptlang.org/) and uses [React](https://reactjs.org/) to render our views. We use [npm](https://www.npmjs.com/) to manage our dependencies and [webpack](https://webpack.js.org/) to build our project. Building the project (with `npm run build`) will result in a bundle of `.js` and `.html` being output to the `dist/` directory. We use [nginx](https://www.nginx.com/) to serve this `dist/` directory to the browser. The `nginx.conf` also configures nginx to forward any urls which start with `/api/` to trainsim-api. This allows the client to make requests to the api without using a different port.

## Getting Started

The following tools are required to build and run this project: Docker, Docker Compose, Maven, Java 11, and npm.

From the root of the project run:

```
mvn clean install
docker-compose up
```

You should then be able to visit https://localhost:8000/ in your browser. Ignore the certificate error and you will be greated with the homepage. (The certificate error happens because it is self-signed. It is not a concern because we are running locally.)
