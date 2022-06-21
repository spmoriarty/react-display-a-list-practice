
import { client } from './client';

export default async function DogsList() {
  
  const response = await client.from('DogList').select('*');
  
  return response.body;
  
}

