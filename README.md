# VirtualLip-react-native
Utilize deep learning models to recognize face and detect lip position to find out the color and what brand of lipstick the person in the photo wears.

**Front-end Design**: React Native and Native Base

**Back-end Design**: PostgreSQL, Heroku, AWS

Demo Link: https://drive.google.com/file/d/1h7ojgBN3M4DHqhehQ7ZoYJWrB5uM_zYt/view
![image](https://github.com/VirtualLip/VirtualLip/blob/master/img/demo.PNG)
## Completeness Feature
1. Sign in/out (AWS Amplify)
Provide an login user interface for user
2. History (PostgreSQL)
Show users’ search history
3. Analyze (Facial Recognition Deep Learning Model)
Analyze the color of user’s lip, then show the lipstick that match the color

## Front-end Design
under the *Frontend* file

1. run <code>npm install</code>
2. run <code>npm run build</code>
3. run <code>npm start</code>

## Back-end Design
under the *Backend* file

For running locally with Unix like environment, 
1. run <code>sudo apt-get update</code>
2. run <code>sudo apt-get install build-essential libcairo2-dev libpango1.0-dev libjpeg-dev libgif-dev librsvg2-dev -y</code>
3. run <code>npm install</code>
4. run <code>npm run start</code>

For running on Docker container, run

<code>docker build . -t virtual_lip_backend</code>

<code>docker run -it --name virtual_lip_backend -p 2020:80 virtual_lip_backend</code>

The container will run at [http://192.168.99.100:2020](http://192.168.99.100:2020) for Windows.

As for Unix like environment, it will run at [http://localhost:2020](http://localhost:2020).
