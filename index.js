import express from 'express';

const app = express();


app.use( (_req, res) => {
    res.send(`
    <!DOCTYPE html>
<html>
<head>
    <title>Docker CI/CD</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
        }
        h1 {
            font-size: 36px;
            margin: 20px 0;
        }
        h2 {
            font-size: 24px;
            margin: 10px 0;
        }
        p {
            font-size: 16px;
            line-height: 1.5;
            margin: 10px 0;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f2f2f2;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        pre {
            font-family: Consolas, monospace;
            font-size: 14px;
            background-color: #f9f9f9;
            border: 1px solid #ddd;
            padding: 10px;
            margin: 10px 0;
            overflow-x: auto;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Docker CI/CD</h1>
        <p>Docker can be used for continuous integration (CI) and continuous deployment (CD) to automate the build, test, and deployment of applications. CI is the process of automatically building and testing code changes as they are made, while CD is the process of automatically deploying code changes to production environments.</p>
        <h2>Continuous Integration</h2>
        <p>In a typical CI/CD workflow using Docker, code changes are pushed to a version control system such as Git. A CI server such as Jenkins or Travis CI then pulls the code changes and builds a Docker image from a Dockerfile. The Docker image can then be run in a container to run tests and perform other quality checks.</p>
        <pre>1. Code changes are pushed to a version control system
2. A CI server pulls the code changes
3. The CI server builds a Docker image from a Dockerfile
4. The Docker image is run in a container to run tests and perform other quality checks</pre>
        <h2>Continuous Deployment</h2>
        <p>If the tests pass, the Docker image can be pushed to a Docker registry such as Docker Hub or a private registry. The CD process can then pull the Docker image from the registry and deploy it to production environments. This can be done using tools such as Kubernetes or Docker Swarm to manage the deployment of containers across multiple hosts.</p>
        <pre>1. The Docker image is pushed to a Docker registry
2. The CD process pulls the Docker image from the registry
3. The Docker image is deployed to production environments using tools such as Kubernetes or Docker Swarm</pre>
        <p>By using Docker for CI/CD, teams can automate the build, test, and deployment of applications, which helps to ensure that changes are tested and deployed quickly and consistently. This can help to reduce the risk of errors and improve the overall quality of the application.</p>
    </div>
</body>
</html>
    `)
})

app.listen(5000, () => {
    console.log('server running on http://localhost:5000');
}
)