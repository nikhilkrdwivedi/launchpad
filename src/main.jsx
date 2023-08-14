import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "@contexts/ThemeContext.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  split,
  HttpLink,
} from "@apollo/client";
import { isLiveQuery, SSELink } from "@grafbase/apollo-link";
import { getOperationAST } from "graphql";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "@contexts/AuthContext.jsx";

const GRAFBASE_API_URL = import.meta.env.VITE_GRAF_BASE_URL;

const JWT_TOKEN = `Bearer ${localStorage.getItem("token")}`;

export const createApolloLink = () => {
  const sseLink = new SSELink({
    uri: GRAFBASE_API_URL,
    headers: {
      authorization: JWT_TOKEN,
    },
  });

  const httpLink = new HttpLink({
    uri: GRAFBASE_API_URL,
    headers: {
      authorization: JWT_TOKEN,
    },
  });

  return split(
    ({ query, operationName, variables }) =>
      isLiveQuery(getOperationAST(query, operationName), variables),
    sseLink,
    httpLink
  );
};

const link = createApolloLink();

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <ThemeProvider>
    <BrowserRouter>
      <ToastContainer />
      <AuthProvider>
        <ApolloProvider client={client}>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </ApolloProvider>
      </AuthProvider>
    </BrowserRouter>
  </ThemeProvider>
  // </React.StrictMode>
);
