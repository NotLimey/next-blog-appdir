import Link from 'next/link';
import { PostType } from '../types/PostTypes';
import Image from 'next/image';
import { getImageUrl } from '../../lib/client';

const PostBlock = (post: PostType) => (
	<Link
		href={`/posts/${post.slug}`}
		className='w-full hover:bg-gray-200 p-2 rounded-xl transition-colors'
	>
		<div className='relative h-48 overflow-hidden rounded-lg'>
			<Image
				src={getImageUrl(post.image, post)}
				alt={''}
				className='object-cover'
				fill
			/>
		</div>
		<p className='text-lg font-semibold'>{post.title}</p>
		<p className='pb-2'>{post.preamble}</p>
		<p className='text-sm text-gray-700'>
			Created: {new Date(post.created).toLocaleDateString()}
		</p>
	</Link>
);

export default PostBlock;
