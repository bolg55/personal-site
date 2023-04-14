import Markdown from '@/components/Markdown';
import NotFound from '@/components/NotFound';
import { fetchAPI } from '@/lib/api';

interface PostPageProps {
  params: {
    slug: string;
  };
}

interface Post {
  attributes: {
    title: string;
    slug: string;
    content: string;
    excerpt: string;
    cover: string;
    updatedAt: string;
  };
}

export const generateMetadata = async ({ params: { slug } }: PostPageProps) => {
  const postData = await fetchAPI(`/posts`, {
    populate: {
      cover: {
        fields: ['url'],
      },
    },
    filters: {
      slug: {
        $eq: slug,
      },
    },
  });

  const post = postData.data.map((post: Post) => {
    const { title, slug, excerpt, updatedAt, cover } = post.attributes;
    return {
      title,
      slug,
      excerpt,
      updatedAt,
      cover,
    };
  });

  if (!post.length) {
    return {
      title: 'Not Found',
      description: 'The page you are looking for does not exist.',
    };
  }

  return {
    title: post[0].title,
    description: post[0].excerpt,
    openGraph: {
      type: 'article',
      article: {
        publishedTime: post[0].updatedAt,
      },
      images: [
        {
          url: post[0].cover.data.attributes.url,
          width: 1200,
          height: 630,
          alt: post[0].title,
        },
      ],
    },
  };
};

export const generateStaticParams = async () => {
  const slugs = await fetchAPI('/posts', { next: { revalidate: 3600 } });

  return slugs.data.map((slug: Post) => ({
    slug: slug.attributes.slug,
    fallback: false,
  }));
};

const PostPage = async ({ params }: PostPageProps) => {
  const slug = params.slug;

  const postData = await fetchAPI(`/posts`, {
    populate: {
      cover: {
        fields: ['url', 'alternativeText'],
      },
    },
    filters: {
      slug: {
        $eq: slug,
      },
    },
  });

  const post = postData.data.map((post: Post) => {
    const { title, slug, content, updatedAt, cover } = post.attributes;
    return {
      title,
      slug,
      content,
      updatedAt,
      cover,
    };
  });

  if (!post.length) {
    return <NotFound url='/blog' />;
  }

  return (
    <main className='flex flex-col items-center justify-center w-full '>
      <div className='z-0 inline-block w-1/2 h-auto p-16'>
        <div className='relative p-8 bg-white border-t border-l shadow-2xl dark:border-slate-800/60 rounded-3xl dark:bg-black rounded-br-2xl'>
          <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[105%] rounded-[2rem] bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 rounded-br-3xl' />
          <div>
            <h1 className='text-4xl font-bold '>{post[0]?.title}</h1>
            <p className='pt-2'>
              Updated:{' '}
              <time dateTime={post[0]?.updatedAt}>
                {new Date(post[0]?.updatedAt).toLocaleDateString('en-US', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </time>
            </p>
          </div>
        </div>
      </div>
      <article>
        <Markdown markdown={post[0]?.content} />
      </article>
    </main>
  );
};
export default PostPage;
