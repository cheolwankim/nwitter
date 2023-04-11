import AppRouter from "components/Router";
import { authService } from "fbase";
import { useEffect, useState } from "react";

function App() {
  const [init, setInit] = useState(false);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // #주석처리한것들 쓰지않게 코드 수정할수 있다
  const [userObj, setUserObj] = useState(null);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        // #setIsLoggedIn(true);
        setUserObj(user);
      }
      //# else {
      //#   setIsLoggedIn(false);
      //# }
      setInit(true);
    });
  }, []);

  return (
    <div>
      {init ? (
        <AppRouter
          isLoggedIn={
            Boolean(userObj) //#isLoggedIn
          }
          userObj={userObj}
        />
      ) : (
        "Initializing..."
      )}
      <footer>&copy; {new Date().getFullYear()} Nwitter</footer>
    </div>
  );
}

export default App;
