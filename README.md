# Companies Aggregator App

You need to create an application that allows to user search companies and show companies information.

## Technologies:

1. [ESLint + Prettier](https://github.com/ebs-integrator/ebs-fe-intership-test-1)
2. NextJS
3. React
4. React Hooks
5. Typescript
6. Axios
7. SASS

## Todo:

### Markup:

1. Create main page when user will be able to search companies ([design](resources/1.png), [design 2](resources/2.png))
2. Create page with found companies ([design](resources/3.png))
3. Create page with company's profile ([design](resources/4.png))
4. Make it mobile friendly (responsive)

### Business logic:

1. Search companies using [https://app.informer.md/api/public/search?page=1&per_page=5&company_name=**INPUT-VALUE**](https://app.informer.md/api/public/search?company_name=enterprise&page=1&per_page=5)
2. Show all found companies [https://app.informer.md/api/public/search?page=**CURRENT_PAGE**&company_name=**INPUT_VALUE**](https://app.informer.md/api/public/search?per_page=25&page=1)
3. Show company's profile [https://app.informer.md/api/public/company?slug=**COMPANY_SLUG**](https://app.informer.md/api/public/company?slug=oilauto-lux)

The screens with pages are not just example, make your pages similar as possible.

[Design Source](https://informer.md/en)
