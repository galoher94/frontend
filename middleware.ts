import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';

const SECRET = process.env.JWT_SECRET || 'tu_secreto_seguro'; // Usa el mismo secreto que en el backend.

export function middleware(req: NextRequest) {
  // Obtener el token desde las cookies.
  const token = req.cookies.get('token')?.value;

  if (!token) {
    // Si no hay token, redirigir al login.
    return NextResponse.redirect(new URL('/auth/login', req.url));
  }

  try {
    // Verificar el token JWT para asegurar su validez.
    jwt.verify(token, SECRET);
    return NextResponse.next(); // Permitir el acceso si el token es válido.
  } catch (err) {
    console.error('Token inválido o expirado:', err);
    // Si el token es inválido, redirigir al login.
    return NextResponse.redirect(new URL('/auth/login', req.url));
  }
}

// Configurar qué rutas deben ser protegidas.
export const config = {
  matcher: ['/tareas/:path*'], // Protege cualquier ruta dentro de /app/tareas.
};
