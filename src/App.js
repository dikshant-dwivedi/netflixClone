import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import * as ROUTES from "./constants/routes"
import { Home, Browse, Signin, Signup } from "./pages"
import { IsUserRedirect, RequireAuth } from "./helpers/routes"
import { useAuthListener } from "./hooks"

export default function App() {
  let { user } = useAuthListener()

  return (
    <Router>
      <Routes>
        <Route
          path={ROUTES.SIGN_IN}
          exact
          element={
            <IsUserRedirect user={user} redirectTo={ROUTES.BROWSE}>
              <Signin />
            </IsUserRedirect>
          }
        />
        <Route
          exact
          path={ROUTES.SIGN_UP}
          element={
            <IsUserRedirect user={user} redirectTo={ROUTES.BROWSE}>
              <Signup />
            </IsUserRedirect>
          }
        />
        <Route
          exact
          path={ROUTES.BROWSE}
          element={
            <RequireAuth user={user} redirectTo={ROUTES.SIGN_IN}>
              <Browse />
            </RequireAuth>
          }
        />
        <Route
          exact
          path={ROUTES.HOME}
          element={
            <IsUserRedirect user={user} redirectTo={ROUTES.BROWSE}>
              <Home />
            </IsUserRedirect>
          }
        />
      </Routes>
    </Router>
  )
}
