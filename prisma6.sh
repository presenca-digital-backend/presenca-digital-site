#!/bin/bash
# Downgrade para Prisma 6 (aceita url no schema)
npm install prisma@6 @prisma/client@6 --legacy-peer-deps
git add package.json package-lock.json
git commit -m "fix: downgrade prisma para v6 (compativel com schema)"
git push
