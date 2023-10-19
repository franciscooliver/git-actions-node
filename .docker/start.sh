cd /usr/app
# echo "============ Executando migrations ============"
npm run typeorm migration:run
echo "============ Iniciando servidor ============"
npm install
npm run start
