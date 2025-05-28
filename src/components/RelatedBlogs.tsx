import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { BlogPost } from '@/data/blogs';
import { formatDate } from '@/utils/date';

interface RelatedBlogsProps {
  currentBlog: BlogPost;
  allBlogs: BlogPost[];
}

export function RelatedBlogs({ currentBlog, allBlogs }: RelatedBlogsProps) {
  // Filter out current blog and get related blogs
  // Filter for there to be one or more matching tags, to be sorted in descending order of matching tags and show only top 3
  const relatedBlogs = allBlogs
    .filter(blog => blog.id !== currentBlog.id)
    .map(blog => ({
      ...blog,
      matchingTags: blog.tags.filter(tag => currentBlog.tags.includes(tag)).length
    }))
    .filter(blog => blog.matchingTags > 0)
    .sort((a, b) => b.matchingTags - a.matchingTags)
    .slice(0, 3);

  if (relatedBlogs.length === 0) return null;

  return (
    <div className="mt-16 border-t border-gray-800 pt-8">
      <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {relatedBlogs.map((blog) => (
          <Link 
            key={blog.id} 
            href={`/blogs/${blog.slug}`}
            className="group block"
          >
            <article className="h-full bg-gray-900 rounded-lg overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]">
              {blog.coverImage && (
                <div className="relative h-48 w-full">
                  <Image
                    src={blog.coverImage}
                    alt={blog.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 line-clamp-2">
                  {blog.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {formatDate(blog.date)}
                </p>
                <div className="flex gap-2 flex-wrap">
                  {blog.tags.slice(0, 2).map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
} 