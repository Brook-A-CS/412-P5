# Intro
This is a repository containing all necessary files to run a containerized EC2 Instance with 5 unqiue containers on ports 8080-8085 and 2 exact copies on ports 8006-8090.

# Common Commands 
- build image: `` docker build -t p2-con . ``
- start image: `` docker run -d -p 8080:80 p2-con ``
- delete image: `` docker image rm -f <img id> `` 
- start compose: `` docker compose up -d ``

