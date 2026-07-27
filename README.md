# 🐾 AdoptaMe API - Backend de Adopción de Mascotas

Este es el backend de una plataforma para gestionar la adopción de mascotas, desarrollado con [NestJS](https://nestjs.com). Permite administrar usuarios, publicaciones de mascotas, solicitudes de adopción y refugios.

## 🚀 Tecnologías utilizadas

* **Framework:** NestJS (TypeScript)
* **Base de datos:** PostgreSQL / MongoDB (con TypeORM o Mongoose)
* **Autenticación:** JWT (JSON Web Tokens) y Passport
* **Validación:** Class-validator

## 🛠️ Requisitos previos

Antes de comenzar, asegúrate de tener instalado:
* Node.js (v18 o superior)
* npm o pnpm
* Docker (opcional, para la base de datos)

## 📦 Instalación y configuración

1. Clonar el repositorio:
   ```bash
   git clone https://github.com
   cd tu-repositorio
   ```

2. Instalar las dependencias:
   ```bash
   npm install
   ```

3. Configurar las variables de entorno. Crea un archivo `.env` en la raíz del proyecto basándote en `.env.example`:
   ```env
   PORT=3000
   DATABASE_URL=postgres://usuario:password@localhost:5432/adopta_db
   JWT_SECRET=tu_clave_secreta
   ```

## 💻 Ejecución de la aplicación

```bash
# Modo desarrollo con recarga automática
npm run start:dev

# Modo producción
npm run start:prod
```

## 🛣️ Endpoints principales (API Routes)

### 🔒 Autenticación
* `POST /auth/register` - Registro de nuevos adoptantes o refugios.
* `POST /auth/login` - Inicio de sesión para obtener el token JWT.

### 🐶 Mascotas
* `GET /pets` - Listar mascotas disponibles con filtros (edad, tamaño, tipo).
* `POST /pets` - Publicar una nueva mascota (Solo refugios/admin).
* `GET /pets/:id` - Detalle de una mascota específica.

### 📋 Solicitudes
* `POST /adoptions` - Enviar una solicitud de adopción.
* `GET /adoptions` - Ver el historial de solicitudes.
