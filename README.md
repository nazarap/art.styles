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


# INSTALLATION

BACK-END SIDE
------------------------

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
Django create superuser
```sh
$ python manage.py createsuperuser --username=joe --email=joe@example.com
```


FRONT-END SIDE
------------------------

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.
