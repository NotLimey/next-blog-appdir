import { PostType } from '../../../common/types/PostTypes';
import client, { getImageUrl } from '../../../lib/client';
import Image from 'next/image';

async function getPost(slug: string) {
	const doc = await client.records.getList('posts', 1, 1, {
		filter: `slug = '${slug}'`,
	});
	return (doc.items as any as PostType[])[0];
}

const Post = async () => {
	const post = await getPost('post-2');
	return (
		<div className='flex justify-center items-center flex-col min-h-screen py-8'>
			<div className='max-w-2xl w-full'>
				<div className='w-full'>
					<div className='relative h-96 overflow-hidden w-full rounded-lg shadow-lg'>
						<Image
							src={getImageUrl(post.image, post)}
							alt={''}
							className='object-cover'
							fill
						/>
					</div>
				</div>
				<h1 className='my-2'>{post.title}</h1>
				<p>{post.preamble}</p>
				<p>{post.content}</p>
			</div>
		</div>
	);
};

export default Post;
