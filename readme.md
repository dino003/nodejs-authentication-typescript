# node-auth

## curl
```sh
curl -v -X POST localhost:4000/register -H 'Content-Type: application/json' -d '{"email": "boris@gmail.com", "name": "boris djoman", "password": "secretcahe",
  "passwordConfirmation": "secretcahe"} '
```

# Features 
Authentication build on top of node.js express, express-session  and so on