
#Note:
Angular version 8.2.14 
https://angular.io/start -> example app, document
OpenLayer 6.1.1 https://openlayers.org/en/latest/examples/ , also online API doc

#Icon:
from gogole "car accident icon png"
https://resizeimage.net/

#Install:
- ng new angular (run as admin) -> ng serve -o -> localhost:4200
- ng add @angular/material -> choose theme

#Run dev:
- start db: vup centos VM /c/src/vagrant/centos7 -> docker ps -a -> docker start 1e8
postgres console: pgAdmin: http://localhost:8000 login: user@domain.com password
- start service: cd /c/src/odv/service -> ./gradlew quarkusDev 
http://localhost:8080/odv/um?month=1&year=2016 
- run UI: ng serve -> http://localhost:4200/  
 
