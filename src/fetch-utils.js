
import { client } from './client';

export default async function dogsList() {
  
  const response = await client.from('DogList').select('*');
  
  return response.data;
  
}

export async function workShopFetch(){
  const response = await client.from('workshops').select('*');
  return response.data;
}