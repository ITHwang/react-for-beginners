import IdInput from "../IdInput";
import PwInput from "../PwInput";

const HomeHeader = () => {
  return (
    <div className="header">
      <h1>Movie List</h1>
      <div className="user-info">
        <IdInput placeholder="ID" />
        <PwInput type="password" placeholder="PW" />
      </div>
      <hr />
    </div>
  );
};

export default HomeHeader;
