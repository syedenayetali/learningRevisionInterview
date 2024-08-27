pipeline {
    agent any

    environment {
        NODEJS_HOME = "${tool 'nodejs'}"
        PATH = "${env.NODEJS_HOME}/bin:${env.PATH}"
    }

    stages {

        stage("Clean up") {
            steps {
                deleteDir()
            }
        }

        stage("Clone Repo") {
            steps {
                sh "git clone https://github.com/syedenayetali/learning-cicd.git"
            }
        }

        stage("Install Dependencies :: Run npm") {
            steps {
                sh "npm install"
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm run test'
            }
        }

        stage('Build The Application') {
            steps {
                sh 'npm run build'
            }
        }

    }

    post {
        always {
            cleanWs()
        }
    }
}