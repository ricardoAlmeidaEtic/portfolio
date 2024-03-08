FROM nginx:latest
COPY ./pyloop_files/src/frontend/ /usr/share/nginx/html/
