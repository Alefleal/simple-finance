import React from 'react';
import '../../index.css';
import logoImg from '../../assets/logo-img.svg';
import homeImg from '../../assets/home-img.svg';
import ThemeToggle from '../../components/themeToggleComponent/ThemeToggle';
import Header from '../../components/header';

const Home = () => {
  return (
    <div className="pt-8 pr-8 pb-14 pl-8 max-w-[1200px] w-full mx-auto">
      <div className="flex justify-between items-center">
        <div className="lg:invisible">
          <Header />
        </div>
        <div>
          {/* TODO - Inserir botão switch para tema */}
          <ThemeToggle />
        </div>
      </div>

      <div className="lg:grid lg:grid-cols-2">
        <div className="lg:order-2">
          <div className="flex justify-center mt-10 mb-10">
            <img
              src={homeImg}
              alt="home page image"
              width={330}
              height={285}
              className="lg:w-[500px] lg:h-[620px]"
            />
          </div>
        </div>

        <div className="flex flex-col gap-5 lg:mx-auto lg:max-w-[550px] lg:justify-center">
          <div className="hidden lg:flex lg:items-center lg:font lg:gap-2.5 lg:mb-3">
            <div>
              <img src={logoImg} alt="logo" width={46} height={38} />
            </div>

            <div>
              <p className="text-primary font-bold text-2xl">Simple Finance</p>
            </div>
          </div>

          <p className="text-primary text-2xl font-semibold">
            Controle suas finanças pessoais de maneira{' '}
            <span>fácil e inteligente!</span>
          </p>
          <p className="text-secondary text-sm font-normal">
            Organize e planeje suas metas financeiras com nossa plataforma
            simplificada.
          </p>

          <button className="button-green rounded-xl font-semibold text-sm p-4">
            Experimente agora mesmo!
          </button>
          <button className="button-black rounded-xl font-semibold text-sm p-4">
            Entrar na minha conta
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
