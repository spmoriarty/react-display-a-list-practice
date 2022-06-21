
import { client } from './client';

export default async function dogsList() {
  
  const response = await client.from('DogList').select('*');
  
  return response.body;
  
}

