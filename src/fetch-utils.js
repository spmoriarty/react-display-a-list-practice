
import { client } from './client';

export default async function dogsList() {
  
  const response = await client.from('DogList').select('*');
  
  return response.data;
  
}

export async function workShopFetch(){
  const response = await client.from('workshops').select('*');
  return response.data;
}

export async function fetchFalls(){
  const response = await client.from('waterfalls').select('*');
  return response.data;
}

export async function fetchPost(){
  const response = await client.from('post').select('*');
  return response.data;
}