import { InputForm, Button } from "../../components";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { apiRegister } from "../../services/authen";

const Login = () => {
  const location = useLocation();
  const [isRegister, setIsRegister] = useState(location.state?.flag);
  const [payload, setPayload] = useState({
    phone: "",
    password: "",
    name: "",
  });
  useEffect(() => {
    setIsRegister(location.state?.flag);
  }, [location.state?.flag]);
  const handleSubmit = async () => {
    console.log(payload);
    const response = await apiRegister(payload);
    console.log(response);
  };
  return (
    <form className="w-full max-w-[600px] border shadow-lg rounded-md mt-4 bg-white px-4 py-3">
      <h2 className="font-semibold text-2xl text-center border-b-2 pb-2 border-b-rose-500">
        {isRegister ? "Đăng Ký Tài Khoản" : "Đăng Nhập Tài Khoản"}
      </h2>
      {isRegister && (
        <InputForm
          value={payload.name}
          setValue={setPayload}
          label={"Họ và tên"}
          plText={"Nhập Họ và tên "}
          type={"text"}
          field={'name'}
        />
      )}
      <InputForm
        value={payload.phone}
        setValue={setPayload}
        label={"Phone"}
        plText={"Nhập phone "}
        type={"text"}
        field={'phone'}
      />
      <InputForm
        label={"Mật khẩu"}
        plText={"Nhập mật khẩu "}
        type={"password"}
        value={payload.password}
        setValue={setPayload}
        field={'password'}
      />
      <Button
        className={
          "mt-5 mx-auto shadow-lg hover:shadow-rose-500/50 ease-in ease-in duration-300"
        }
        children={isRegister ? "Đăng Ký" : "Đăng Nhập"}
        bgColor={"bg-rose-600"}
        textColor={"text-white"}
        onClick={handleSubmit}
      />
      <div className="flex justify-between h-12 items-center border-t mt-4">
        {isRegister ? (
          <p className="text-slate-400 cursor-pointer hover:text-slate-600 ease-in duration-200 border-b-slate-500 hover:border-b">
            Bạn đã có tài khoản?{" "}
            <span
              className="text-blue-500 hover:text-blue-700"
              onClick={() => setIsRegister(false)}
            >
              Đăng Nhập Ngay
            </span>
          </p>
        ) : (
          <>
            <p className="text-slate-400 cursor-pointer hover:text-slate-600 ease-in duration-200 border-b-slate-500 hover:border-b">
              Bạn quên pass?
            </p>
            <p className="text-slate-400 cursor-pointer hover:text-slate-600 ease-in duration-200 border-b-slate-500 hover:border-b">
              Bạn chưa có acc?{" "}
              <span
                className="text-blue-500 hover:text-blue-700"
                onClick={() => setIsRegister(true)}
              >
                Đăng ký
              </span>
            </p>
          </>
        )}
      </div>
    </form>
  );
};

export default Login;
