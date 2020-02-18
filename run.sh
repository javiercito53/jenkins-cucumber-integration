#wget
#https://stackoverflow.com/questions/46109812/steps-to-install-and-run-headless-chrome-browser-on-centos-6-5-using-chrome-driv
#https://github.com/rquellh/testcafe-cucumber

npm install pm2
npm install cucumber

mkdir Ambientes
cd Ambientes
mkdir Ambiente-node
cd Ambiente-node

#front
git clone https://gitlab.com/braianflorian/react-cucumber.git
cd react-cucumber
yarn install

pm2 start server.js
yarn test-centos