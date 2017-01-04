## Сервис решения задач на тему булевых переменные ##


### Установка сервера ###
Поставьте на сервер node.js 6.5.0

    curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
    sudo apt-get install -y nodejs
    sudo apt-get install -y build-essential

Скопируйте репозиторий

    git clone https://github.com/mifarse/mlita-eltech.git

Зайдите в папку и запустите сервер

    cd mlita-eltech
    node bin/www
По умолчанию сервер работает на порту 3000. После запуска доступен по ссылке http://your.ip.address.here:3000

На этом все. Сервис не использует базу данных. Х

*Если возникнет ошибка с libxmljs:*
Требуется удалить из проекта папку и заново установить библиотеку.

    rm -rf node_modules/libxmls
    npm install libxmljs

