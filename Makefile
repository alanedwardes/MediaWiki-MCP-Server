.PHONY: install update build test run

install:
	docker run -it --rm -v "$(CURDIR)":/home/node/app -w /home/node/app -u node node:20 npm install

update:
	docker run -it --rm -v "$(CURDIR)":/home/node/app -w /home/node/app -u node node:20 npm update

build:
	docker run -it --rm -v "$(CURDIR)":/home/node/app -w /home/node/app -u node node:20 npm run build

test:
	docker run -it --rm -v "$(CURDIR)":/home/node/app -w /home/node/app -u node node:20 npm run test

run:
	docker run -it --rm -v "$(CURDIR)":/home/node/app -w /home/node/app -u node node:20 node build/index.js
