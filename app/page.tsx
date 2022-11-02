import Image from 'next/image';
import Link from 'next/link';
import { use } from 'react';
import PostBlock from '../common/components/PostBlock';
import { PostType } from '../common/types/PostTypes';
import client, { BASE_API_URL, getImageUrl } from '../lib/client';

async function getPosts() {
	const res = await fetch(
		BASE_API_URL + '/collections/posts/records?page=1&perPage=10',
		{ cache: 'no-store' }
	);
	const posts = await res.json();
	return posts.items as PostType[];
}

export default async function Home() {
	const posts = await getPosts();

	return (
		<div className='bg-gray-100 min-h-screen flex justify-center items-center flex-col py-18'>
			<pre className='bg-white w-fit p-2'>{JSON.stringify(posts, null, 4)}</pre>
			test
			<div className='grid grid-cols-3 max-w-5xl w-full gap-4'>
				{posts.map((post) => (
					<PostBlock key={post.id} {...post} />
				))}
			</div>
		</div>
	);
}
