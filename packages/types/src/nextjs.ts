export interface AppLayoutProps {
  children: any
  params: Promise<{ [key in string]: string }>
}

export interface AppPageProps {
  params: Promise<{ [key in string]: string }>
  searchParams: Promise<{ [key in string]: string }>
}
