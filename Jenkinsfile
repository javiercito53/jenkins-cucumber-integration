pipeline {
  agent {
    docker {
      image 'centos'
      args '-p 80:80 -u root'
    }
  }
  stages {
    stage('Build') {
      node {
        def branchName = getCurrentBranch()
        def getCurrentBranch () {
            return sh (
                script: 'git rev-parse --abbrev-ref HEAD',
                returnStdout: true
            ).trim()
        }      
      }
      steps {
        
        echo 'My branch is' + branchName
        echo "current build number: ${currentBuild.number}"
        
        /*
        sh 'yum upgrade -y'
        sh 'yum update -y'

        sh 'yum install curl wget -y'
        sh 'curl -sL https://rpm.nodesource.com/setup_13.x | bash -'
        sh 'yum install nodejs -y'

        sh 'curl --silent --location https://dl.yarnpkg.com/rpm/yarn.repo | tee /etc/yum.repos.d/yarn.repo'
        sh 'rpm --import https://dl.yarnpkg.com/rpm/pubkey.gpg'
        sh 'yum install yarn -y'

        sh 'wget https://dl.google.com/linux/direct/google-chrome-stable_current_x86_64.rpm'
        sh 'yum install google-chrome-stable_current_x86_64.rpm -y'

        sh 'npm install pm2 -g'                
        sh 'pm2 -v'

        sh 'npm install cucumber -g'
        
        sh 'yarn install'
        sh 'yarn build'
        sh 'pm2 start server.js'
        sh 'yarn test-centos'
        */
      }
    }
  }
}
