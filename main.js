// Массив с паролями и соответствующими файлами
const filePasswords = {
    file1: { password: '21687', path: 'files/Е-мактаб 6 Б новый.xls'},
    file2: { password: '0', path: 'files/ '},
    file3: { password: '0', path: 'files/ '},
    file4: { password: '0', path: 'files/ '},
    file5: { password: '0', path: 'files/ '},
    file6: { password: '0', path: 'files/ ' },
    file7: { password: '0', path: 'files/ ' },
    file8: { password: '0', path: 'files/ ' },
    file9: { password: '0', path: 'files/ ' },
    file10: { password: '0', path: 'files/ ' },
    file11: { password: '0', path: 'files/ ' },
    file12: { password: '0', path: 'files/ ' },
    file13: { password: '0', path: 'files/ ' },
    file13: { password: '0', path: 'files/ ' },
    file13: { password: '0', path: 'files/ ' },
    file13: { password: '0', path: 'files/ ' },
    file13: { password: '0', path: 'files/ ' },
    file13: { password: '0', path: 'files/ ' },
    file13: { password: '0', path: 'files/ ' },
    file13: { password: '0', path: 'files/ ' },
    file13: { password: '0', path: 'files/ ' },
    file13: { password: '0', path: 'files/ ' },
    file13: { password: '0', path: 'files/ ' },
    file13: { password: '0', path: 'files/ ' },
    file13: { password: '0', path: 'files/ ' },
    file13: { password: '0', path: 'files/ ' },
    file13: { password: '0', path: 'files/ ' },
    file13: { password: '0', path: 'files/ ' },
    file13: { password: '0', path: 'files/ ' },
    file30: { password: '0', path: 'files/ ' },
};

let getpassword = Math.round( Math.random() * 100000 )
console.log(getpassword);

console.log(filePasswords);


// Функция проверки пароля
function checkPassword(file, inputId) {
    const password = document.getElementById(inputId).value;

    if (filePasswords[file]) {
        if (password === filePasswords[file].password) {
            alert('Пароль верный! Файл будет загружен.');

            // Проверяем, существует ли файл
            fetch(filePasswords[file].path, { method: 'HEAD' })
                .then((response) => {
                    if (response.ok) {
                        // Создаём ссылку для скачивания
                        const link = document.createElement('a');
                        link.href = filePasswords[file].path;
                        link.download = filePasswords[file].path.split('/').pop();
                        link.click();
                    } else {
                        alert('Файл не найден!');
                    }
                })
                .catch(() => {
                    alert('Ошибка при доступе к файлу.');
                });
        } else {
            alert('Неверный пароль!');
        }
    } else {
        alert('Файл не найден!');
    }
}
