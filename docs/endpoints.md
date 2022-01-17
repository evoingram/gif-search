
# Endpoints

## Login / Registration

| Request Method | Endpoint         | Description                          |
| :------------- | :--------------- | :----------------------------------- |
| `POST`         | `/login`         | Logs user in and returns a token     |
| `POST`         | `/register`      | creates a user                       |

## Users

| Request Method | Endpoint                           | Description                  |
| :------------- | :------------------------- | :----------------------------------- |
| `POST`         | `/users/`                  | creates a user                       |
| `PUT`          | `/users/:usersid`          | updates a user                       |
| `DELETE`       | `/users/:usersid`          | deletes a user                       |
| `GET`          | `/users`                   | returns list of users                |
| `GET`          | `/users/:usersid`          | returns a user                       |

## Search GIFs on GIPHY

| Request Method | Endpoint              | Description                               |
| :------------- | :-------------------- | :---------------------------------------- |
| `GET`          | `/search/:searchterm` | returns list of gifs matching that term   |

### Query Parameters

- limit: limit the number of images returned from Giphy
