import { notFound } from "next/navigation";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { getCollectionById, getAllCollections } from "@/app/data/collections";
import CollectionContent from "./CollectionContent";

interface CollectionPageProps {
  params: {
    id: string;
  };
}

export default async function CollectionPage({ params }: CollectionPageProps) {
  const awaited = await params;
  const collection = getCollectionById(awaited.id);

  if (!collection) {
    notFound();
  }

  const allCollections = getAllCollections();
  const currentIndex = allCollections.findIndex((c) => c.id === collection.id);
  const prevCollection =
    currentIndex > 0 ? allCollections[currentIndex - 1] : null;
  const nextCollection =
    currentIndex < allCollections.length - 1
      ? allCollections[currentIndex + 1]
      : null;

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-8">
        <CollectionContent
          collection={collection}
          prevCollection={prevCollection}
          nextCollection={nextCollection}
        />
      </main>

      <Footer />
    </div>
  );
}

// Generate static params for all collections
export function generateStaticParams() {
  return getAllCollections().map((collection) => ({
    id: collection.id,
  }));
}
