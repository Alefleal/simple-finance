// Importação de bibliotecas necessárias
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Eye, EyeOff } from "lucide-react";


// Esquema de validação com Zod
const schema = z.object({
  name: z.string().min(3, "O nome deve ter pelo menos 3 caracteres"),
  email: z.string().email("E-mail inválido"),
  password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "As senhas não coincidem",
  path: ["confirmPassword"],
});

// Definição do tipo dos dados do formulário
type FormData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export default function Register() {
  // Hook para gerenciar o formulário
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  // Estado para alternar visibilidade da senha
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Funções para alternar visibilidade
  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

  // Função chamada ao enviar o formulário
  const onSubmit = (data: FormData) => {
    console.log("Dados do formulário:", data);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <div className="w-full max-w-md bg-gray-900 p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold text-white text-center">Criar sua conta</h1>
        <p className="text-gray-400 text-center mb-4">
          Se já possui uma conta, você consegue fazer{" "}
          <a href="#" className="text-green-500 font-bold">Login aqui!</a>
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Nome"
              {...register("name")}
              className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:border-green-500"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>

          <div>
            <input
              type="email"
              placeholder="Email"
              {...register("email")}
              className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:border-green-500"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Senha"
              {...register("password")}
              className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:border-green-500"
            />
            <button type="button" className="absolute right-3 top-3" onClick={togglePasswordVisibility}>
              {showPassword ? <EyeOff size={20} className="text-white"/> : <Eye size={20} className="text-white"/>}
            </button>
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>

          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirme a senha"
              {...register("confirmPassword")}
              className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:border-green-500"
            />
            <button type="button" className="absolute right-3 top-3" onClick={toggleConfirmPasswordVisibility}>
              {showConfirmPassword ? <EyeOff size={20} className="text-white"/> : <Eye size={20} className="text-white"/>}
            </button>
            {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full p-3 bg-green-500 text-white font-bold rounded hover:bg-green-600"
          >
            Criar Conta
          </button>
        </form>
      </div>
    </div>
  );
}
