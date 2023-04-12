import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Navigation = ({ userObj }) => {
  let name;
  if (userObj.displayName === null) {
    name = userObj.email.split("@")[0]; //@기준 split해서 앞에있는 것 가져옴
  }

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/profile">
            {userObj.displayName ? userObj.displayName : name}의 Profile
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
