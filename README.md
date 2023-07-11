# nginx_wp_dockerized

# Volumes explained:
```yaml
...
volumes:
  certbot-etc:
  wordpress:
  dbdata:

networks:
  app-network:
    driver: bridge
```

   The top-level volumes key defines the volumes certbot-etc, wordpress, and dbdata. When Docker creates volumes, the contents of the volume are stored in a directory on the host filesystem, /var/lib/docker/volumes/, that’s managed by Docker. The contents of each volume then get mounted from this directory to any container that uses the volume. In this way, it’s possible to share code and data between containers.
