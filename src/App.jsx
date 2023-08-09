// import { useState } from "react";
import "./App.css";
// import { useTheme } from "@contexts/ThemeContext";
import Router from "./routes/Router";
// import { dirname } from "path";
import { useQuery, gql, useMutation } from '@apollo/client'
// Retrieve collection with Live Queries
export const TODOLIST_QUERY = gql`
  query @live {
    userCollection(first: 10) {
      edges {
        node {
          name
          email
        }
      }
    }
  }
`

function App() {
  // const { data, loading, error } = useQuery(TODOLIST_QUERY)
  // console.log(data, loading, error)
  // console.log({ dir: dirname });
  // const [count, setCount] = useState(0);
  // const { isDarkMode, toggleTheme } = useTheme();
  return <Router />;
}

export default App;
