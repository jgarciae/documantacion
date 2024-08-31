# Manual de Instalación para Aglio y JSDoc

Este documento ofrece una guía completa para instalar y configurar Aglio y JSDoc, herramientas esenciales para la documentación de API y generación de documentación de código, respectivamente.

## Índice

1. [Introducción](#introducción)
2. [Instalación de JSDoc](#instalación-de-jsdoc)
   - [Requisitos Previos](#requisitos-previos)
3. [Instalación de Aglio](#instalación-de-aglio)
   - [Requisitos Previos](#requisitos-previos-1)

## Introducción

- **JSDoc**: Herramienta para generar documentación a partir de comentarios en el código JavaScript.
- **Aglio**: Herramienta para generar documentación de API en formato HTML a partir de archivos en formato Markdown con la especificación API Blueprint.

## Instalación de JSDoc

### Requisitos Previos

Asegúrate de tener [Node.js](https://nodejs.org/) instalado en tu sistema. Puedes verificarlo ejecutando:

```bash
node -v
```

Instala jsdoc:
```bash
npm install -g jsdoc
```

Verifica la version de jsdoc:
```bash
jsdoc --version
```

Genera la documetación:
```bash
jsdoc script.js
```

## Instalación de Aglio

### Requisitos Previos


Instala jsdoc:
```bash
npm install -g aglio
```

Verifica la version de jsdoc:
```bash
aglio --version
```

Genera documentación
```bash
aglio -i api.md -o index.html
```
