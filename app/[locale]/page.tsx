// © 2025 JoeWork.co

// Removed section imports
// Removed next-intl, metadata, routing, siteConfig imports

type Props = {
  params: { locale: string };
};

// Removed generateMetadata function

export default async function HomePage({ params }: Props) {
  const locale = params.locale; // Access locale here
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">
        Home Page Test (Locale: {locale})
      </h1>
      <p>If you see this, the basic layout and page are working.</p>
    </div>
  );
}
