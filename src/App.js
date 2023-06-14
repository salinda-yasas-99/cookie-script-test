import logo from "./assets/logo.jpeg";
import "./App.css";
import Cookies from "js-cookie";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    handleCreateCookie();
  }, []);

  const handleCreateCookie = () => {
    // Set a cookie with name 'myCookie' and value 'example-value'
    Cookies.set("myCookie1", "example-value");

    // Set a cookie with name 'myCookie' and value 'example-value' that expires in 7 days
    Cookies.set("myCookie2", "example-value", { expires: 7 });

    // Set a cookie with name 'myCookie' and value 'example-value' that expires in 1 hour
    Cookies.set("myCookie3", "example-value", {
      expires: new Date(Date.now() + 3600000),
    });

    // Set a cookie with name 'myCookie' and value 'example-value' that is secure (HTTPS only)
    Cookies.set("myCookie4", "example-value", { secure: true });

    // Set a cookie with name 'myCookie' and value 'example-value' with additional options
    Cookies.set("myCookie5", "example-value", {
      expires: 7,
      path: "/",
      domain: "example.com",
      secure: true,
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3 style={{ marginTop: "100px" }}>WebSafe</h3>
        <p>Open Source Cookie Consent Management System</p>
        <p>Test Website</p>
      </header>
    </div>
  );
}

export default App;
