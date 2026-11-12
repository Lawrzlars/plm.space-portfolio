# PLM.SPACE Portfolio

My Personal, built with React and Vite.

## Local development

- Install dependencies with `npm install`.
- Start the development server with `npm run dev`.
- Verify a production build with `npm run build`.

## Deploying to Vercel

This is a Vite static site. To deploy it:

1. Push this portfolio project to a GitHub repository that you are authorized to publish.
2. In Vercel, import that repository and select the Vite framework preset.
3. Use `npm run build` as the build command and `dist` as the output directory.
4. Deploy, then open the generated HTTPS URL and verify the site, contact links, social links, project resources, and certificate PDFs.
5. Add the final public URL and a social preview image to the page metadata when available.

Do not commit credentials, private team files, or certificate material unless you have permission to publish them.

## Maintenance checklist

- Before publishing changes, run `npm run build`.
- After content or code changes, check the navigation, project links, certificate PDFs, and contact links.
- Review the layout at phone, tablet, and desktop sizes, and test keyboard navigation and visible focus states.
- Periodically confirm the published site and external profile links are reachable.
- Review dependency updates periodically; apply updates deliberately and rerun the production build.
- Once the Vercel public URL is available, add URL-dependent metadata such as the canonical URL and social preview image.
