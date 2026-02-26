# 🚀 Deploy do Portfólio na Vercel

## Passos para fazer o deploy:

### Opção 1: Deploy via Interface da Vercel (Mais Fácil)

1. **Acesse**: https://vercel.com
2. **Faça login** com sua conta GitHub, GitLab ou Bitbucket
3. **Clique em "Add New Project"**
4. **Importe seu repositório** do GitHub
   - Se ainda não subiu o código no GitHub, veja as instruções abaixo
5. **Configure o projeto**:
   - Framework Preset: **Vite**
   - Build Command: `npm run build` (já configurado)
   - Output Directory: `dist` (já configurado)
6. **Clique em "Deploy"**
7. **Aguarde** o build finalizar (2-3 minutos)
8. **Pronto!** Seu portfólio estará online 🎉

### Opção 2: Deploy via CLI da Vercel

```bash
# Instalar Vercel CLI globalmente
npm i -g vercel

# Na pasta do projeto, executar:
vercel

# Seguir as instruções no terminal
# Para deploy de produção:
vercel --prod
```

---

## 📋 Antes de fazer o deploy no GitHub

Se você ainda não tem o projeto no GitHub, siga estes passos:

### 1. Inicialize o Git (se ainda não fez)
```bash
git init
git add .
git commit -m "Portfólio Leonardo Fabretti - Primeira versão"
```

### 2. Crie um repositório no GitHub
- Acesse: https://github.com/new
- Nome sugerido: `portfolio` ou `portfolio-leonardo-fabretti`
- Deixe como **público** (para deploy gratuito na Vercel)
- **Não** inicialize com README (já temos um)

### 3. Conecte e envie para o GitHub
```bash
git remote add origin https://github.com/SEU_USUARIO/NOME_REPO.git
git branch -M main
git push -u origin main
```

---

## ✅ Arquivos já configurados para Vercel

- ✓ `vercel.json` - Configuração da Vercel
- ✓ `package.json` - Scripts de build
- ✓ `.gitignore` - Arquivos ignorados
- ✓ `index.html` - Meta tags para SEO

---

## 🌐 Após o Deploy

Sua URL será algo como: `https://seu-portfolio.vercel.app`

Você pode:
- **Conectar domínio customizado** (se tiver)
- **Configurar variáveis de ambiente** (se necessário)
- **Ativar HTTPS automático** (já vem por padrão)

---

## 🔄 Atualizações Automáticas

Após o primeiro deploy:
- Cada `git push` para o repositório
- Fará um deploy automático na Vercel
- Em 2-3 minutos seu site estará atualizado

---

## 📞 Suporte

Se tiver problemas:
- Documentação: https://vercel.com/docs
- Suporte: https://vercel.com/support
