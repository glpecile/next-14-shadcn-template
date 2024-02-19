install_pnpm:
	@echo "🚧 Installing pnpm..."
	npm install -g pnpm

install:
	@echo "🛠️ Installing..."
	pnpm install --merge-git-branch-lockfiles

deps: install_pnpm install

create_env:
	@echo "🚚 Creating environment variables files .env",
	@cp .env.example .env

PORT ?= 3000

build:
	@echo "🏗️ Building..."
	pnpm build

start:
	@echo "🧜‍ Starting on port $(PORT)..."
	pnpm run start -p $(PORT)

deploy: build start

dev:
	@echo "🧑‍💻 Starting dev server on port $(PORT)..."
	pnpm run dev -p $(PORT)

lint:
	@echo "🧹 Linting..."
	pnpm lint

clean:
	@echo "🗑️ Cleaning..."
	rm -rf node_modules .next

clean_cache: clean
	@echo "🗑️ Cleaning everything..."
	pnpm cache clear --all

up_next:
	@echo "▲ Updating next..."
	pnpm up next react react-dom eslint-config-next --latest
