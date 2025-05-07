// © 2025 JoeWork.co
import { Locale } from "@/i18n/routing";
import { constructMetadata } from "@/lib/metadata";
import { Metadata } from "next";
import Link from "next/link";
// Assuming getPosts exists from the starter to list blog posts
import { getPosts } from "@/lib/getBlogs";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({
  params: { locale },
}: Props): Promise<Metadata> {
  // TODO: Add translations
  return constructMetadata({
    title: "Blog - JoeWork.co",
    description: "Insights and updates on AI automation for LATAM SMEs.",
    locale: locale as Locale,
    path: "/blog",
  });
}

export default async function BlogIndexPage({ params: { locale } }: Props) {
  // Fetch blog posts (adapt based on actual function in lib/getBlogs)
  const { posts } = await getPosts(locale as Locale);

  // TODO: Add translations
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-12 text-center">
        Blog de JoeWork.co
      </h1>

      {posts && posts.length > 0 ? (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog${post.slug}`} // Construct link based on slug
              className="block p-6 rounded-lg shadow-lg bg-card text-card-foreground border border-border hover:shadow-xl transition-shadow"
            >
              <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
              {post.date && (
                <p className="text-sm text-muted-foreground mb-3">
                  {new Date(post.date).toLocaleDateString(locale, {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              )}
              <p className="text-muted-foreground mb-4 line-clamp-3">
                {post.description}
              </p>
              <span className="text-primary font-medium hover:underline">
                Leer más →
              </span>
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-center text-muted-foreground">
          No hay artículos disponibles por el momento.
        </p>
      )}
    </div>
  );
}
