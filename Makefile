deploy:
	git pull --rebase
	exit
	sudo su
	npm install
	sh compile.sh
	cp -rv build/* /var/www
