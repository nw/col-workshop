
## Working with NGINX

### Default

```
docker run --rm -p 8888:80  nginx
```

#### Change Index.html

```
docker run --rm -p 8888:80 -v $(pwd):/usr/share/nginx/html nginx
```

* Make sure your shell is in this directory
* Volumes need to be absolute paths

#### Make an image with file added

```
docker build -t nginx:mine .
```

running

```
docker run --rm -p 8888:80 nginx:mine
```
