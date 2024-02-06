# Uppgift: Recept Webb-App

Målet med denna uppgift är att skapa en responsiv webbapplikation som visar en lista över recept. Applikationen skall erbjuda användaren möjligheten att söka efter och filtrera recept för en mer skräddarsydd och effektiv användarupplevelse.

## Följ instruktionerna nedan

1. Klona repositoryn till din egen dator för att fortsätta från den befintliga koden.

2. Försök att utföra uppgiftens alla delar. Du måste som minst utföra **Del 1** för att bli godkänd. Om du inte får **Del 2** att fungera, kan hoppa över den och göra **Del 3**. 

3. När du är klar ska du skapa en repository och ladda upp din kod till GitHub.

## **Del 1**

1. Planera och rita upp en design för webbsidan med hjälp av verktyg som Figma. Läs igenom uppgiftens alla delar för att veta vad webbsidan skall innehålla.

2. Implementera API-end-pointen `/api/recipes`

   Denna end-point skall returnera en array som innehållar alla recept i JSON format. Recepten i arrayn skall endast innehålla följande information:

   - id
   - title
   - description
   - estimatedCost
   - imageUrl

3. Implementera `index.html` så att den hämtar alla recept från `/api/recipes` och visar en lista över tillgängliga recept.

## **Del 2**

1. Modifiera `/api/recipes` så den returnerar recept där receptets titel matchar användarens sökning.
   
   **Exempel:**
   
   ```
   /recipes?q=chicken
   ```

   Ovanstående sökning skall returnera en array som endast innehåller recept där titeln innehåller ordet `chicken`, utan skiftlägeskänslighet.

   Om inget recept hittas skall api-endpointen returnera en tom array.

   Om ingen sökkriterie ges, dvs. `/api/recipes` utan `?q=...` , skall alla recept returneras.

2. Modifiera `index.html` så att den inte visar något recept vid första ankomst. Implementera en sök-ruta och en sök-knapp där användaren kan söka efter recept som matchar sökningen. Endast de recept som matchar sökningen skall visas på sidan. Om man inte har skrivit något i sök-rutan och klickar på sök-knappen skall alla recept visas.

3. Modifiera `/api/recipes` så det går att hämta recept som är "budget-vänliga".
   
   Returnera alla recept där `estimatedCost` är under `600` för följande request:

   ```
   /api/recipes?budget-friendly
   ```

   Det skall gå att söka samtidigt efter både "budget-vänliga" och titel.
   
   **Exempel:**
   
   Följande api-request:
   
   ```
   /api/recipes?q=tomato&budget-friendly
   ```

   skall endast returnera recept där `title` innehåller `tomato` och `estimatedCost` är under `600`.

4. Modifiera `index.html` så att det går att kryssa i en ruta så man endast söker på "budget-vänliga" recept.

## **Del 3**

1. Implementera api-endpointen `/api/recipes/:id`
   
   Denna route skall returnera alla detajler för receptet med det angivna id:t. 

2. Implementera routen `/recipes/:id` som returnerar en HTML-sida som visar all information om receptet med det angivna id:t. Responsen kan skicka en enkel-HTML-sida där du via JavaScript använder `fetch` för att hämta information från `/api/recipes/:id` eller så kan du använda en view-engine som renderar sidan på servern. Du kan t.ex. använda [EJS](https://ejs.co/) som view-engine.

