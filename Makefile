build-mysql:
	docker build -t mysql:latest -f ./pyloop_files/mysql.Dockerfile .

build-nginx:
	docker build -t nginx:latest -f ./pyloop_files/nginx.Dockerfile .

build-python:
	docker build -t python:latest -f ./pyloop_files/python.Dockerfile .

run: build-mysql build-nginx build-python
	docker run -d --rm mysql:latest
	docker run -d --rm -p 8080:80 nginx:latest
	docker run --rm python:latest