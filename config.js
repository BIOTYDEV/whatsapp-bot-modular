require("dotenv").config();

module.exports = {
  nomeNegocio: process.env.NOME_CLIENTE || "Meu Negócio",
  erroOpcao:
    "Opção inválida. Por favor, digite apenas o número correspondente.",

  // O FLUXOGRAMA DE MENUS (O segredo para menus infinitos)
  fluxo: {
    // BLOCO 1: O início de tudo
    boas_vindas: {
      mensagem:
        "Olá! Bem-vindo(a)!\n\n1 - Fazer um Pedido\n2 - Tirar Dúvidas\n3 - Falar com Humano",
      proximosPassos: {
        1: "menu_pedido", // Se digitar 1, vai para o bloco "menu_pedido"
        2: "menu_duvidas", // Se digitar 2, vai para "menu_duvidas"
        3: "atendente", // Se digitar 3, vai para "atendente"
      },
    },

    // BLOCO 2: Um submenu de pedidos
    menu_pedido: {
      mensagem:
        "Que legal! O que você deseja pedir?\n\n1 - Pizza Salgada\n2 - Pizza Doce\n0 - Voltar ao início",
      proximosPassos: {
        1: "pedido_salgada",
        2: "pedido_doce",
        0: "boas_vindas", // Opção para voltar ao menu anterior
      },
    },

    // BLOCO 3: Fim do caminho (Exemplo 1)
    pedido_salgada: {
      mensagem:
        "Excelente! Anotamos seu pedido de Pizza Salgada. O entregador chegará em 40 minutos.",
      proximosPassos: {}, // DEIXAR VAZIO SIGNIFICA: O robô encerra o atendimento aqui
    },

    // BLOCO 4: Fim do caminho (Exemplo 2)
    pedido_doce: {
      mensagem: "Anotamos sua Pizza Doce! Vai chegar quentinha.",
      proximosPassos: {},
    },

    // BLOCO 5: Outro submenu
    menu_duvidas: {
      mensagem:
        "Nós funcionamos de Terça a Domingo, das 18h às 23h.\n\n0 - Voltar ao início",
      proximosPassos: {
        0: "boas_vindas",
      },
    },

    // BLOCO 6: Repasse para humano
    atendente: {
      mensagem:
        "Ok! Já notifiquei a nossa equipe. Aguarde um instante que um humano já vai te atender.",
      proximosPassos: {}, // Encerra o robô para não atrapalhar o humano
    },
  },
};
