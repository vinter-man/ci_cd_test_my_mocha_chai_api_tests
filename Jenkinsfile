pipeline {
    agent {
        node {
            label 'ubuntu-node'
        }
    }

    environment {
        HOME = "${WORKSPACE}"
    }

    stages {
        stage('API tests') {
            steps {
                script {
                    docker.image('node:latest').inside {
                        sh 'npm install'
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

