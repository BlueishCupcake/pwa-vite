# React + TypeScript + Vite + PWA

Tornando um VITE em um PWA:

1 - Instale vite-plugin-pwa;
2 - Adicionar o plugin ao vite.config.ts;
3 - Criar o maninfest no vite.config.ts;
4 - Assets baixaveis precisam estar na pasta public!

O plugin vite-plugin-pwa irá:

- gerar o Manifesto da Aplicação Web: usando a opção de plugin manifest

- configurar o Manifesto do aplicativo Web no ponto de entrada do aplicativo: adicionando um link no cabeçalho do ponto de entrada

- gerar o trabalhador de serviço: usando a opção de plug-in de estratégias (para obter mais informações, leia a secção Estratégias do trabalhador de serviço)

- gerar o script para registar o service worker no browser: utilizando a opção de plug-in injectRegister (para mais informações, leia a secção Registar Service Worker)` list
