# 🐾 AdoptaMe API - Backend de Adopción de Mascotas

Este es el backend de una plataforma para gestionar la adopción de mascotas, desarrollado con [NestJS](https://nestjs.com). En un futuro permitirá administrar usuarios, publicaciones de mascotas, solicitudes de adopción y refugios.

## 🚀 Tecnologías utilizadas

* **Framework:** NestJS (TypeScript)
* **Base de datos:** Memoria local
* **Validación:** Class-validator

## 🛠️ Requisitos previos

Antes de comenzar, asegúrate de tener instalado:
* Node.js (v18 o superior)
* npm o pnpm

## 📦 Instalación y configuración

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/RojasCr/Adoptme.git
   cd adoptme
   ```

2. Instalar las dependencias:
   ```bash
   npm install
   ```

## 💻 Ejecución de la aplicación

```bash
# Modo desarrollo con recarga automática
npm run start:dev

# Modo producción
npm run start
```

## 🛣️ Endpoints principales (API Routes)

### 🐶 Mascotas
* `GET /pets` - Listar mascotas disponibles
* `POST /pets` - Publicar una nueva mascota
* `GET /pets/:id` - Detalle de una mascota específica.

### 📋 Usuarios
* `POST /users` - Registrar nuevo usuario.
* `GET /users` - Listar todos los usuarios.
