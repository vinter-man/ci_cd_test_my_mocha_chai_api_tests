pipeline {
    agent {
        node {
            label 'ubuntu-node'
        }
    }

    environment {
        HOME = "${WORKSPACE}"
        NPM_CONFIG_PREFIX = "${WORKSPACE}/.npm-global"
    }

    stages {
        stage('API tests') {
            steps {
                script {
                    docker.image('node:latest').inside {
                        sh 'npm config set prefix $NPM_CONFIG_PREFIX'
                        sh 'npm install'
                        sh 'npm run coingecko:mochawesome'
                        sh 'npm run coingecko:junit'
                    }
                }
            }
        }
    }
}
