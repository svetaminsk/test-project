pipeline {
    agent any  // runs on any available agent (ensure an agent has Node & browsers)
    stages {
        stage('Install Dependencies') {
            steps {
                bat 'npm install -g playwright'
                bat 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                dir('tests') {
                    bat 'npx playwright test'
                }
            }
        }
    }
    post {
        always {
            archiveArtifacts artifacts: 'playwright-report/**', allowEmptyArchive: true
        }
        failure {
            echo 'Tests failed! Check the report for details.'
        }
    }
}
