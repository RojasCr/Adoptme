<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>README - AdoptaMe API</title>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #24292e; max-width: 800px; margin: 0 auto; padding: 20px; }
        h1, h2, h3 { border-bottom: 1px solid #eaecef; padding-bottom: 0.3em; }
        code { background-color: rgba(27,31,35,0.05); padding: 0.2em 0.4em; border-radius: 3px; font-family: monospace; font-size: 85%; }
        pre { background-color: #f6f8fa; padding: 16px; border-radius: 6px; overflow: auto; }
        pre code { background-color: transparent; padding: 0; font-size: 100%; }
        ul { padding-left: 20px; }
    </style>
</head>
<body>

    <header>
        <h1>🐾 AdoptaMe API - Backend de Adopción de Mascotas</h1>
        <p>Este es el backend de una plataforma para gestionar la adopción de mascotas, desarrollado con <a href="https://nestjs.com" target="_blank">NestJS</a>. Permite administrar usuarios, publicaciones de mascotas, solicitudes de adopción y refugios.</p>
    </header>

    <main>
        <section>
            <h2>🚀 Tecnologías utilizadas</h2>
            <ul>
                <li><strong>Framework:</strong> NestJS (TypeScript)</li>
                <li><strong>Base de datos:</strong> PostgreSQL / MongoDB (con TypeORM o Mongoose)</li>
                <li><strong>Autenticación:</strong> JWT (JSON Web Tokens) y Passport</li>
                <li><strong>Validación:</strong> Class-validator</li>
            </ul>
        </section>

        <section>
            <h2>🛠️ Requisitos previos</h2>
            <p>Antes de comenzar, asegúrate de tener instalado:</p>
            <ul>
                <li>Node.js (v18 o superior)</li>
                <li>npm o pnpm</li>
                <li>Docker (opcional, para la base de datos)</li>
            </ul>
        </section>

        <section>
            <h2>📦 Instalación y configuración</h2>
            
            <p>1. Clonar el repositorio:</p>
            <pre><code>git clone https://github.com
cd tu-repositorio</code></pre>

            <p>2. Instalar las dependencias:</p>
            <pre><code>npm install</code></pre>

            <p>3. Configurar las variables de entorno. Crea un archivo <code>.env</code> en la raíz del proyecto basándote en <code>.env.example</code>:</p>
            <pre><code>PORT=3000
DATABASE_URL=postgres://usuario:password@localhost:5432/adopta_db
JWT_SECRET=tu_clave_secreta</code></pre>
        </section>

        <section>
            <h2>💻 Ejecución de la aplicación</h2>
            <pre><code># Modo desarrollo con recarga automática
npm run start:dev

# Modo producción
npm run start:prod</code></pre>
        </section>

        <section>
            <h2>🛣️ Endpoints principales (API Routes)</h2>
            
            <h3>🔒 Autenticación</h3>
            <ul>
                <li><code>POST /auth/register</code> - Registro de nuevos adoptantes o refugios.</li>
                <li><code>POST /auth/login</code> - Inicio de sesión para obtener el token JWT.</li>
            </ul>

            <h3>🐶 Mascotas</h3>
            <ul>
                <li><code>GET /pets</code> - Listar mascotas disponibles con filtros (edad, tamaño, tipo).</li>
                <li><code>POST /pets</code> - Publicar una nueva mascota (Solo refugios/admin).</li>
                <li><code>GET /pets/:id</code> - Detalle de una mascota específica.</li>
            </ul>

            <h3>📋 Solicitudes</h3>
            <ul>
                <li><code>POST /adoptions</code> - Enviar una solicitud de adopción.</li>
                <li><code>GET /adoptions</code> - Ver el historial de solicitudes.</li>
            </ul>
        </section>
    </main>

</body>
</html>
