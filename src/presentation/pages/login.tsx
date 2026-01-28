import {
  Footer,
  FormInput,
  FormStatus,
  LoginHeader,
} from "@/presentation/components";

export function LoginPage() {
  return (
    <div className="flex flex-col w-screen h-screen justify-between bg-background">
      <LoginHeader />
      <form className="flex items-center justify-center">
        <div className="flex flex-col gap-4 bg-white p-10 shadow-md">
          <h2 className="text-2xl font-bold text-center uppercase text-primary">
            Login
          </h2>
          <FormInput
            label="Email"
            name="email"
            type="email"
            placeholder="Digite seu email"
          />
          <FormInput
            label="Senha"
            type="password"
            name="password"
            placeholder="Digite seu senha"
          />
          <button
            type="submit"
            className="bg-primary w-md text-white rounded-md p-2 cursor-pointer hover:opacity-90 flex justify-center items-center"
          >
            Entrar
          </button>
          <a className="text-center text-primary hover:underline cursor-pointer">
            Criar conta
          </a>
          <FormStatus />
        </div>
      </form>
      <Footer />
    </div>
  );
}
