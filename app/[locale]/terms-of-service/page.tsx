// © 2025 JoeWork.co
import MDXComponents from "@/components/mdx/MDXComponents";
import { constructMetadata } from "@/lib/metadata";
import fs from "fs";
import matter from "gray-matter";
import { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote-client/rsc";
import path from "path";

export const dynamicParams = false;

export function generateStaticParams() {
  return [{ locale: "en" }];
}

export async function generateMetadata(): Promise<Metadata> {
  return constructMetadata({
    title: "Terms of Service - JoeWork.co",
    description:
      "Terms and conditions for using JoeWork's AI automation services.",
    path: "/terms-of-service",
  });
}

async function getTermsOfServiceContent() {
  try {
    const filePath = path.join(
      process.cwd(),
      "content",
      "terms-of-service",
      "en.mdx"
    );
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);
    return { frontmatter: data, content };
  } catch (error) {
    console.error("Error loading terms of service content:", error);
    return null;
  }
}

export default async function TermsOfServicePage() {
  const contentData = await getTermsOfServiceContent();

  if (!contentData) {
    return (
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-8">
          Terms of Service
        </h1>
        <p className="text-muted-foreground">
          Content could not be loaded. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
      <div className="prose dark:prose-invert max-w-none">
        <MDXRemote source={contentData.content} components={MDXComponents} />
      </div>
    </div>
  );
}
