// ===== CHATBOT INTELLIGENT =====

// Détecter le chemin de base selon la page courante
function getBasePath() {
  const currentPath = window.location.pathname;
  if (currentPath.includes('/articles/')) {
    return '../';
  }
  return '';
}

const chatbotData = {
  articles: [
    {
      title: "Top 10 outils IA gratuits",
      url: "articles/top-10-outils-ia-gratuits.html",
      keywords: ["gratuit", "outils", "top", "meilleurs", "commencer", "débutant"],
      description: "Découvre les 10 meilleurs outils IA 100% gratuits pour freelances"
    },
    {
      title: "ChatGPT vs Claude vs Gemini",
      url: "articles/chatgpt-vs-claude-vs-gemini.html",
      keywords: ["chatgpt", "claude", "gemini", "comparatif", "quel choisir", "comparaison"],
      description: "Comparatif complet des 3 meilleures IA conversationnelles"
    },
    {
      title: "IA pour rédiger des emails",
      url: "articles/ia-pour-rediger-emails.html",
      keywords: ["email", "mails", "rédaction", "communication", "gagner temps"],
      description: "Comment gagner 2h par jour sur tes emails avec l'IA"
    },
    {
      title: "Automatiser sa facturation",
      url: "articles/automatiser-facturation-ia.html",
      keywords: ["facturation", "facture", "automatiser", "administratif", "paiement"],
      description: "Gagne 5h par mois sur ta facturation avec l'IA"
    },
    {
      title: "IA pour créer des logos",
      url: "articles/ia-creer-logos-gratuits.html",
      keywords: ["logo", "design", "créer", "graphisme", "identité visuelle"],
      description: "Top 5 des IA pour créer des logos gratuitement"
    },
    {
      title: "Notion AI test complet",
      url: "articles/notion-ai-test-complet.html",
      keywords: ["notion", "productivité", "organisation", "test", "avis"],
      description: "Notion AI vaut-il vraiment 10$/mois ?"
    },
    {
      title: "IA et SEO",
      url: "articles/ia-seo-optimiser-articles.html",
      keywords: ["seo", "google", "ranking", "optimisation", "articles", "contenu"],
      description: "Comment optimiser tes articles SEO avec l'IA"
    },
    {
      title: "Midjourney vs DALL-E 3",
      url: "articles/midjourney-vs-dalle3.html",
      keywords: ["midjourney", "dalle", "images", "génération", "visuels"],
      description: "Quelle IA choisir pour générer des images ?"
    },
    {
      title: "Détecter texte IA",
      url: "articles/detecter-texte-ia-outils.html",
      keywords: ["detecter", "détecteur", "texte ia", "contenu ia", "vérifier"],
      description: "Les meilleurs outils pour détecter un texte écrit par IA"
    },
    {
      title: "Erreurs IA débutant",
      url: "articles/ia-generative-erreurs-debutant.html",
      keywords: ["erreurs", "débutant", "conseils", "bien commencer", "pièges"],
      description: "10 erreurs à éviter quand on débute avec l'IA"
    },
    {
      title: "Gagner de l'argent avec l'IA",
      url: "articles/gagner-argent-ia-freelance.html",
      keywords: ["argent", "revenus", "monétiser", "gagner", "business"],
      description: "10 méthodes pour gagner de l'argent avec l'IA"
    },
    {
      title: "Extensions Chrome IA",
      url: "articles/extensions-chrome-ia-freelance.html",
      keywords: ["extensions", "chrome", "navigateur", "productivité"],
      description: "Top 10 des extensions Chrome IA pour freelances"
    },
    {
      title: "Outils IA par métier",
      url: "articles/meilleurs-outils-ia-par-metier.html",
      keywords: ["métier", "profession", "rédacteur", "designer", "développeur"],
      description: "Les meilleurs outils IA pour chaque métier de freelance"
    },
    {
      title: "IA gratuit vs payant",
      url: "articles/ia-gratuit-vs-payant.html",
      keywords: ["gratuit", "payant", "prix", "comparatif", "vaut le coup"],
      description: "Faut-il vraiment payer pour les outils IA en 2026 ?"
    },
    {
      title: "50 prompts ChatGPT",
      url: "articles/prompts-chatgpt-freelance.html",
      keywords: ["prompts", "chatgpt", "templates", "copier coller"],
      description: "50 prompts ChatGPT prêts à l'emploi pour freelances"
    }
  ],
  
  quickReplies: [
    "🎯 Meilleurs outils gratuits",
    "📧 Rédiger des emails",
    "💰 Gagner de l'argent",
    "🎨 Créer un logo",
    "📊 Comparatif ChatGPT/Claude",
    "🔍 Optimiser SEO",
    "🖼️ Générer des images",
    "📚 Tous les guides"
  ],
  
  responses: {
    greeting: [
      "Salut ! 👋 Je suis l'assistant IA du site. Je peux t'aider à :",
      "Bonjour ! 🤖 Ravi de te rencontrer ! Voici ce que je peux faire pour toi :",
      "Coucou ! 👋 Bienvenue sur Outils IA Freelance. Comment puis-je t'aider aujourd'hui ?"
    ],
    
    tools: [
      "Nous avons testé plus de 50 outils IA ! Voici nos recommandations :",
      "Excellente question ! Voici les meilleurs outils selon tes besoins :",
      "On a comparé les meilleurs outils pour toi. Regarde par ici :"
    ],
    
    pricing: [
      "La plupart des outils ont une version gratuite ! Voici les meilleurs :",
      "Good news : tu peux commencer gratuitement avec la plupart des outils.",
      "Pas besoin de payer pour débuter ! Voici les meilleures options gratuites :"
    ],
    
    comparison: [
      "On a fait des comparatifs détaillés pour t'aider à choisir :",
      "Voici nos comparatifs complets pour t'aider :",
      "Le meilleur outil dépend de tes besoins. Voici nos comparatifs :"
    ],
    
    email: [
      "L'IA peut vraiment t'aider sur les emails ! Voici notre guide complet :",
      "Gagne 2h par jour sur tes emails avec ces techniques :",
      "Voici comment automatiser ta rédaction d'emails :"
    ],
    
    billing: [
      "Automatiser ta facturation est une excellente idée ! Voici comment :",
      "Gagne 5h par mois sur l'administratif avec ces outils :",
      "Voici les meilleurs outils de facturation automatique :"
    ],
    
    logo: [
      "Créer un logo avec l'IA est possible et gratuit ! Voici comment :",
      "Voici les 5 meilleurs générateurs de logos IA :",
      "Pas besoin de designer pour ton logo ! Voici les outils :"
    ],
    
    seo: [
      "L'IA peut booster ton SEO ! Voici notre méthode complète :",
      "Optimise tes articles pour Google avec l'IA :",
      "Voici comment ranker plus haut sur Google avec l'IA :"
    ],
    
    images: [
      "Pour générer des images, voici les meilleures IA :",
      "Midjourney et DALL-E 3 sont les leaders. Voici notre comparatif :",
      "Voici les meilleurs outils pour créer des visuels avec l'IA :"
    ],
    
    beginner: [
      "Tu débutes ? Commence par ces articles :",
      "Voici les meilleurs guides pour commencer :",
      "Pour bien démarrer avec l'IA, voici nos recommandations :"
    ],
    
    money: [
      "Voici comment gagner de l'argent avec l'IA :",
      "On a testé 10 méthodes de monétisation. Voici les meilleures :",
      "L'IA peut vraiment générer des revenus. Voici comment :"
    ],
    
    prompts: [
      "On a préparé 50 prompts prêts à l'emploi pour toi :",
      "Voici nos meilleurs prompts ChatGPT pour freelances :",
      "Copie-colle ces prompts et gagne du temps :"
    ],
    
    default: [
      "Je n'ai pas trouvé de réponse précise. Tu peux :",
      "Bonne question ! Voici ce que je te suggère :",
      "Laisse-moi t'orienter vers les bonnes ressources :"
    ]
  }
};

// Fonction pour obtenir le lien corrigé
function getArticleUrl(baseUrl) {
  const basePath = getBasePath();
  return basePath + baseUrl;
}

// Chatbot UI Functions
function toggleChatbot() {
  const chatbotWindow = document.getElementById('chatbotWindow');
  const chatbotButton = document.getElementById('chatbotButton');
  
  if (chatbotWindow.style.display === 'flex') {
    chatbotWindow.style.display = 'none';
    chatbotButton.innerHTML = '🤖';
  } else {
    chatbotWindow.style.display = 'flex';
    chatbotButton.innerHTML = '❌';
    showWelcomeMessage();
  }
}

function closeChatbot() {
  document.getElementById('chatbotWindow').style.display = 'none';
  document.getElementById('chatbotButton').innerHTML = '🤖';
}

function showWelcomeMessage() {
  const messages = document.getElementById('chatbotMessages');
  messages.innerHTML = '';
  
  const welcomeMsg = chatbotData.greeting[Math.floor(Math.random() * chatbotData.greeting.length)];
  addBotMessage(welcomeMsg);
  
  setTimeout(() => {
    showQuickReplies();
  }, 500);
  
  setTimeout(() => {
    addBotMessage("💡 Tu peux aussi me poser des questions directement sur les outils IA, la productivité, ou le SEO !");
  }, 1000);
}

function showQuickReplies() {
  const messages = document.getElementById('chatbotMessages');
  const quickRepliesDiv = document.createElement('div');
  quickRepliesDiv.className = 'chatbot-quick-replies';
  
  chatbotData.quickReplies.forEach((reply, index) => {
    const button = document.createElement('button');
    button.className = 'chatbot-quick-reply';
    button.textContent = reply;
    button.onclick = () => handleQuickReply(reply, index);
    quickRepliesDiv.appendChild(button);
  });
  
  messages.appendChild(quickRepliesDiv);
  messages.scrollTop = messages.scrollHeight;
}

function handleQuickReply(text, index) {
  const existingReplies = document.querySelector('.chatbot-quick-replies');
  if (existingReplies) {
    existingReplies.remove();
  }
  
  addUserMessage(text);
  
  setTimeout(() => {
    const responses = getQuickReplyResponse(index);
    addBotMessage(responses);
  }, 400);
}

function getQuickReplyResponse(index) {
  const responses = {
    0: "Voici notre guide sur les <strong>meilleurs outils IA gratuits</strong> :<br><br><a href='" + getArticleUrl('articles/top-10-outils-ia-gratuits.html') + "' target='_blank'>👉 Top 10 outils IA gratuits</a><br><br>C'est le point de départ idéal pour découvrir l'IA sans dépenser un euro !",
    
    1: "Pour rédiger des emails plus vite, consulte notre guide complet :<br><br><a href='" + getArticleUrl('articles/ia-pour-rediger-emails.html') + "' target='_blank'>👉 IA pour rédiger des emails</a><br><br>Tu y trouveras des templates prêts à l'emploi et des prompts ChatGPT !",
    
    2: "Découvre comment monétiser l'IA :<br><br><a href='" + getArticleUrl('articles/gagner-argent-ia-freelance.html') + "' target='_blank'>👉 Gagner de l'argent avec l'IA</a><br><br>10 méthodes testées et approuvées !",
    
    3: "Crée un logo pro gratuitement avec l'IA :<br><br><a href='" + getArticleUrl('articles/ia-creer-logos-gratuits.html') + "' target='_blank'>👉 Top 5 des IA pour créer des logos</a><br><br>Plus besoin de designer pour ton identité visuelle !",
    
    4: "ChatGPT, Claude ou Gemini ? Voici notre comparatif complet :<br><br><a href='" + getArticleUrl('articles/chatgpt-vs-claude-vs-gemini.html') + "' target='_blank'>👉 ChatGPT vs Claude vs Gemini</a><br><br>On teste les 3 pour t'aider à choisir.",
    
    5: "Booste ton SEO avec l'IA :<br><br><a href='" + getArticleUrl('articles/ia-seo-optimiser-articles.html') + "' target='_blank'>👉 IA et SEO : Guide complet</a><br><br>La méthode exacte pour ranker sur Google avec l'IA.",
    
    6: "Génère des images pro avec l'IA :<br><br><a href='" + getArticleUrl('articles/midjourney-vs-dalle3.html') + "' target='_blank'>👉 Midjourney vs DALL-E 3</a><br><br>Le comparatif des 2 meilleures IA pour les images.",
    
    7: "Voici tous nos guides disponibles (15 articles !) :<br><br>" + chatbotData.articles.map((article, i) => `${i+1}. <a href='${getArticleUrl(article.url)}' target='_blank'>${article.title}</a>`).join('<br>') + "<br><br>Tu as l'embarras du choix ! 😊"
  };
  
  return responses[index] || responses.default;
}

function sendMessage() {
  const input = document.getElementById('chatbotInput');
  const message = input.value.trim();
  
  if (message === '') return;
  
  const existingReplies = document.querySelector('.chatbot-quick-replies');
  if (existingReplies) {
    existingReplies.remove();
  }
  
  addUserMessage(message);
  input.value = '';
  
  setTimeout(() => {
    const response = getBotResponse(message);
    addBotMessage(response);
  }, 500);
}

function addUserMessage(message) {
  const messages = document.getElementById('chatbotMessages');
  const div = document.createElement('div');
  div.className = 'chatbot-message user';
  div.textContent = message;
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
}

function addBotMessage(message) {
  const messages = document.getElementById('chatbotMessages');
  const div = document.createElement('div');
  div.className = 'chatbot-message bot';
  div.innerHTML = message;
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
}

function getBotResponse(userMessage) {
  const lowerMessage = userMessage.toLowerCase();
  
  for (const article of chatbotData.articles) {
    if (article.keywords.some(keyword => lowerMessage.includes(keyword))) {
      return `📚 J'ai trouvé un article qui devrait t'intéresser :<br><br><strong>${article.title}</strong><br><em>${article.description}</em><br><br><a href='${getArticleUrl(article.url)}' target='_blank'>👉 Lire l'article</a><br><br>Je peux aussi te montrer d'autres articles si tu veux !`;
    }
  }
  
  if (lowerMessage.includes('gratuit') || lowerMessage.includes('prix') || lowerMessage.includes('payant') || lowerMessage.includes('coût')) {
    return chatbotData.responses.pricing[Math.floor(Math.random() * chatbotData.responses.pricing.length)] + 
           "<br><br><a href='" + getArticleUrl('articles/top-10-outils-ia-gratuits.html') + "' target='_blank'>👉 Top 10 outils IA gratuits</a><br>" +
           "<a href='" + getArticleUrl('articles/ia-gratuit-vs-payant.html') + "' target='_blank'>👉 IA gratuit vs payant</a>";
  }
  
  if (lowerMessage.includes('email') || lowerMessage.includes('mail') || lowerMessage.includes('communication')) {
    return chatbotData.responses.email[Math.floor(Math.random() * chatbotData.responses.email.length)] + 
           "<br><br><a href='" + getArticleUrl('articles/ia-pour-rediger-emails.html') + "' target='_blank'>👉 Guide complet emails</a>";
  }
  
  if (lowerMessage.includes('factur') || lowerMessage.includes('administratif') || lowerMessage.includes('paiement')) {
    return chatbotData.responses.billing[Math.floor(Math.random() * chatbotData.responses.billing.length)] + 
           "<br><br><a href='" + getArticleUrl('articles/automatiser-facturation-ia.html') + "' target='_blank'>👉 Automatiser facturation</a>";
  }
  
  if (lowerMessage.includes('logo') || lowerMessage.includes('design') || lowerMessage.includes('graphisme')) {
    return chatbotData.responses.logo[Math.floor(Math.random() * chatbotData.responses.logo.length)] + 
           "<br><br><a href='" + getArticleUrl('articles/ia-creer-logos-gratuits.html') + "' target='_blank'>👉 Créer un logo avec l'IA</a>";
  }
  
  if (lowerMessage.includes('seo') || lowerMessage.includes('google') || lowerMessage.includes('ranking')) {
    return chatbotData.responses.seo[Math.floor(Math.random() * chatbotData.responses.seo.length)] + 
           "<br><br><a href='" + getArticleUrl('articles/ia-seo-optimiser-articles.html') + "' target='_blank'>👉 Optimiser SEO avec l'IA</a>";
  }
  
  if (lowerMessage.includes('image') || lowerMessage.includes('visuel') || lowerMessage.includes('midjourney') || lowerMessage.includes('dall')) {
    return chatbotData.responses.images[Math.floor(Math.random() * chatbotData.responses.images.length)] + 
           "<br><br><a href='" + getArticleUrl('articles/midjourney-vs-dalle3.html') + "' target='_blank'>👉 Midjourney vs DALL-E 3</a>";
  }
  
  if (lowerMessage.includes('chatgpt') || lowerMessage.includes('claude') || lowerMessage.includes('gemini') || lowerMessage.includes('comparatif')) {
    return chatbotData.responses.comparison[Math.floor(Math.random() * chatbotData.responses.comparison.length)] + 
           "<br><br><a href='" + getArticleUrl('articles/chatgpt-vs-claude-vs-gemini.html') + "' target='_blank'>👉 Comparatif complet</a>";
  }
  
  if (lowerMessage.includes('débutant') || lowerMessage.includes('commencer') || lowerMessage.includes('bien démarrer')) {
    return chatbotData.responses.beginner[Math.floor(Math.random() * chatbotData.responses.beginner.length)] + 
           "<br><br><a href='" + getArticleUrl('articles/top-10-outils-ia-gratuits.html') + "' target='_blank'>👉 Top 10 outils gratuits</a><br>" +
           "<a href='" + getArticleUrl('articles/ia-generative-erreurs-debutant.html') + "' target='_blank'>👉 Erreurs à éviter</a>";
  }
  
  if (lowerMessage.includes('argent') || lowerMessage.includes('revenus') || lowerMessage.includes('gagner') || lowerMessage.includes('monétiser')) {
    return chatbotData.responses.money[Math.floor(Math.random() * chatbotData.responses.money.length)] + 
           "<br><br><a href='" + getArticleUrl('articles/gagner-argent-ia-freelance.html') + "' target='_blank'>👉 Gagner de l'argent avec l'IA</a>";
  }
  
  if (lowerMessage.includes('prompt') || lowerMessage.includes('template') || lowerMessage.includes('copier')) {
    return chatbotData.responses.prompts[Math.floor(Math.random() * chatbotData.responses.prompts.length)] + 
           "<br><br><a href='" + getArticleUrl('articles/prompts-chatgpt-freelance.html') + "' target='_blank'>👉 50 prompts ChatGPT</a>";
  }
  
  if (lowerMessage.includes('outil') || lowerMessage.includes('ia') || lowerMessage.includes('logiciel')) {
    return chatbotData.responses.tools[Math.floor(Math.random() * chatbotData.responses.tools.length)] + 
           "<br><br><a href='" + getArticleUrl('articles/top-10-outils-ia-gratuits.html') + "' target='_blank'>👉 Top 10 outils gratuits</a><br>" +
           "<a href='" + getArticleUrl('articles/meilleurs-outils-ia-par-metier.html') + "' target='_blank'>👉 Outils par métier</a>";
  }
  
  return chatbotData.responses.default[Math.floor(Math.random() * chatbotData.responses.default.length)] + 
         "<br><br>💡 Voici nos articles les plus populaires :<br>" +
         "1. <a href='" + getArticleUrl('articles/top-10-outils-ia-gratuits.html') + "' target='_blank'>Top 10 outils IA gratuits</a><br>" +
         "2. <a href='" + getArticleUrl('articles/chatgpt-vs-claude-vs-gemini.html') + "' target='_blank'>ChatGPT vs Claude vs Gemini</a><br>" +
         "3. <a href='" + getArticleUrl('articles/ia-pour-rediger-emails.html') + "' target='_blank'>IA pour rédiger des emails</a><br><br>" +
         "Ou pose-moi une question spécifique !";
}

document.addEventListener('DOMContentLoaded', function() {
  const input = document.getElementById('chatbotInput');
  if (input) {
    input.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        sendMessage();
      }
    });
  }
  
  window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (nav) {
      if (window.scrollY > 100) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    }
  });
});
