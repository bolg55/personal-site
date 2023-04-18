import qs from 'qs';

// Get full Strapi URL from path

interface Path {
  path: string;
}

export const getStrapiURL = (path = '') => {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337'
  }${path}`;
};

// Helper to make GET requests to Strapi API endpoints

// Turn the below into a typescript interface or type

interface StrapiOptions {
  headers?: {
    'Content-Type': string;
  };
}

interface UrlParamsObject {}

export const fetchAPI = async (
  path: string,
  urlParamsObject?: UrlParamsObject,
  options?: StrapiOptions
) => {
  //Merge default and user options
  const mergedOptions = {
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  // Build request URL
  const queryString = qs.stringify(urlParamsObject);
  const requestUrl = `${getStrapiURL(
    `/api${path}${queryString ? `?${queryString}` : ''}`
  )}`;

  // Trigger API call
  const response = await fetch(requestUrl, mergedOptions);

  // Handle response
  if (!response.ok) {
    const errorMessage = `Error ${response.status}: ${response.statusText}`;
    throw new Error(errorMessage);
  }
  const data = await response.json();
  return data;
};
