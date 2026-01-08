import { PostInfo } from '../PostInfo/PostInfo';

export const PostList = ({ posts }) => {
  if (posts.length === 0) {
    return null;
  }

  return (
    <div className="PostList">
      {posts.map(post => (
        <PostInfo key={post.id} post={post} />
      ))}
    </div>
  );
};
