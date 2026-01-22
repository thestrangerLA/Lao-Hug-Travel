import TourDetailClient from './TourDetailClient';

type PageProps = {
  params: Promise<{
    tourId: string;
  }>;
};

export default async function Page({ params }: PageProps) {
  const { tourId } = await params;

  return <TourDetailClient tourId={tourId} />;
}
