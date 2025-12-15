# 🎁 Giu - IG Auto Giveaway

## 📋 Visão Geral

Este script automatiza a participação nos sorteios (Giveaways) do site Instant Gaming. Ele navega automaticamente por uma lista de sorteios, completa as tarefas de redes sociais, clica no botão de participar e gerencia o status de cada sorteio (participando, pendente ou encerrado).

---

## 🛠️ Instalação e Configuração

| Etapa | Descrição | Detalhes |
|-------|-----------|----------|
| **1. Instalar Extensão** | Instale uma extensão de UserScript | • [Violentmonkey](https://chromewebstore.google.com/detail/violentmonkey/jinjaccalgkegednnccohejagnlnfdag) (Recomendado) |
| **2. Criar Novo Script** | Abra a extensão e crie um novo script | • Clique no ícone da extensão<br>• Selecione o + "Criar novo script"<br>• Cole o [código](https://github.com/o-giu/instant-gaming-auto-giveaway/blob/main/codigo.js) fornecido |
| **3. Salvar Script** | Salve o script | • Certifique-se que está ativo<br>• O script funcionará em qualquer página da Instant Gaming |

---

## ⚙️ Como Usar

| Passo | Ação | Resultado Esperado |
|-------|------|-------------------|
| **1. Acesso** | Navegue para `https://www.instant-gaming.com/` | O painel do script aparecerá no canto inferior direito |
| **2. Interface** | Observe o painel de controle | • Barra de progresso<br>• Status atual<br>• Botões de controle (Iniciar, Resetar, Lista) <br>![image](https://github.com/user-attachments/assets/1fad8d49-53fe-4d83-9ad4-2163eeb2382a) |
| **3. Iniciar** | Clique em "INICIAR" | • O script começará a navegar pelos links<br>• Tarefas sociais serão feitas automaticamente<br>• A participação será confirmada <br>![image](https://github.com/user-attachments/assets/f82e86fe-dbf4-4721-82b1-52d55189d6a6) |
| **4. Gerenciar** | Clique em "📋 LISTA" | • Veja todos os sorteios cadastrados<br>• Status colorido (Verde: OK, Vermelho: Encerrado)<br>• Timer regressivo para o fim do sorteio <br>![image](https://github.com/user-attachments/assets/e529bcc8-bd03-495c-a125-0f95840f0d15) |

---

## 🔧 Funcionalidades Técnicas

### Automação Inteligente
| Recurso | Como Funciona |
|---------|--------------|
| **Tarefas Sociais** | Clica automaticamente nos botões de "seguir" (Instagram, Twitch, etc) se ainda não completados |
| **Detecção de Status** | Identifica se você já participou (Verde) ou se o sorteio acabou (Vermelho) |
| **Fechamento de Abas** | Fecha automaticamente janelas pop-up que o site tenta abrir |

### Gerenciamento de Lista
| Característica | Benefício |
|----------------|-----------|
| **Lista Editável** | Botões (+) e (-) permitem adicionar novos links ou remover antigos direto na tela |
| **Persistência** | Salva seu progresso e banco de dados no navegador, não perde ao fechar |
| **Minimização** | O painel pode ser minimizado para um ícone discreto no canto da tela |

---

## ⚠️ Cuidados e Limitações

### Recomendações de Uso
| Aspecto | Recomendação |
|---------|--------------|
| **Login** | Você deve estar logado na sua conta Instant Gaming |
| **Navegação** | Deixe a aba ativa enquanto ele trabalha para garantir os cliques |

### Limitações Conhecidas
| Limitação | Impacto | Solução |
|-----------|---------|---------|
| **Sorteios Encerrados** | Script identifica e marca como vermelho | Ele pula automaticamente para o próximo |

---

## 🐛 Solução de Problemas

### Problemas Comuns
| Problema | Causa Provável | Solução |
|----------|----------------|---------|
| **Script não aparece** | Extensão desligada | Verificar se o Violentmonkey está ativo |
| **Travou em um link** | Falha de carregamento | Clique em "RESETAR" e inicie novamente |
| **Lista sumiu** | Cache limpo | A lista padrão será recarregada automaticamente |

---

**Desenvolvido por:** @Giu  
**Compatibilidade:** Qualquer navegador com extensões de UserScript
