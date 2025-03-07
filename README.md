**Запуск с помощью ANSIBLE.**
1. Базово настраиваем веб-сервер, настраиваем пользователей и пароли.
2. Создаем директорию в /home/user/ansible.
3. В директорию закидываем следующие файлы.
a) inventory
b) playbook.yml
c) vars.yml
d) nginx.conf.j2
4. В файлах меняем конфиги IP адреса сервера, имя пользователя, пароль пользователя.
5. Запускаем из директории ansible: ansible-playbook -i inventory playbook.yml

