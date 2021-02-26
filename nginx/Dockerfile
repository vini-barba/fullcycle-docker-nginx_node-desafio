FROM nginx:latest

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d

RUN echo "\n\nhttp://localhost:8080/\n\n"