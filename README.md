Archistyl [Architectural styles]
=====================================================

This service is for architects or people interested in architecture, where you can find information on the style of architecture for its features

TECHNOLOGY ON PROJECT
------------------------

    HTML TEMPLATES
        - CSS
        - HTML
        
    BACK-END PATH
         - Python
         - Django
         - Django REST
         - Sockets
     
    DATABASE
        - PostgreSQL

PROJECT STRUCTURE
------------------------

      api/                            directory with models and views for project api
      assets/                         front-end files
      django_react/                   django project settings and root url file
      node_modules/                   modules for front-end
      templates/                      directory for templates (index.html)
      .gitignore                      gitignore file
      manage.py                       root file for django project
      README                          this file


INSTALLATION
------------------------

BACK-END PATH

Install Django
```sh
$ sudo apt-get install python-django
```
Install Postgres
```sh
$ sudo apt-get install postgresql postgresql-contrib
```
Start Postgres in command line
```sh
$ sudo -i -u postgres
$ psql
```
Install package for django and postgres
```sh
$ sudo apt-get install python-pip python-dev libpq-dev postgresql postgresql-contrib
```
Tutorial install postgres and create user and role. Connect Django to Postgres

<a href="https://www.digitalocean.com/community/tutorials/how-to-use-postgresql-with-your-django-application-on-ubuntu-14-04">How to use PostgreSQL with Django application</a>

Install package for django and postgres
```sh
$ pip install --upgrade pip
$ pip install django-cors-headers
$ pip install djangorestframework
$ pip install flask
$ pip install Pillow
```

Run server
```sh
$ python manage.py runserver
```
Django migrate
```sh
$ python manage.py makemigrations api
$ python manage.py migrate
```
