IMPORTANT:
This is a test task, details are listed in the PDF: Coding Exercise v1.9-1.pdf

Install
-----

Install the project's dependencies and run the tests before starting the
application server:

```
npm install
npm start
```

Usage
-----

Application provide a microservice performing 2 tasks.

#1. http://localhost:3000 this webpage gets rendered once the application is triggered.

It provide user to start a new match from a set of football playing teams. For this example I had all teams that played FIFA 2023 worldcup. Once a pair of team get selected application provides functionalities to update team scores.

Teams are randomly picked from the pool.

It also provides the user a functionality to end a match.

#2. List the matches in the order they were played from latest ended to first started. 

Desired listing order:
Task asks to list matches played with max combined goal score by both teams and if there a case when more than 1 match has same goal score then they are listed in the order they were played from latest to first.

Test
----

All 3 endpoints are working, used apache benchmark & loadtest to test the load.

Unit test cases are created. A reference document of testing is attached, it has screenshots of testing.

Improvements
----
1. Match data is not saved currently.

2. Could have second service just for user who can see only scores and can't update any data.

3. Could use Redis to support high volume of requests for second service to improve performance.

4. Could utlilize spawn / fork to use more CPU cores again to cater more requests.