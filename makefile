SHELL := bash
export PATH := node_modules/.bin/:vendor/bin/:$(PATH)

node_modules: package.json
	npm install && touch node_modules

install: node_modules

lint: install
	eslint --ext .js --report-unused-disable-directives --fix components containers enhancers pages redux services utils 
	remark --quiet .

test: install
	jest

dev: install
	npm run dev

.PHONY: install lint test dev
