'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:4000/api/users/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, name: name || undefined }), // Si el nombre está vacío, lo enviamos como undefined
      });

      if (!res.ok) throw new Error('Error al registrarse');
      await res.json(); // Procesa la respuesta
      router.push('/auth/login'); // Redirige al login tras el registro exitoso
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Card className="max-w-md mx-auto space-y-6">
      <CardHeader>
        <CardTitle className="text-center text-2xl font-bold">Regístrate</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="text"
            placeholder="Nombre (Opcional)"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button type="submit" className="w-full">
            Registrarse
          </Button>
        </form>
      </CardContent>
      <CardFooter className="text-center">
        <p className="text-sm text-muted-foreground">
          ¿Ya tienes una cuenta? <a href="/login" className="text-blue-500 hover:underline">Inicia sesión aquí</a>
        </p>
      </CardFooter>
    </Card>
  );
}