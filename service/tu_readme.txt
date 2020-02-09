
#ODV service:
- query by county_code, municipality_code, year, month => allow to filter.
- montgomery/upper merion -> query db; otherwise -> use API (later feature)

#Code:
- bootstrap app: https://code.quarkus.io/ com.coco.odv:service -> download zip -> Eclipse import
- Run dev mode: ./gradlew quarkusDev -> localhost:8080/path  (debug port: 5005)
- Package: ./gradlew quarkusBuild -> java -jar build/service-1.0.0-SNAPSHOT-runner.jar
- database: https://quarkus.io/guides/hibernate-orm  (don't need persistence.xml)
application.properties:
quarkus.datasource.url = jdbc:postgresql://localhost:5432/ODV
quarkus.datasource.driver = org.postgresql.Driver
quarkus.datasource.username = postgres
quarkus.datasource.password = password
- enable CORS:   quarkus.http.cors=true
- JSON-B: only need to include dependency -> will return JSON
                 
#Test
- vup centos VM /c/src/vagrant/centos7 -> docker ps -a -> docker start <postgres_id>
- pgAdmin: http://localhost:8000 login: user@domain.com password
- cd /c/src/odv/service -> ./gradlew quarkusDev  
- test query: http://localhost:8080/odv/um?month=1&year=2016   (year: 1997-2017)

#Guide Ref:
https://quarkus.io/guides/
https://quarkus.io/get-started/
https://quarkus.io/guides/gradle-tooling

