FROM ubuntu:latest

RUN apt-get update
RUN apt-get install -y apt-utils vim curl apache2 apache2-utils
RUN apt-get install -y python3
RUN apt-get install -y libapache2-mod-wsgi-py3
RUN apt-get install -y python3-pip
RUN pip install --upgrade pip
RUN pip install django

COPY ./apache/django.conf /etc/apache2/sites-available/000-default.conf

EXPOSE 80 3500

CMD ["apache2ctl", "-D", "FOREGROUND"]