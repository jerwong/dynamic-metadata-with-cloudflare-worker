export const config = {
  domainSource: "https://d9bf4713-f943-4df2-9a2f-53cde35af95f.weweb-preview.io/", // Your WeWeb app preview link
  patterns: [
      {
			// the initial "^" is important to match only the page url, not its styles and scripts that share a similar url
          pattern: "^/posts/[^/]+",
          metaDataEndpoint: "https://hbozonqzrhealvkpkfzx.supabase.co/functions/v1/get-week-post-meta?week_post_slug={id}"
      }
      // Add more patterns and their metadata endpoints as needed
  ]
};
