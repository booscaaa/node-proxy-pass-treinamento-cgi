FROM nginx:1.20.0-alpine

COPY nginx.conf /etc/nginx/nginx.conf

RUN mkdir -p /var/log/cgi

ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz

ENTRYPOINT ["dockerize", "-wait", "tcp://db:5432", "-timeout", "50s", "-wait", "http://app:3000", "-wait", "http://pgadmin:80",  "/docker-entrypoint.sh"]

CMD ["nginx", "-g", "daemon off;"]