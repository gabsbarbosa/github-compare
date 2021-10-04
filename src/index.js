import React, { useState } from "react";
import ReactDOM from "react-dom";
import "@clayui/css/lib/css/atlas.css";
import AppBar from "./components/appBar";
import { Provider } from "@clayui/core";
import AppBody from "./components/appBody";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { ClayRadio } from "@clayui/form";
//import { token } from "./config/graphql";
/*<link
	rel="stylesheet"
	href="https://cdn.jsdelivr.net/npm/@clayui/css/lib/css/atlas.css"
/>*/
const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  headers: {
    Authorization: `Bearer ${
      /*token do gihub*/ "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"
    }`,
  },
});

function App() {
  const [layoutStyle, setLayoutStyle] = useState(false); //false ClayRadio, list true
  var typeLayout = function typeLayout() {
    console.log("cheguei");
    setLayoutStyle(!layoutStyle);
  };

  return (
    <Provider spritemap="./icons.svg">
      <AppBar /*layoutStyle="layoutStyle" setLayoutStyle="typeLayout"*/ />
      <AppBody /*layoutStyle="layoutStyle" setLayoutStyle="typeLayout"*/ />
    </Provider>
  );
}

//ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
