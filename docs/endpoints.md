
# Endpoints - WIP

## Login / Registration

| Request Method | Endpoint         | Description                          |
| :------------- | :--------------- | :----------------------------------- |
| `POST`         | `/login`         | Logs user in and returns a token     |
| `POST`         | `/register`      | creates a user                       |

## Users

| Request Method | Endpoint                           | Description                          |
| :------------- | :--------------------------------- | :----------------------------------- |
| `POST`         | `/users/`                      | creates a user                       |
| `PUT`          | `/users/:usersid`          | updates a user                       |
| `DELETE`       | `/users/:usersid`          | deletes a user                       |
| `GET`          | `/users`                       | returns list of users                |
| `GET`          | `/users/:usersid`          | returns a user                       |

## Search GIFs on GIPHY

| Request Method | Endpoint              | Description                   |
| :------------- | :-------------------- | :---------------------------- |
| `POST`         | `/appearances/`       | creates an appearance         |
| `PUT`          | `/appearances/:appid` | updates an appearance         |
| `DELETE`       | `/appearances/:appid` | deletes an appearance         |
| `GET`          | `/appearances`        | returns list of appearances   |
| `GET`          | `/appearances/:appid` | returns one appearance        |
