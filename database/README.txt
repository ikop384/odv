
#Original data
Crash incident 1997 - current  (8/2019): 2.75 mil rows - 1.7 GB
https://data.pa.gov/Public-Safety/Crash-Incident-Details-CY-1997-Current-Annual-Coun/dc5b-gebx


#Data processing:
- Filter: Upper Merion Twp (46220) -> 9869 rows to save to DB. 
- ODV_data.csv => delete columns from "Crash-Incident-Details-CY-1997..." 
- reuse logic in Github contact project: create table & import data directly from CSV

#Postgres Docker image:
docker pull postgres (from Docker hub: https://hub.docker.com/_/postgres)
mkdir -p /home/vagrant/docker/volumes/postgres (vagrant user has permission)
docker run -e POSTGRES_PASSWORD=password -d -p 5432:5432 -v /home/vagrant/docker/volumes/postgres:/var/lib/postgresql/data  postgres

docker exec -it xxx bash //xxx - 1st 3 letter from container ID
which postgres

#Pgadmin4 docker image (use console is easier than script)
docker pull dpage/pgadmin4
docker run -p 80:80 -e 'PGADMIN_DEFAULT_EMAIL=user@domain.com' -e 'PGADMIN_DEFAULT_PASSWORD=password' -d dpage/pgadmin4  (simplest run)
- on Windows: localhost:8000 -> centos vm port 80 -> docker port 80
login: user@domain.com password
- connect to Postgres instance: IPv4 postgres/password -> create DB: ODV
use 'docker inspect <id>' -> find host IPAddress postgres image running (ex: 172.17.0.2)
- Create table: rclick on ODV -> CREATE script -> copy & paste section from import_data.sql
- Import data: refresh & rclick on new table -> import CSV file (choose option to drag/drop file)

---------------
#Dev running:
- /src/vagrant/centos7 -> vagrant up -> vagrant ssh -> docker ps -a -> docker start <id>
- if containers were removed -> run command above for postgres & pgadmin4