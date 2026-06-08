#!/bin/bash
for i in $(seq 1 40); do
  echo "=== Tentativa $i ==="
  OUT=$(npm run build 2>&1)
  if echo "$OUT" | grep -q "Compiled successfully" && ! echo "$OUT" | grep -q "Cannot find module"; then
    echo "$OUT" | tail -n 15
    echo ">>> BUILD COMPLETO OK <<<"
    break
  fi
  PKG=$(echo "$OUT" | grep -oE "Cannot find module '[^']+'" | head -n1 | sed "s/Cannot find module '//;s/'//")
  if [ -z "$PKG" ]; then
    echo "$OUT" | tail -n 30
    echo ">>> ERRO NAO E MODULO EM FALTA - PARAR <<<"
    break
  fi
  echo ">>> Falta: $PKG — a instalar..."
  npm install "$PKG" --legacy-peer-deps
done
git add -A && git commit -m "fix: instalar modulos em falta + remover output do prisma" && git push
