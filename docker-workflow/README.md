
## Example Application

* Highlights functional programming concepts for passing configs
* Ideally export functions for easier testing and controlling load order
* UncaughtException Handler
* Custom Error Objects
* Working with Docker in Dev


# Structure

The package.json is structured outside of the server. This is to make mounting the volume easier and to prevent `node_modules` leaking from the host.

# Working with the Project

* Build the docker image `docker build -t myapp:latest .`
* Running the app `docker run --rm -it -p 3333:3333 -v ${pwd}/server:/usr/src/app/server --name myapp myapp:latest npm start`
    * `--rm` cleans up the container to save resources once exited
    * `-it` gives a better console output from the container for interactive mode
    * `-p` binds host port with container port
    * `-v` mounts a volume in the container. Should be absolute path.
    * `--name` make it easier for querying or interacting with container

* In another terminal window you can run commands against the container like:
    `docker exec -it myapp npm run lint`