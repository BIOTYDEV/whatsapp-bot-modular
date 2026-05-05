const { Client, LocalAuth } = require("whatsapp-web.js");

const client = new Client({
  authStrategy: new LocalAuth(),
});

// ===== BOT ONLINE =====
client.on("ready", () => {
  console.log("✅ Bot está online!");
});

// ===== RECEBER MENSAGENS =====
client.on("message", async (message) => {
  // Ignorar grupos
  if (message.from.includes("@g.us")) return;

  const msg = message.body.toLowerCase().trim();

  // Simular digitação (mais humano)
  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  await delay(1000);

  // ===== MENU =====
  if (msg === "menu") {
    await delay(1000);
    return message.reply(
      `📋 *MENU*

1️⃣ Ver produtos
2️⃣ Falar com atendente
3️⃣ Horários
4️⃣ Promoções`,
    );
  }

  // ===== RESPOSTAS =====
  switch (msg) {
    case "1":
      await delay(1000);
      message.reply("🛒 *Produtos:*\n- Produto A\n- Produto B\n- Produto C");
      break;

    case "2":
      await delay(1000);
      message.reply("👨‍💼 Um atendente vai falar com você em breve.");
      break;

    case "3":
      await delay(1000);
      message.reply("⏰ Funcionamos das 08h às 18h.");
      break;

    case "4":
      await delay(1000);
      message.reply("🔥 Promoção: 20% OFF hoje!");
      break;

    default:
      // ===== RESPOSTAS INTELIGENTES =====
      if (msg.includes("oi") || msg.includes("olá")) {
        return message.reply("👋 Olá! Digite *menu* para ver opções.");
      }

      if (msg.includes("preço") || msg.includes("valor")) {
        return message.reply(
          "💰 Nossos preços variam. Digite *menu* e escolha 1.",
        );
      }

      if (msg.includes("humano") || msg.includes("atendente")) {
        return message.reply("👨‍💼 Já vou chamar um atendente para você.");
      }

      // ===== FALLBACK =====
      return message.reply("❓ Não entendi. Digite *menu* para ver opções.");
  }
});

// ===== INICIAR BOT =====
client.initialize();
