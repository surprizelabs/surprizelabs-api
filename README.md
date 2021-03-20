# Swagger

### Running the app
```npm install``` to install all the dependencies.


```npm run start``` application will run on port 3000.

### Available Endpoints

```/health``` shows if the application is running.

```/auth/twitch/login``` will redirect to Twitch OAuth page.

```/auth/twitch/callback``` after the user has logged in, this endpoint point will be called and will redirect to ```/?token=userToken``` setting the user access token into ```splabs``` cookie.

##### Authenticated user endpoints
To access the following endpoints, the user must be authenticated, and the access token should be sent on Header as 'Authorization': 'Bearer token123' or providing the splabs cookie on the request.

```/twitch/users``` shows the user profile. A response mock can be found in /test/mocks/twitch-user-info.json

```/twitch/follows``` shows the channels followed by the authenticated user. A response mock can be found in /test/mocks/twitch-user-follows.json









