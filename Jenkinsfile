pipeline {
  agent {
    docker {
      image 'centos'
      args '-p 80:80'
    }
  }
  stages {
    stage('Build') {
      steps {       
        sh 'yum update'
        sh 'yum upgrade'         

        sh 'yum install curl' 
        sh 'curl -sL https://rpm.nodesource.com/setup_13.x | bash -'
        sh 'yum install nodejs'

        sh 'npm install pm2'
        sh 'npm install cucumber'
        sh 'npm install'
        sh 'pm2 start server.js'
        sh 'npm test-centos'
      }
    }
  }
}