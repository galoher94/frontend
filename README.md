# Frontend README

## Proyecto: Gestión de Tareas (Frontend)

Este proyecto es la interfaz de usuario para una aplicación de gestión de tareas. Desarrollada con **Next.js**, utiliza **JWT** para autenticación y **Shadcn/ui** para componentes visuales estilizados.

### Características
- **Autenticación de Usuarios**: Login y Registro.
- **Protección de Rutas**: Acceso restringido basado en tokens JWT.
- **Gestión de Tareas**: CRUD de tareas integrado con el backend.

---

## Requisitos Previos

### Dependencias del Proyecto
Asegúrate de tener las siguientes herramientas instaladas:
- [Node.js](https://nodejs.org/) (v16 o superior)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)

### Variables de Entorno
Crea un archivo `.env.local` en la raíz del proyecto con las siguientes variables:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
JWT_SECRET=tu_secreto_seguro
```

`NEXT_PUBLIC_API_URL` apunta a la URL del backend para las peticiones API.

---

## Instalación y Uso

### 1. Instalar Dependencias
```bash
npm install
# o
yarn install
```

### 2. Ejecutar el Proyecto en Desarrollo
```bash
npm run dev
# o
yarn dev
```
Accede a `http://localhost:3000` en tu navegador.

### 3. Generar la Build para Producción
```bash
npm run build
# o
yarn build
```

---

## Estructura del Proyecto

```plaintext
/app
  ├── auth
  │    ├── login          # Página de Login
  │    ├── register       # Página de Registro
  ├── tareas              # CRUD de Tareas
  ├── layout.tsx          # Layout principal
  ├── page.tsx            # Página inicial
/components              # Componentes reutilizables
/styles                  # Archivos CSS
```

---

## Rutas del Frontend

### Públicas
- `/auth/login` - Página de inicio de sesión.
- `/auth/register` - Página de registro de usuario.

### Protegidas
- `/tareas` - Listado y CRUD de tareas (requiere autenticación).

---

## Repositorio en GITHUB
https://github.com/galoher94/frontend.git

## Contribuciones
1. Crea un fork del proyecto.
2. Crea una rama para tu nueva característica: `git checkout -b feature/nueva-funcionalidad`.
3. Realiza commits descriptivos: `git commit -m "Añade nueva funcionalidad"`.
4. Envía un pull request a la rama principal.

## Funciones pendientes
1. Ajustar el Login para que se conecte con la DB
2. Register aun posee error al redireccionar y guardar datos en DB