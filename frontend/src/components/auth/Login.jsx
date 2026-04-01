import OTPForm from "../OTPForm";

const Login = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-pink-100">
      <h1 className="text-4xl font-bold">Welcome</h1>
      <div className=" border w-120 p-5 bg-white mt-5">
        <h1 className="font-bold text-2xl text-gray-700 mb-10">
          Login <span className="text-lg font-light"> or </span> Signup
        </h1>
        <OTPForm />
      </div>
    </div>
  );
};

export default Login;
