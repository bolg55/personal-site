import Link from 'next/link';

const NotFound = ({ url }: { url: string }) => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen align-middle'>
      <div className='h-16 p-1 mb-6 rounded-xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500'>
        <button className='flex items-center justify-center w-full h-full rounded-lg bg-light dark:bg-dark'>
          <Link
            href={url}
            className='flex items-center h-full px-4 my-auto font-medium align-middle rounded-lg dark:text-light text-dark '
          >
            Go Back
          </Link>
        </button>
      </div>

      <h1 className='mb-4 text-6xl'>404 - Nothing Here</h1>

      <iframe
        src='https://giphy.com/embed/g01ZnwAUvutuK8GIQn'
        width='480'
        height='270'
        frameBorder='0'
        className='giphy-embed'
        allowFullScreen
      ></iframe>
      <p>
        <a href='https://giphy.com/gifs/high-quality-highqualitygifs-g01ZnwAUvutuK8GIQn'>
          via GIPHY
        </a>
      </p>
    </div>
  );
};
export default NotFound;
