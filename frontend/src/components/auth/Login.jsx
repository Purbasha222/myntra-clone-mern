import OTPForm from "../OTPForm";

const Login = () => {
  return (
    <div className="flex flex-col items-center pt-10 min-h-screen bg-pink-100">
      <div className=" border w-120 p-5 bg-white">
        <h1 className="font-bold text-2xl text-gray-700 mb-10">
          Login <span className="text-lg font-light"> or </span> Signup
        </h1>
        <OTPForm />
      </div>
    </div>
  );
};

export default Login;
