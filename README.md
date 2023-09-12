## Build 
```
docker build --tag frontol-service-next:v0.0.2 --file Dockerfile .

docker tag frontol-service-next:v0.0.2 ghcr.io/developkosarev/frontol-service-next:v0.0.2
docker images ghcr.io/developkosarev/*
docker push ghcr.io/developkosarev/frontol-service-next:v0.0.2
docker run -d -p 3000:3000 --name frontol-service-next frontol-service-next:v0.0.2
docker run -d -p 3000:3000 --name frontol-service-next frontolservicenext:v0.0.3
```    

## Bootstrap
npm install bootstrap
https://github.com/seriwb/nextjs-bootstrap-sample

npm install -D http-server
npx http-server dist

## Tags
```
git tag v0.0.3
git push --tags
```


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
