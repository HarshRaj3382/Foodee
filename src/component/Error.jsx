
import { useRouteError } from "react-router-dom"
const Error = () => {
    const err=useRouteError();
    console.log(err);
  return (
    <div>
        <h2>Oops!!!</h2>
        <h3>
            Something went Wrong!!
        </h3>
        <h3>
            {err.status}:{err.statusText}
        </h3>
    </div>
  )
}

export default Error