
## UppgiftsBeskrivning - U2 React

<img width="1440" alt="ReactDogs" src="https://user-images.githubusercontent.com/54171324/108594178-aa939300-7378-11eb-9f4a-33f61569120e.png">

<img width="1440" alt="ReactDogs_listvy" src="https://user-images.githubusercontent.com/54171324/108594187-b3846480-7378-11eb-96b8-b368ad94d2a4.png">

<img width="1440" alt="ReactDogs_enskildvy" src="https://user-images.githubusercontent.com/54171324/108594197-c1d28080-7378-11eb-86dd-8f51aaf46b99.png">


I denna uppgift skall ni arbeta med react och de delar denna uppgift täcker är.

* react-router
* Composition
* Proptypes
* Higher Order Components (HOC)
* Hooks
* Fetch - GET & POST

Vi bygger vidare på applikationen ni skapade i uppgift 1. Men nu skall vi skapa en routing för att kunna navigera mellan olika "screens", dessa är komponenter. Vi skall även arbeta emot ett REST-API som Jonas på Softhouse har skapat, utifrån JSONPlaceholder API't.

API: [https://api.softhouse.rocks](https://api.softhouse.rocks)

Detta API har två routes:

* ```/users```
* ```/posts```

Se swaggern för att testa och få en överblick av vad man kan göra med API't: [https://petstore.swagger.io/?url=https://api.softhouse.rocks/swagger.yaml](https://petstore.swagger.io/?url=https://api.softhouse.rocks/swagger.yaml)

När vi använder APIt får vi tillbaka en ```readableStream```, istället för JSON direkt för att hantera responsen behöver vi då göra lite extra så för responsen på alla era anrop kommer ni köra följande:

```
<Promise returned from fetch>
 .then((res)=> res.json()
 .then((res)=> HÄR FINNS ER RESPONS SOM JSON))
```

Applikationen skall bestå tre screens:

* DashboardScreen
* LoginScreen
* UserScreen

#### Film finns för guidning bifogad på ping pong.

### För betyget Godkänd krävs följande:

* Man skall kunna navigera till alla 3 skärmar utifrån en navigationsmeny. Aktiv skärm indikeras i navbaren.
* Klickar man på en användare i dashboarden så skall man kommer till UserScreen och användaren visas utifrån parametern som skickats.
* Applikationen skall bestå av 3 screens.
* Klickar man på user i navigationsmenyn så skall man skickas till UserScreen och en text skall berätta att man inte valt användare så inga parametrar skickats med.
* Klickar man på loginknappen i loginScreen så skall man navigeras till dashboarden med hjälp av History (OM MAN FYLLT I EN ANVÄNDARE SOM ÄR MINST 10 Karaktärer lång).
* Våra användare skall nu hämtas från ```https://api.softhouse.rocks```
* När man klickar på en användare hämtas denna genom ett nytt anrop med ID't som skickats med som parameter till routen.
* Vår användare skall presenteras som i filmen med uppgiften, address skall kunna togglas och placeholder-bilden är upp till er https://placekitten.com/
* UserScreen som hanterar vår enskilda användare skall vara en funktionskomponent och använda Hooks useState & useEffect för att hämta användaren när komponent laddas och spara denna i state.
* "show info" knappen skall toggla om inloggningsformuläret syns eller inte.
* Samtliga ```props``` skall defineras med PropTypes.

### För betyget Väl Godkänd krävs följande:

* Alla API-anrop skall ligga i en HOC(Higher Order Component) döp exempelvis till "withHTTPRequests".
* Det skall nu vara möjligt att lägga till en användare som skickas till vår backend (POST) och sparas i databasen.
* UI uppdateras med ny användare om POST'en gick igenom.
* Skicka även in en rapport på minst en A4 sida (400 ord) där du tar upp följande:
   * Beskriv vad en Higher order component är. Vad är dess syfte och när skall man använda dem?
   * Vad är skillnaden mellan ett lokalt/globalt state?
   * Vad är redux och dess syfte?
   * Skall man lägga allt i det globala statet? Varför, varför inte?
   * Vad är viktigt att tänka på när man tänker använda context?

För att formuläret inte skall bli för komplext fokuserar vi endast på 3 inputfält och mockar resten, se nedan.

Objektet vi kommer skicka kommer se ut som följande:

```JavaScript
const newUser = {

  name: <VÅR INPUT>,

  username: <VÅR INPUT>,

  email: <VÅR INPUT>,

  address: {

    street: 'mock street 12',

    suite: 'mock suite',

  city: 'mock city',

  zipcode: 'mock zip',

  geo: {

    lat: 0,

    lng: 0

  }
}
```

### Utöver ovanstående oavsett betyg skall applikationen uppfylla följande:

* När man kör applikationen med ```npm start``` alternativt ```yarn start``` skall applikationen byggas helt utan felmeddelande.
* Varje komponent (klass, funktion) ni skriver skall innehålla en kort beskrivning av dess funktionalitet.
* Varje metod som innehåller mer komplex funktionalitet skall ha en kommentar som beskriver vad den gör.
* Applikationen redovisas genom att ni zippar ert projekt (UTAN node_modules) Döp mappen till ReactU2RobLun (byt ut RobLun mot ert namn)

Checklista inför inlämning:

* Min applikation kan köras i webbläsaren utan felmeddelande
* Min applikation beter sig som angivits i beskrivningen ovan
* Jag har inga console.logs i min kod
* Jag har strukturerat upp min kod med indentations
* Jag har inte döpt några metoder eller egenskaper till svenska namn
* Jag använder beskrivande namn på metoder och egenskaper (inte för generella)
* Mitt repo är döpt korrekt
* Jag har inga egenskaper eller metoder som inte används
* Alla mina klasser och metoder har kommenterats (förklaring på vad de gör och innehåller)
* Min komponentstruktur följer nedan mönster där först i listan är längst upp

#### Komponentstruktur:
```
Imports { }
Class
Properties (egenskaper)
Constructor
Lifecycle methods
Methods (metoder)
Render
```
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
