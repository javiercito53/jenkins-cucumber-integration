pipeline {
  agent {
    docker {
      image 'node:12.4.0-alpine'
      args '-p 80:80'
    }
  }
  stages {
    stage('Build') {
      steps {        
        sh 'npm install pm2'
        sh 'npm install cucumber'
        sh 'npm install'
        sh 'pm2 start server.js'
        sh 'npm test-centos'
      }
    }
  }
}