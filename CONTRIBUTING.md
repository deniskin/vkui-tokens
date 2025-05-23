# Внесение изменений в vkui-tokens

Вносить изменения в токены можно с помощью pull request-ов в этот
репозиторий на GitHub.

Чтобы ваши изменения попали в основную ветку (master) нужно, чтобы ваш
pull request одобрил кто-то из мейнтейнеров репозитория:

- [@vileven](https://github.com/vileven)
- [@8coon](https://github.com/8coon)
- [@warprobot](https://github.com/warprobot)

Перед отправкой pull request-а на ревью убедитесь, что:

- в вашей ветке работает сборка (`npm run build:local`),
- в вашей ветке проходят тесты (`npm test`),
- в вашей ветке проходит линтер (`npm run lint`), некоторые ошибки можно автоматически поправить с помощью `npm run lint:fix`,
- покрытие тестов не ниже минимального значения,
- если вы вносите изменения в задокументированные части библиотеки,
  ваш pull request содержит обновления документации,
- если вы вносите изменения в сами токены, вы
  согласовали их с дизайнерами.

Для разработки в репозитории может понадобиться установить
[nodejs](https://nodejs.org/) не ниже версии 16.

Если вы вносили изменения в цвета, необходимо обновить
[снапшоты тестов Jest](https://jestjs.io/ru/docs/snapshot-testing):

`npm test -- -u`

(Необязательно) Для игнорирование коммитов в `git blame`, связанные с
изменениями стиля кода, необходимо запустить следующую команду:

```sh
git config --local blame.ignoreRevsFile .git-blame-ignore-revs
```

## Версионирование

В целом версионирование vkui-tokens придерживается
[semver](https://semver.org/lang/ru/).

Критерии формирования новой версии в зависимости от изменений перечислены ниже.

#### Поднимаем **патч**, если:

- локальное изменение цветов без изменения прозрачности
- локальное обратно совместимое изменение размеров

#### Поднимаем минор, если:

- изменение прозрачности цветов (например rgb -> rgba)
- локальное изменение размеров в рамках ограниченного числа тем
  (в release notes обязательно указать, какие токены изменились)
- добавление нового токена или новой темы
- обратно совместимые изменения инфраструктуры

#### Поднимаем мажор, если:

- изменение размеров большого числа токенов
- удаление токена или темы
- другие обратно-несовместимые изменение

## Структура репозитория

- src
  - **interfaces** &mdash; описание интерфейса токенов
    - `general` &mdash; описание общих типов и структур дизайн-системы
    - `napespaces` &mdash; пространства имён тем оформления (vk, paradigm)
    - `themes` &mdash; описание интерфейса каждой темы оформления
  - **themeDescriptions** &mdash; описание конкретных значений переменных тем оформления
    - _base_ &mdash; значения переменных базовых тем
    - _themes_ &mdash; значения переменных продуктовых тем
    - _common_ &mdash; вспомогательный код и общие для всех тем значения
  - **build** &mdash; инструменты сборки
  - **lint** &mdash; инструменты линтинга токенов

### Структура наследования тем

- _vkBase_
  - vkBaseDark
  - vkCom
  - vkIOS
  - vkAccessibility
  - vkAccessibilityIOS
  - vkIdOk
  - vkIdOkIOS
  - vkontakteCom
  - vkontakteIOS
  - vkontakteAndroid
  - lego
- _paradigmBase_
  - paradigmBaseDark
  - calendar
    - calendarDark
  - calls
  - cloud
  - home
    - homeDark
  - media
    - mediaDark
  - mycom
  - octavius
    - octaviusCompact
    - octaviusCompactDark
    - octaviusDark
    - octaviusVK
    - octaviusVKDark
    - octaviusWhite
  - otvet
    - otvetDark
  - pharma
  - promo
  - pulse
    - pulseDark
  - workspaceAdmin
  - workspaceLandings
