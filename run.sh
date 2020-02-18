mkdir Ambientes
cd Ambientes
mkdir Ambiente-node
cd Ambiente-node

npm install pm2
npm install cucumber

git clone https://gitlab.com/braianflorian/react-cucumber.git
cd react-cucumber
yarn install
pm2 start server.js