import { Link } from "react-router";
import logo from "/favicon.png";
const AuthNav = () => {
  return (
    <div>
      <div className="flex justify-between py-5">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-10 md:h-14" />
          <div className="">
            <h1 className="md:text-2xl text-[19px] font-extrabold text-primary mt-1">
              Talent Trade
            </h1>
            <p className="md:font-semibold md:text-sm text-[11px] -mt-2">
              Connect, Learn, Grow
            </p>
          </div>
        </div>
        <div>
            <Link  className="px-4 py-2 bg-white text-indigo-600 font-medium rounded-lg shadow hover:bg-gray-100 transition duration-200">
            Back To Home
            </Link>
        </div>
      </div>
    </div>
  );
};

export default AuthNav;