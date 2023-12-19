pipeline {
    agent {
        dockerfile true
    }

    stages {
        stage('API tests') {
            steps {
                sh 'npm run coingecko:mochawesome'
                sh 'npm run coingecko:junit'
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
