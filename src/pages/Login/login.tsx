import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Logo from '../../assets/Vector.png';
import Facebook from '../../assets/Facebook.png';
import Google from '../../assets/google.png';
import Apple from '../../assets/apple.png';

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="bg-[#f6f6f6] flex flex-col justify-center items-center min-h-screen">
      <div className="relative w-96 h-screen">
        <div className="absolute pl-5 flex flex-row items-center gap-1 pt-4 py-1.5">
          <img src={Logo} alt="Logo" className="w-[23px] h-[15px]" />
          <p className="text-lg font-semibold">Simple Finance</p>
        </div>
        <div className="flex flex-col items-center mt-20 justify-center gap-7">
          <h3 className="text-3xl font-bold pr-15">Entrar na sua conta</h3>
          <p className="pr-10">
            Se não possui uma conta, você consegue
            <p className="text-[#55D462] cursor-pointer">Criar uma!</p>
          </p>
          <div className="flex flex-col items-center justify-center p-8 gap-5">
            <input
              placeholder="Email"
              className="bg-white w-80 h-16 rounded-xl pl-6"
            />
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Senha"
              className="bg-white w-80 h-16 rounded-xl pl-6"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-12 top-90"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
            <button
              type="button"
              className="bg-[#55D462] font-bold text-white w-80 h-16 rounded-xl"
            >
              Email
            </button>
          </div>
          <div className="flex items-center justify-center mt-[-15px] gap-5">
            <p className="font-bold text-base">ou continue com</p>
          </div>
          <div className="flex flex-row justify-center items-center gap-2">
            <img src={Facebook} alt="Facebook" className="w-10 h-10" />
            <img src={Apple} alt="Apple" className="w-10 h-10" />
            <img src={Google} alt="Google" className="w-10 h-10" />
          </div>
        </div>
      </div>
    </div>
  );
};
