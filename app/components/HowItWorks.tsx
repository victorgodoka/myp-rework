'use client'

import { CiShoppingCart, CiCreditCard1, CiCircleCheck } from "react-icons/ci";
import { RiMailSendLine } from "react-icons/ri";
import { GiPayMoney } from "react-icons/gi";
import clsx from "clsx";

export default function HowItWorks() {
  const steps = [
    {
      icon: <CiShoppingCart className="text-white text-4xl" />,
      title: 'Você navega',
      description: 'Escolha os produtos que mais te interessam de um ou mais vendedores e adicione no carrinho'
    },
    {
      icon: <CiCreditCard1 className="text-white text-4xl" />,
      title: 'Compra',
      description: 'Efetue o pagamento para o MYP (PIX, TED, Cartão de Crédito, Depósito ou Boleto)'
    },
    {
      icon: <RiMailSendLine className="text-white text-4xl" />,
      title: 'Notificamos',
      description: 'O vendedor será notificado e enviará os produtos'
    },
    {
      icon: <CiCircleCheck className="text-white text-4xl" />,
      title: 'Confirma',
      description: 'Você confirma o recebimento dos produtos aqui no site e qualifica o vendedor'
    },
    {
      icon: <GiPayMoney className="text-white text-4xl" />,
      title: 'Recebe',
      description: 'Nós transferimos o crédito para o vendedor'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 after:content-[''] after:block after:w-32 after:mt-2 after:h-1 after:bg-myp-primary after:mx-auto after:rounded-full">
            Como Funciona
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Processo <b>simples e seguro</b> para comprar suas cartas favoritas
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-6">
                <div className={
                  clsx([
                    "rounded-full flex items-center justify-center mx-auto mb-4 w-20 h-20",
                    index % 2 === 0 ? "bg-myp-primary" : "bg-myp-secondary"
                  ])
                }>
                  {step.icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 