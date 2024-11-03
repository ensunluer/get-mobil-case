soft_start:
	docker compose up react

start:
	docker compose up -d --build --force-recreate react
	docker cp get-mobil-cs:/app/node_modules .
	docker cp get-mobil-cs:/app/package.json .
	docker cp get-mobil-cs:/app/yarn.lock .

stop:
	docker compose down --rmi all -v
	docker system prune -a -f --all
	docker system prune -a -f --volumes
	rm -rf node_modules

reload:
	docker compose restart react

copy:
	rm -rf node_modules
	docker cp get-mobil-cs:/app/node_modules .
	docker cp get-mobil-cs:/app/package.json .
	docker cp get-mobil-cs:/app/yarn.lock .
