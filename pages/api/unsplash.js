export default async (_, res) => {
  const response = await fetch(
    'https://api.unsplash.com/users/ryck/statistics',
    {
      headers: {
        Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
        'Content-Type': 'application/json'
      },
      method: 'GET'
    }
  );

  const { downloads, views } = await response.json();

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=1200, stale-while-revalidate=600'
  );

  return res.status(200).json({
    downloads: downloads.total,
    views: views.total
  });
};
