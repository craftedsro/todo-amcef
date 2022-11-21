This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Assignment

Create a web application for ToDo lists in the React framework.

Required functionality:
- Creating a ToDo list (there can be more)
  The ToDo list includes:
    - title
    - ToDo items
- Adding a ToDo item to the list
  ToDo item contains:
    - headline
    - free text
    - deadline (date and time)
- Deleting a ToDo item
- Marking a ToDo as complete
- Filtering items (all, active, completed)
- Searching for ToDo items within the list
- Persistence of ToDo lists using an external API (eg mockapi.io)

Minimum technological requirements:
- TypeScript
- advanced React constructions (functional components, hooks, data management)
- multiple application routes
- managed forms (react-hook-form or formik)
- validation of user data using zod, joi, or yup
- work with HTTP using fetchAPI or Axios
- reasonable structuring of application source codes

Recommended technology stack:
- Next.js or create-vite react-ts
- TailwindCSS + HeadlessUI or daisyUI
- react-hook-form + ZOD
- ReactQuery
  
We leave the subpages and layout of the application up to you
The web application must be deployed e.g. for example at netlify.com, githubpages.com