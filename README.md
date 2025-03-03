# Random quote App
## В проекте использовались библиотеки:
- React
- React - Redux
- React-router-dom
- React-hook-form
- jest tests

- Vite (инструмент сборки)

https://lenarybinskova.github.io/Profile_page/

Со старта приложения Вы попадаете на публичную главную страницу с информацией о Компании.
![publicPage](https://github.com/LenaRybinskova/Profile_page/blob/main/publicPage.bmp)

Нажав на кнопку Sign in , указав логин, пароль (валидация: все поля обязательны к заполнению, можно без @) 
переходите на страницу /profile.
![sign-up](https://github.com/LenaRybinskova/Profile_page/blob/main/sign-up.bmp)

Тут отображаются картинка и имя авторизовавшегося юзера.
![profile](https://github.com/LenaRybinskova/Profile_page/blob/main/profile.bmp)

Нажав на кнопку Update появится модальное окно
и будут отображаться результаты последовательных запросов за автором, затем за цитатой. 
В любой момент можно отменить отправку запросов, нажав кнопку Cancel.
![quote](https://github.com/LenaRybinskova/Profile_page/blob/main/quote.bmp)

Нажав кнопку Sign out очищается стейт, прекращается доступ к странице /profile, остается доступна только публичная главная страница.



