FROM mysql:8.3.0

RUN chown -R mysql:root /var/lib/mysql/

ARG MYSQL_DATABASE
ARG MYSQL_PASSWORD
ARG MYSQL_ALLOW_EMPTY_PASSWORD

ENV MYSQL_DATABASE='workdb'
ENV MYSQL_PASSWORD=''
ENV MYSQL_ALLOW_EMPTY_PASSWORD=1

ADD ./pyloop_files/src/data.sql /etc/mysql/data.sql

RUN sed -i 's/MYSQL_DATABASE/'$MYSQL_DATABASE'/g' /etc/mysql/data.sql
RUN cp /etc/mysql/data.sql /docker-entrypoint-initdb.d

EXPOSE 3306
