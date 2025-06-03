// © 2025 JoeWork.co
import MDXComponents from "@/components/mdx/MDXComponents";
import { constructMetadata } from "@/lib/metadata";
import fs from "fs";
import matter from "gray-matter";
import { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote-client/rsc";
import path from "path";

export async function generateMetadata(): Promise<Metadata> {
  return constructMetadata({
    title: "Privacy Policy - JoeWork.co",
    description:
      "Learn how JoeWork uses only public data to improve your experience with our AI assistants.",
    path: "/privacy-policy",
  });
}

async function getPrivacyPolicyContent() {
  try {
    const filePath = path.join(
      process.cwd(),
      "content",
      "privacy-policy",
      "en.mdx"
    );
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);
    return { frontmatter: data, content };
  } catch (error) {
    console.error("Error loading privacy policy content:", error);
    return null;
  }
}

export default async function PrivacyPolicyPage() {
  const contentData = await getPrivacyPolicyContent();

  if (!contentData) {
    return (
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-8">
          Privacy Policy
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
