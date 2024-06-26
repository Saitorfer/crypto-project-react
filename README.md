# crypto-project-react

In this project we use react, vite,zod, zustand and axios
we do 3 types of calls:

1. a call to and already create object with his info saved in data folder
2. a call to an API when you init the project that give you the 20 cryptos with more marketcap (in service folder) (we init it in App.tsx and get the result in the component)
3. a call to get the result based on the 2 lasts data, that is send when you submit the form

notes:

1. the store make the info conection (comunication) between the api calls and the components, the component call the store for data who calls the services
2. we use zod for types and schemas (all schemas cionvert into types to use them in the code)
