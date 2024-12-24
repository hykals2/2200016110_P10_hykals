pipeline {
    agent any
    environment {
        CI = 'true'
    }
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/hykals2/2200016110_P10_hykals'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run Unit Tests') {
            steps {
                sh 'npm test'
            }
        }
        stage('Integration Tests') {
            steps {
                echo 'Running integration tests...'
                // Tambahkan perintah pengujian integrasi di sini
            }
        }
        stage('Build') {
            steps {
                echo 'Building the application...'
                // Tambahkan perintah build jika diperlukan
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying the application...'
                // Tambahkan perintah deploy jika diperlukan
            }
        }
    }
    post {
        success {
            echo 'Pipeline finished successfully!'
            emailext (
                subject: 'Build Succeeded',
                body: 'The build succeeded!',
                to: '2200016110@webmail.uad.ac.id'
            )
        }
        failure {
            echo 'Pipeline failed!'
            emailext (
                subject: 'Build Failed',
                body: 'The build failed.',
                to: '2200016110@webmail.uad.ac.id'
            )
        }
    }
}
