
## First Steps

* [Install Docker](https://www.docker.com/products/overview#/install_the_platform)
* [Sign up](https://cloud.docker.com/)
* `docker login`

## Basics

### Run a command

``` 
docker run --rm ubuntu ls -la /
```

* We create a container from image
* `--rm` removes the container once complete (cleanup)


### Interacting with OS

```
docker run --rm -it ubuntu /bin/bash
```

* `-it` - is interactive with tty support

While logged in we can make changes like

```
apt-get update
apt-get install curl wget
```

In another terminal window `docker ps` to find the process then `docker commit {ID} {IMAGE_NAME:TAG}`

### Tagging & Publishing

See `nginx` docs. Create the `nginx:mine` image. We need to point to our username to publish.

```
docker tag nginx:mine {username}/nginx:mine
docker push {username}/nginx:mine
```

`docker push` will publish the image onto docker hub allowing anyone to use `docker pull {username}/nginx:mine` or in a Dockerfile `FROM {username}/nginx:mine`





