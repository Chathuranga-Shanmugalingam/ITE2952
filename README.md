# ITE2952
Programming Group Project 2023S1
..........................................................................................................................................

1	Install Python

https://www.python.org/ftp/python/3.12.3/python-3.12.3-amd64.exe

 

Tick: Use admin privileges when installing py.exe
Tick: Add python.exe to PATH
Install Now

Python installation location:
C:\Users\User\AppData\Local\Programs\Python\Python312

Add Python to the system environment variables

Add Python Path:
In the Edit Environment Variable window, click "New" and add the path to your Python installation directory (C:\Users\User\AppData\Local\Programs\Python\Python312).
Also, add the path to the Scripts directory (C:\Users\User\AppData\Local\Programs\Python\Python312\Scripts) if you want to run Python scripts and tools installed via pip.

 




2	Install Xampp
https://sourceforge.net/projects/xampp/files/XAMPP%20Windows/8.0.30/xampp-windows-x64-8.0.30-0-VS16-installer.exe

 

With Xampp we get below Components of XAMPP:
Apache: The web server that handles HTTP requests and serves web pages.
MySQL: The database management system used for storing and managing databases.
phpMyAdmin: A web-based tool included in XAMPP for managing MySQL/MariaDB databases through a graphical interface.

 

 


http://localhost/phpmyadmin/
 


3	Create database

CREATE DATABASE IF NOT EXISTS computer_shop;

CREATE USER 'techtriad'@'localhost' IDENTIFIED BY 'ITE-2952';
GRANT ALL PRIVILEGES ON computer_shop.* TO 'techtriad'@'localhost';
FLUSH PRIVILEGES;

 

4	Install Node

https://nodejs.org/dist/v20.13.1/node-v20.13.1-x64.msi

 

C:\Program Files\nodejs\

 

 


5	Run Python backend

Step 01
PS C:\Users\User\ITE-2952\computer_shop> python -m venv env

 

Step 02
PS C:\Users\User\ITE-2952\computer_shop> .\env\Scripts\activate
 

Step 03


(env) PS C:\Users\User\ITE-2952\computer_shop> pip install django djangorestframework djangorestframework-simplejwt django-cors-headers mysqlclient pandas mysql-connector-python

 

 


Step 03

(env) PS C:\Users\User\ITE-2952\computer_shop> cd backend
(env) PS C:\Users\User\ITE-2952\computer_shop\backend> python manage.py makemigrations
(env) PS C:\Users\User\ITE-2952\computer_shop\backend> python manage.py migrate
(env) PS C:\Users\User\ITE-2952\computer_shop\backend> python manage.py runserver

 
 


 

 

6	Run React frontend

PS C:\Users\User\ITE-2952\computer_shop> cd frontend               
PS C:\Users\User\ITE-2952\computer_shop\frontend> npm run dev

 


 
