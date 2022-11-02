import Image from 'next/image';
import { use } from 'react';
import client, { BASE_API_URL } from '../lib/client';

async function getPosts() {
	const res = await fetch(
		BASE_API_URL + '/collections/posts/records?page=1&perPage=10',
		{ cache: 'no-store' }
	);
	const posts = await res.json();
	return posts.items;
}

export default async function Home() {
	const posts = use(getPosts());

	return (
		<div>
			{/* <pre className=''>{JSON.stringify(data, null, 4)}</pre>
      {data} */}
		</div>
	);
}
