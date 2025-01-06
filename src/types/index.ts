// Navigation
export interface NavItem {
  label: string;
  href: string;
}

// Footer
export interface FooterSection {
  title: string;
  links: string[];
}

// Collection
export interface CollectionItem {
  title: string;
  image: string;
}

// Stats
export interface StatItem {
  number: string;
  label: string;
}

// Featured Section
export interface FeaturedItem {
  title: string;
  description: string;
  image: string;
  buttonText: string;
  buttonLink: string;
}
