pipeline {
    agent any  // runs on any available agent (ensure an agent has Node & browsers)
    stages {
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
                bat 'npx playwright install --with-deps'
            }
        }
        stage('Run Tests') {
            steps {
                bat 'cd tests && npm run tests'
            }
             post {
                always {
                    allure includeProperties:
                     false,
                     jdk: '',
                     results: [[path: 'allure-results']]
                }
            }
        }
    }
}
