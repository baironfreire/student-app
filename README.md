# AppStudent

Este proyecto fue generado con  [Angular CLI](https://github.com/angular/angular-cli) version 16.2.6.

## Servidor de Desarrollo

Ejecute `ng serve` para iniciar un servidor de desarrollo. Vaya a  `http://localhost:4200/`. La aplicación se recargará automáticamente si realiza cambios en alguno de los archivos fuente.

## Andamiaje de Código

Ejecute `ng generate component component-name` para generar un nuevo componente, Tambien puede utilizar `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Compilación

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Ejecución de Pruebas Unitarias

Ejecute `ng test` para ejecutar las pruebas unitarias a través de [Karma](https://karma-runner.github.io).

## Ejecución de Pruebas End-to-End

Ejecute `ng e2e` para ejecutar las pruebas de extremo a extremo a través de una plataforma de su elección. Para usar este comando, primero debe agregar un paquete que implemente capacidades de pruebas de extremo a extremo.

## Ayuda Adicional

Para obtener más ayuda sobre Angular CLI, utilice `ng help` o consulte la página  [Angular CLI Overview and Command Reference](https://angular.io/cli).

## Decrición del Proyecto
`src/:` Aquí es donde resides la mayor parte del código fuente de tu proyecto. Se divide en subdirectorios clave:

`assets/:` Para archivos estáticos como imágenes y fuentes.

`shared/components/:` Contiene componentes reutilizables de tu aplicación, organizados en carpetas individuales por componente.

`modules/:` Cada página o vista de tu aplicación tiene su propio directorio con los archivos relacionados.

`core/services/:` Aquí se encuentran los servicios, como llamadas a API.
public/: Esta carpeta contiene archivos estáticos que se sirven tal cual al navegador, como index.html o el icono favicon.

`config/:` Aquí puedes almacenar archivos de configuración específicos de tu proyecto, como las rutas de tu aplicación, configuraciones generales, etc.

`tests/:` Si estás escribiendo pruebas para tu proyecto, esta carpeta se usa para organizar las pruebas unitarias e integración.

`node_modules/:` Esta carpeta se crea automáticamente cuando instalas las dependencias del proyecto con npm o yarn.

`package.json` y `package-lock.json:` Archivos de configuración y registro de dependencias de tu proyecto.

`README.md:` Un archivo que proporciona documentación y detalles sobre tu proyecto.

`.gitignore:` Un archivo que especifica qué archivos y carpetas deben ser ignorados por Git.

`.eslintrc.json, .prettierrc, .babelrc:` Archivos de configuración para herramientas como ESLint, Prettier y Babel que ayudan a mantener la consistencia en el código y la configuración del entorno.
Esta estructura es un punto de partida general y puede personalizarse según las necesidades de tu proyecto. Es importante mantenerla organizada y escalable para facilitar el desarrollo y el trabajo en equipo

```
Proyecto/
│
├── src/
│   ├── assets/
│   │   ├── images/
│   │   ├── fonts/
│   │
│   ├── components/
│   │   ├── Header/
│   │   │   ├── Header.js
│   │   │   ├── Header.css
│   │
│   ├── pages/
│   │   ├── Home/
│   │   │   ├── Home.js
│   │   │   ├── Home.css
│   │
│   ├── services/
│   │   ├── api.js
│
├── public/
│   ├── index.html
│   ├── favicon.ico
│
├── config/
│   ├── routes.js
│   ├── config.js
│
├── tests/
│   ├── unit/
│   ├── integration/
│
├── node_modules/
│
├── package.json
├── package-lock.json
├── README.md
├── .gitignore
├── .eslintrc.json
├── .prettierrc
├── .babelrc
```