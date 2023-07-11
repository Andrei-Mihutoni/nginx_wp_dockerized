# nginx_wp_dockerized

# Volumes:
```yaml
...
volumes:
  certbot-etc:
  wordpress:
  dbdata:

```

   The top-level volumes key defines the volumes certbot-etc, wordpress, and dbdata. When Docker creates volumes, the contents of the volume are stored in a directory on the host filesystem, /var/lib/docker/volumes/, that’s managed by Docker. The contents of each volume then get mounted from this directory to any container that uses the volume. In this way, it’s possible to share code and data between containers.


## Networks:

```yaml
networks:
  app-network:
    driver: bridge
```
The user-defined bridge network app-network enables communication between your containers since they are on the same Docker daemon host. This streamlines traffic and communication within the application, as it opens all ports between containers on the same bridge network without exposing any ports to the outside world. Thus, your db, wordpress, and webserver containers can communicate with each other, and you only need to expose port 80 for front-end access to the application.
