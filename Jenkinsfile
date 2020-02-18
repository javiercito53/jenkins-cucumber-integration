pipeline {
  agent {
    docker {
      image 'centos'
      args '-p 80:80 -u root'
    }
  }
  stages {
    stage('Build') {
      steps {       
        sh 'yum update -y'
        sh 'yum upgrade -y'

        sh 'curl --silent --location https://dl.yarnpkg.com/rpm/yarn.repo | tee /etc/yum.repos.d/yarn.repo'
        sh 'rpm --import https://dl.yarnpkg.com/rpm/pubkey.gpg'
        sh 'yum install yarn -y'

        sh 'yum install curl' 
        sh 'curl -sL https://rpm.nodesource.com/setup_13.x | bash -'
        sh 'yum install nodejs'

        sh 'npm install pm2 -g '

        
        sh 'npm install cucumber'
        sh 'npm install'
        sh 'pm2 start server.js'
        sh 'npm test-centos'
      }
    }
  }
}