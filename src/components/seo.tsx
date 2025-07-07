interface SEOProps {
	title: string
	description: string
	keywords?: string
	ogTitle?: string
	ogDescription?: string
	ogImage?: string
	canonicalUrl?: string
}

export function SEO({ title, description, keywords, ogTitle, ogDescription, ogImage, canonicalUrl }: SEOProps) {
	return (
		<>
			<title>{title}</title>
			<meta name="description" content={description} />
			{keywords && <meta name="keywords" content={keywords} />}
			<meta name="viewport" content="width=device-width, initial-scale=1" />

			{/* Open Graph */}
			<meta property="og:title" content={ogTitle || title} />
			<meta property="og:description" content={ogDescription || description} />
			<meta property="og:type" content="website" />
			{ogImage && <meta property="og:image" content={ogImage} />}
			{canonicalUrl && <meta property="og:url" content={canonicalUrl} />}

			{/* Twitter Card */}
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content={ogTitle || title} />
			<meta name="twitter:description" content={ogDescription || description} />
			{ogImage && <meta name="twitter:image" content={ogImage} />}

			{/* Canonical URL */}
			{canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

			<link rel="icon" href="/favicon.ico" />
		</>
	)
}
