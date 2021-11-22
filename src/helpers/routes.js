import { Navigate } from "react-router-dom"

export function IsUserRedirect({ user, children, redirectTo }) {
  return !user ? children : <Navigate to={redirectTo} />
}

export function RequireAuth({ user, children, redirectTo }) {
  return user ? children : <Navigate to={redirectTo} />
}
