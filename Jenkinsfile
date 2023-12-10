pipeline {
    agent {
        node {
            label 'ubuntu-node'
        }
    }

    environment {
        NPM_CONFIG_CACHE = "npm_config_cache"
    }

    stages {
        stage('API tests') {
            steps {
                script {
                    docker.image('node:latest').inside {
                        sh 'mkdir ${NPM_CONFIG_CACHE} -p'
                        sh 'npm install  --cache ${NPM_CONFIG_CACHE}'
                        sh 'npm run coingecko:mochawesome'
                        sh 'npm run coingecko:junit'
                    }
                }
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'mochawesome-report/*', fingerprint: true, onlyIfSuccessful: false
            junit 'test-results.xml'
        }
    }
}

