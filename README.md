# Netflix Clone Using React and Firebase

Based on Karl Hadwen's tutorial titled, [Netflix Clone - React Tutorial - Styled Components - Firebase (Firestore & Auth)](https://youtu.be/x_EEwGe-a9o), this project 
is a watered down clone of the popular streaming service - Netflix. The application is live on heroku and can be visited from [here](https://netflix-portfolio-project2.herokuapp.com/).

# Description of functionalities covered

The application encompasses a total of pages - Home, Sign in, Sign up and browse. An authenticated user has the ability to browse through various genres of films and
series that are uploaded as samples. Each slide item contains the description of the content along with the maturity level and the player in each of them plays a sample
video on overlay.

# Preview

<p float = "left" align = "center">
<img src="/readMeAssets/homePage.png" alt = "HomeScreen" height="850"/>
  <img src="/readMeAssets/browsePage.png" alt = "HomeScreen" height="850"/>
</p>

<p float = "left" align = "center">
<img src="/readMeAssets/signinPage.png" alt = "HomeScreen" width="33%"/>
<img src="/readMeAssets/signupPage.png" alt = "HomeScreen" width="33%"/>
<img src="/readMeAssets/profilesPage.png" alt = "HomeScreen" width="33%"/>
</p>

# Softwares used
ReactJs - Custom Hooks, Context, Compound Components, styled-components, React-router Firebase - auth and firestore, fuse.js

# Usage

## Add Env Variables
```
REACT_APP_FIREBASE_CREDS = {{"apiKey": "","authDomain": "","projectId": "","storageBucket": "","messagingSenderId": "","appId": ""}}
```

## Install Dependencies
```
npm install
```

## Run on your local machine
```
# Run frontend (:3000)
npm start
```

## To seed data to firestore
1. Go to src -> lib -> firebase.prod.js
2. Uncomment the following lines

    ```
    import { seedDatabase } from "../seed"
    seedDatabase(firebase)
    ```
3. Save the file <strong>once.</strong> The data is seeded to firestore successfully
4. Comment the lines again to avoid duplication of data.

# Acknowledgment
* Creator of the clone: Karl Hadwen
* Github: [@karlhadwen](https://github.com/karlhadwen)
