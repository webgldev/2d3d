export interface PageMetadata {
  id: string;
  title: string;
  tags: string[];
  description: string;
  slug: string;
  createdDate: string;
  updatedDate: string;
  articleUrl: string;
  notionUrl: string;
}

export interface OgType {
  title: string
  subtitle: string
  tags: string
  publicationDate: string
}
