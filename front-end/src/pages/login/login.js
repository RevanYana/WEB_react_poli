import { Link } from "react-router-dom";
import Input from "../../components/Input";

const Login = () => {
  // const [usernameReg, setUsernameReg] = useState("");
  // const [passwordReg, setPasswordReg] = useState("");

  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div className="row w-100 justify-content-center">
        <form className="col-md-10 col-sm-12 col-lg-6 col-xl-5 p-5 rounded shadow text-center ">
          {/* <img src="" className="img-fluid w-25" alt="" /> */}
          <h4>Login Poli Klinik</h4>
          <Input
            id="username"
            name="username"
            placeholder="Username"
            // onChange={(e) => {
            //   setUsernameReg(e.target.value);
            // }}
          />
          <Input
            name="password"
            type="password"
            placeholder="Password"
            // onChange={(e) => {
            //   setPasswordReg(e.target.value);
            // }}
          />
          <Link className="menu-title" to="/data-pasien">
            <button
              className="btn btn-primary w-100 rounded-pill"
              onClick={() => {
                window.location.href = "/profile";
              }}
            >
              Login
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
