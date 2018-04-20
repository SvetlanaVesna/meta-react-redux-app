# meta-react-redux-app

Первоначально необходимо зайти в каждый модуль (app1React, app2React) и выполнить там
```
npm install
npm run watch:portal
```

Затем заходим в корневой проект(portal) и в нем выполняем
```
npm install
npm run watch
```

И теперь идем в браузер по адресу http://localhost:9000

Каждый подпроект собирается maven в jar

```
mvn clean package

```

