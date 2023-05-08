import './globals.css';
import { montserrat } from './fonts';
import { fetchAPI } from '@/lib/api';
import { footerQuery, headerQuery } from '@/queries/populate';
import Header from './Header';
import Footer from './Footer';
import { Suspense } from 'react';
import SkeletonLoader from '@/components/SkeletonLoader';
import Providers from './Providers';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Kellen Bolger | Full-Stack Developer',
    template: '%s | Kellen Bolger',
  },
  description:
    'Full-stack web developer specializing in JavaScript, TypeScript, Node, Next.js, React, and Solid. Explore my work and hire me for your project.',

  generator: 'Next.js',
  applicationName: 'Kellen Bolger | Full-Stack Developer',
  keywords: [
    'Next.js',
    'React',
    'Solid',
    'TypeScript',
    'JavaScript',
    'Node',
    'Full-Stack',
    'Developer',
    'Kellen Bolger',
    'Kellen',
    'Bolger',
    'Web developer Waterloo',
  ],
  authors: [{ name: 'Kellen Bolger' }],
  creator: 'Kellen Bolger',
  publisher: 'Kellen Bolger',
  openGraph: {
    type: 'website',
    title: 'Kellen Bolger | Full-Stack Developer',
    description:
      'Full-stack web developer specializing in JavaScript, TypeScript, Node, Next.js, React, and Solid. Explore my work and hire me for your project.',
    url: 'https://www.kellenbolger.ca',
    siteName: 'Kellen Bolger | Full-Stack Developer',
    images: [
      {
        url: 'https://res.cloudinary.com/djr4sjcgh/image/upload/v1681510440/800x600OG_Image_fzfaao.png',
        width: 800,
        height: 600,
        alt: 'Kellen Bolger | Full-Stack Developer',
      },
      {
        url: 'https://res.cloudinary.com/djr4sjcgh/image/upload/v1681510457/1800x1600OG_Image_xid6ue.png',
        width: 1800,
        height: 1600,
        alt: 'Kellen Bolger | Full-Stack Developer',
      },
    ],
  },
  robots: {},
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [headerData, footerData] = await Promise.all([
    fetchAPI('/header', headerQuery),
    fetchAPI('/brand-info', footerQuery),
  ]);

  const {
    menu,
    showLogo,
    Logo: logo,
    socialLinks: headerSocialLinks,
  } = headerData.data.attributes;

  const {
    brandEmail,
    brandName,
    socialLinks: footerSocialLinks,
  } = footerData.data.attributes;

  const { url: logoUrl } = logo.image.data.attributes;

  return (
    <html lang='en' className={`${montserrat.className}`}>
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='/apple-touch-icon.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='/favicon-32x32.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='/favicon-16x16.png'
      />
      <link rel='manifest' href='/site.webmanifest' />
      <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
      <meta name='msapplication-TileColor' content='#da532c' />
      <meta name='theme-color' content='#333333' />
      <body>
        <Providers>
          <div className='bg-light dark:bg-dark '>
            <Suspense fallback={<SkeletonLoader />}>
              <Header
                logoUrl={logoUrl}
                alt={logo.alt}
                showLogo={showLogo}
                socialLinks={headerSocialLinks}
                menu={menu}
              />
            </Suspense>

            {children}

            <Footer
              brandEmail={brandEmail}
              brandName={brandName}
              socialLinks={footerSocialLinks}
            />
          </div>
        </Providers>
      </body>
    </html>
  );
}
