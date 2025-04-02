// src/types/blog.d.ts
export interface BlogPost {
  id: string;
  slug: string;
  body: string;
  collection: string;
  data: {
    title: string;
    pubDate: Date;
    description: string;
    tags?: string[];
  };
  render: () => Promise<{
    Content: any;
    headings?: any[];
    remarkPluginFrontmatter?: Record<string, any>;
  }>;
}
