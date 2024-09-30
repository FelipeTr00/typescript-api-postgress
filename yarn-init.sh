#!/bin/bash

# Saída no terminal em caso de erro
set -e

# Mensagem de início
echo "Iniciando configuração do projeto..."

# Instalar dependências do projeto
echo "Instalando dependências principais..."
yarn install

# Instalar dependências de desenvolvimento
echo "Instalando dependências de desenvolvimento..."
yarn add typescript ts-node-dev sucrase @types/node @types/express @types/pg -D

# Adicionar dependências principais
echo "Instalando dependências principais como express, pg..."
yarn add express pg dotenv

# Inicializar o TypeScript (se ainda não configurado)
if [ ! -f "tsconfig.json" ]; then
  echo "Configurando TypeScript..."
  npx tsc --init
fi

# Compilar o projeto (caso seja necessário)
echo "Compilando o projeto..."
yarn build

# Rodar o servidor em modo de desenvolvimento
echo "Iniciando o servidor em modo de desenvolvimento..."
yarn dev
