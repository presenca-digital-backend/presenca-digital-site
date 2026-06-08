#!/bin/bash
set -e

echo "===== ANTES: topo do schema ====="
head -n 15 prisma/schema.prisma

# 1. Remover qualquer linha 'output = "..."' do bloco generator
sed -i '' '/output[[:space:]]*=/d' prisma/schema.prisma

echo "===== DEPOIS: topo do schema ====="
head -n 15 prisma/schema.prisma

# 2. Criar .env local com DATABASE_URL temporario (so para o build local passar)
if [ ! -f .env ]; then
  echo 'DATABASE_URL="postgresql://user:pass@localhost:5432/db?schema=public"' > .env
  echo ">>> .env criado"
fi

# 3. Correr build
echo "===== BUILD ====="
npm run build 2>&1 | tail -n 35
