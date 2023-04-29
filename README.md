# Methodology-Task

# Requirements
/alert make sure you have **docker** and **git** in your machine

# Docker command
> docker ps
> docker image ls
> docker rm `container name` -f


# Usage
 1. colne repo
    ``` bash
      clone https://github.com/Adosh74/Methodology-Task.git
    ```
2. move to folder
   ``` bash
     cd Methodology-Task
   ```
3. build a docker image
   ``` bash
     docker build -t simple-node-app .
   ```

4. run the docker container (isolated)
   ``` bash
     docker run --name node-app-container -d simple-node-app
   ```

5. run docker with the forward port
   ``` bash
     docker run --name node-app-container -d -p 5000:5000 simple-node-app
   ```
   
