import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "./contexts/ThemeContext.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  split,
  HttpLink,
} from '@apollo/client'
import { isLiveQuery, SSELink } from '@grafbase/apollo-link'
import { getOperationAST } from 'graphql'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { SignJWT } from 'jose'
// import  Jwt  from "jsonwebtoken";
// Example of genreating a JWT:
// const secret = new Uint8Array(
//   'JWT_SECRET123321JWT_SECRET'.split('').map((c) => c.charCodeAt(0)),
// )

// const getToken = () => {
//   return new SignJWT({ sub: 'user_1234', groups: [] })
//     .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
//     .setIssuer('https://devdactic.com')
//     .setIssuedAt()
//     .setExpirationTime('2h')
//     .sign(secret)
// }
// getToken().then(tokenn=>{
//   console.log({tokenn})
// })
const GRAFBASE_API_URL = 'http://127.0.0.1:4000/graphql'
// const GRAFBASE_API_URL = 'https://launchpad-master-nikhilkrdwivedi.grafbase.app/graphql'
// 'https://grafbase-app-ionic-main-saimon24.grafbase.app/graphql'

// Use JWT in a real app or API Key for testing with x-api-key
const JWT_TOKEN =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2OTE0MzUyMzQsImlzcyI6ImdyYWZiYXNlIiwiYXVkIjoiMDFINzhQQVdXMUZaVkJHOURISjFTNTVHNUMiLCJqdGkiOiIwMUg3OFBBWEhKNlJDSzBYNTRGN0Q1NjkyUyIsImVudiI6InByb2R1Y3Rpb24iLCJwdXJwb3NlIjoicHJvamVjdC1hcGkta2V5In0.Z93ehibx7ZRJjrbPMgBYtTSXL0bysWA7uD1gvUjtPj4'
// 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1c2VyXzEyMzQiLCJncm91cHMiOltdLCJpc3MiOiJodHRwczovL2RldmRhY3RpYy5jb20iLCJpYXQiOjE2NzMyNzE3MDIsImV4cCI6MTY3MzI3ODkwMn0.UTeRkRNd_e5J6rnqJmeFKN-MN9F3_PcYqp_cthsGp_E'
export const createApolloLink = () => {
  const sseLink = new SSELink({
    uri: GRAFBASE_API_URL,
    headers: {
      authorization: JWT_TOKEN,
      'x-api-key': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2OTE0MzUyMzQsImlzcyI6ImdyYWZiYXNlIiwiYXVkIjoiMDFINzhQQVdXMUZaVkJHOURISjFTNTVHNUMiLCJqdGkiOiIwMUg3OFBBWEhKNlJDSzBYNTRGN0Q1NjkyUyIsImVudiI6InByb2R1Y3Rpb24iLCJwdXJwb3NlIjoicHJvamVjdC1hcGkta2V5In0.Z93ehibx7ZRJjrbPMgBYtTSXL0bysWA7uD1gvUjtPj4'
    },
  })

  const httpLink = new HttpLink({
    uri: GRAFBASE_API_URL,
    headers: {
      authorization: JWT_TOKEN,
      'x-api-key': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2OTE0MzUyMzQsImlzcyI6ImdyYWZiYXNlIiwiYXVkIjoiMDFINzhQQVdXMUZaVkJHOURISjFTNTVHNUMiLCJqdGkiOiIwMUg3OFBBWEhKNlJDSzBYNTRGN0Q1NjkyUyIsImVudiI6InByb2R1Y3Rpb24iLCJwdXJwb3NlIjoicHJvamVjdC1hcGkta2V5In0.Z93ehibx7ZRJjrbPMgBYtTSXL0bysWA7uD1gvUjtPj4'

    },
  })

  return split(
    ({ query, operationName, variables }) =>
      isLiveQuery(getOperationAST(query, operationName), variables),
    sseLink,
    httpLink,
  )
}

const link = createApolloLink()

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
})

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ToastContainer />

      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </ApolloProvider>
  </React.StrictMode>
);
