pipeline {
    agent {
        node {
            label 'ubuntu-node'
        }
    }

    environment {
        HOME = "${WORKSPACE}"
        NPM_CONFIG_PREFIX = "${WORKSPACE}/.npm-global"
        DOCKER_IMAGE_NAME = 'vinterman/my_mocha_chai_api_tests'
        DOCKER_HUB_CREDENTIALS = credentials('docker-hub-credentials')
    }

    stages {
        stage('Build docker image') {
            steps {
                script {
                    dockerImage = docker.build(DOCKER_IMAGE_NAME)
                }
            }
        }

        stage('API tests') {
            steps {
                script {
                    docker.image('node:latest').inside {
                        sh "npm config set prefix $NPM_CONFIG_PREFIX"
                        sh 'npm install'
                        sh 'npm run coingecko:junit'
                        sh 'npm run coingecko:mochawesome'
                    }
                }
            }
        }

        stage('Push docker image') {
            steps {
                script {
                    docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials') {
                        dockerImage.push("${env.BUILD_NUMBER}")
                        dockerImage.push('latest')
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
