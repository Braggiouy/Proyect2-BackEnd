# T&M Solutions
T&M solutions is an API that serve a industrial machines and tools maintenances management app
# Installation
You have to install all dependencies of this api, just write this on your CLI or BASH ```$npm i``` 
# Usage
This API doesn't serve a front-end at the moment, but you can try all it's routes by using postman
## EndPoints
## Admin
| METHOD |ENDPOINT|TOKEN|DESCRIPTION|RETURNS|
|--------|--------|-----|-----------|-------|
|GET|/users|Yes|ASBAT see all users on the app|all the users in the app|
|GET|/users/mechanic|Yes|ASBAT see a specific user by his/her name|a especific user|
|POST|/auth/login|No|Mechaniacal&ASBAT can log in|a user token|
|POST|/users|Yes|ASBAT can register new users|the new user|
|PUT|/users/:email|Yes|ASBAT can update an existing user |the updated user|
|DELETE|/users/:email|Yes|ASBAT can delete an existing user|a message with the confirmation|
## User
| METHOD |ENDPOINT|TOKEN|DESCRIPTION|RETURNS|
|--------|--------|-----|-----------|-------|
|GET|/users|Yes|ASBAT see all users on the app|all the users in the app|
|GET|/users/mechanic|Yes|ASBAT see a specific user by his/her name|a especific user|
|POST|/auth/login|No|ASBAT can log in|a user token|
|POST|/users|Yes|ASBAT can register new users|the new user|
|PUT|/users/:email|Yes|ASBAT can update an existing user |the updated user|
|DELETE|/users/:email|Yes|ASBAT can delete an existing user|a message with the confirmation|
## Tools
| METHOD |ENDPOINT|TOKEN|DESCRIPTION|RETURNS|
|--------|--------|-----|-----------|-------|
|GET|/tools|Yes|ASBAT see all tools on the app|all the tools in the app|
|GET|/tools/:toolId|Yes|ASBAT see a specific tool on the app|a specific tool|
|GET|/tools/:busy|Yes|ASBAT see all tools matched by the selected status status|all the tools with that status|
|POST|/tool|Yes|ASBAT add a tool|the tool already created|
|PUT|/tool/:toolId|Yes|ASBAT actualize a tool by it's id|the updated tool|
|DELETE|/tool/:toolId|Yes|ASBAT delete a tool by it's id|a message with the confirmation|
## Machines
| METHOD |ENDPOINT|TOKEN|DESCRIPTION|RETURNS|
|--------|--------|-----|-----------|-------|
|GET|/machines|Yes|ASBAT see all machines on the app|all the machines in the app|
|GET|/machines/:machineId|Yes|ASBAT see a specific machine on the app|a specific machine|
|GET|/machines/:busy|Yes|ASBAT see all the  machines that matches with the selected status|a especific machine|
|POST|/machines|Yes|ASBAT add a machine|the machine already created|
|PUT|/machines/:machineId|Yes|ASBAT actualize a machine by it's id|the updated tool|
|DELETE|/machines/:machineId|Yes|ASBAT delete a machine by it's id|a message with the confirmation|
## Tool maintenances
| METHOD |ENDPOINT|TOKEN|DESCRIPTION|RETURNS|
|--------|--------|-----|-----------|-------|
|GET|/toolmaintenances|Yes|ASBAT see all tool maintenaces on the app|all the tool maintenances in the app|
|GET|/toolmaintenances/:toolId|Yes|ASBAT see a specific tool maintenace on the app|a tool maintenance|
|GET|/toolmaintenances/:userId|Yes|MechanicSBAT see all his/her Tool maintenances|all the tool maintenances assigned to the mechanic|
|POST|/toolmaintenances|Yes|ASBAT add a tool maintenance|the tool maintenance already created|
|PUT|/toolmaintenances/:toolId|Yes|ASBAT actualize a tool maintenance by it's id|the updated tool maintenance|
## Machines maintenances
| METHOD |ENDPOINT|TOKEN|DESCRIPTION|RETURNS|
|--------|--------|-----|-----------|-------|
|GET|/machinemaintenaces|Yes|MechanicSBAT see all machines maintnances on the app|all the machines maintenances in the app|
|GET|/machinesmaintenances/:machineId|Yes|MechanicSBAT see a specific machine  on the app|all the machine maintenances in the app|
|GET|/machinesmaintenances/:busy|Yes|MechanicSBAT see a specific user by its status|a especific machine maintenance|
|POST|/machinesmaintenances|Yes|MechanicSBAT add a tool|the machine maintenance already created|
|PUT|/machinesmaintenances/:machineMaintenanceId|Yes|ASBAT actualize a machine by it's id|the updated machine maintenance|
|PUT|/machinemaintenaces/:machineMaintenanceId|Yes|MechanicSBAT actualize a machine by it's id|he updated machine maintenance|
## Add user(POST)
```/user``` /n
Example:
```
{
    "name":"Juan",
    "email":"juan1102@gmail.com",
    "password":"123456789",
    "role":"mechanic",
    "address":"fake street, 123, 2nd floor, c",
    "phone":"666222555",
    "others":"blablabla"
}
```
## Log in (POST)
```/auth/login``` /n
Example:
```
{ 
    "email":"juan@gmail.com",
    "password":"123456789"
}
```
## tools
```/
