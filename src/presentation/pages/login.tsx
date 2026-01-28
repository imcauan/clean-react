import { Footer, LoginHeader } from "@/presentation/components";

export function LoginPage() {
  return (
    <div className="flex flex-col w-screen h-screen justify-between bg-background">
      <LoginHeader />
      <form className="flex items-center justify-center">
        <div className="flex flex-col gap-4 bg-white p-10 shadow-md">
          <h2 className="text-2xl font-bold text-center uppercase text-primary">
            Login
          </h2>
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Digite seu email"
              className="border w-md border-primary leading-10 rounded-md pl-3"
            />
            <span className="text-red-600 mt-1">Email inválido</span>
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="mb-1">
              Senha
            </label>
            <input
              type="password"
              name="password"
              placeholder="Digite seu senha"
              className="border w-md border-primary leading-10 rounded-md pl-3"
            />
            <span className="text-red-600 mt-1">Senha inválida</span>
          </div>
          <button
            type="submit"
            className="bg-primary w-md text-white rounded-md p-2 cursor-pointer hover:opacity-90 flex justify-center items-center"
          >
            Entrar
          </button>
          <a className="text-center text-primary hover:underline cursor-pointer">
            Criar conta
          </a>
          <div className="w-full flex justify-center my-4">
            <p className="text-primary-light">Erro</p>
          </div>
        </div>
      </form>
      <Footer />
    </div>
  );
}
