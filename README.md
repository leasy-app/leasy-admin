# Leasy Admin
Leasy Next.js Admin Panel

## Technolgoies
* Node.js
* Next.js/React.js
* SWR Data Fetching (HTTP RFC 5861 | Stale While Revalidatie)
* Express + Spdy (HTTP/2) Serving
* Sass

## Run
1. Clone Repo and Install Dependencies
2. Run commands:
```bash
npm run dev
# or
yarn dev
```
3. Open [http://localhost:3000](http://localhost:3000)

## Deploy
There are two options available

### 1 Heroku Deploying
This project's `package.json` is configured in a way that selecting deploy from github in Heroku app creating section is all thing you need to do.
Then wait until the build is complete and your panel is up.

### 2 Server Deploying (VPS/Dedicated Server)
1. Clone Repo and Install Dependencies
2. Run `npm run release`
3. Configure ports (`default: 80,443`) and SSL Certificate paths in `server.js`
4. Run `node server.js` (or launch server.js in another way like `pm2` for startup launchs)

## Screenshots
Login             |  Stats
:-------------------------:|:-------------------------:
<img src="https://github.com/leasy-app/leasy-admin/blob/main/shots/login.png?raw=true" width="360" />  |  <img src="https://github.com/leasy-app/leasy-admin/blob/main/shots/stats.png?raw=true" width="360" />
Posts             |  Courses
<img src="https://github.com/leasy-app/leasy-admin/blob/main/shots/posts.png?raw=true" width="360" />  |  <img src="https://github.com/leasy-app/leasy-admin/blob/main/shots/courses.png?raw=true" width="360" />
Users            |   -
<img src="https://github.com/leasy-app/leasy-admin/blob/main/shots/users.png?raw=true" width="360" />  |  -