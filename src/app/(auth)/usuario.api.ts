export async function createUsuarios(data: any) {
    try {
      const response = await fetch('http://localhost:4000/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        const error = await response.json();
        console.error('Error en el servidor:', error);
        throw new Error('Error al crear el usuario');
      }
  
      return await response.json();
    } catch (error) {
      console.error('Error al enviar datos:', error);
      throw error;
    }
  }
  