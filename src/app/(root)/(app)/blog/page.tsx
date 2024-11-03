import type { Metadata } from 'next'
import { getBlogPosts } from '@/utils/get-blog-posts'
import PageTitle from '../components/PageTitle'
import BlogPostItem from './components/BlogPostItem'

export const metadata: Metadata = {
  title: 'Blog - Sahal Palayat',
  openGraph: {
    title: 'Blog - Sahal Palayat',
    url: '/blog',
  },
  alternates: {
    canonical: '/blog',
  },
}

export default async function BlogPage() {
  const blogs = getBlogPosts().sort((a, b) => {
    if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
      return -1
    }
    return 1
  })


  // const blogs = [
  //   {
  //     title: "Mastering the MERN Stack: A Beginner's Guide",
  //     description: "A comprehensive introduction to the MERN stack, covering everything from setting up MongoDB to deploying your first full-stack application.",
  //     slug: "mastering-mern-stack",
  //   },
  //   {
  //     title: "Building Responsive E-commerce Apps with React and Node",
  //     description: "Explore how to create a smooth, responsive e-commerce site using React for the front end and Node.js for the backend API.",
  //     slug: "responsive-ecommerce-react-node",
  //   },
  //   {
  //     title: "Top 10 JavaScript Tips Every Developer Should Know",
  //     description: "A curated list of essential JavaScript tips to make your code cleaner, faster, and more efficient.",
  //     slug: "javascript-tips",
  //   },
  //   {
  //     title: "Streamlining Data Fetching in React with Axios",
  //     description: "Learn the ins and outs of using Axios in React for efficient data fetching and error handling.",
  //     slug: "data-fetching-axios",
  //   },
  //   {
  //     title: "Understanding Role-Based Access Control in Node.js",
  //     description: "Discover how to implement role-based access control for user permissions in Node.js applications.",
  //     slug: "role-based-access-node",
  //   },
  //   {
  //     title: "Designing a Personal Portfolio with React and Figma",
  //     description: "A step-by-step guide on building an eye-catching, functional portfolio to showcase your projects and skills.",
  //     slug: "portfolio-react-figma",
  //   },
  //   {
  //     title: "Optimizing MongoDB Performance for Large Datasets",
  //     description: "Tips and strategies for handling large data in MongoDB, from indexing to effective query optimization.",
  //     slug: "mongodb-performance",
  //   },
  //   {
  //     title: "PHP vs. Node.js: Key Differences for Web Developers",
  //     description: "A comparison of PHP and Node.js, focusing on performance, scalability, and ease of use for building modern web apps.",
  //     slug: "php-vs-node",
  //   },
  //   {
  //     title: "Creating Reusable Components in React: Best Practices",
  //     description: "Learn how to create modular, reusable components in React to keep your codebase clean and scalable.",
  //     slug: "reusable-components-react",
  //   },
  //   {
  //     title: "My Top Resources for Learning the MERN Stack",
  //     description: "A roundup of the best tutorials, books, and online courses for developers diving into the MERN stack.",
  //     slug: "learning-mern-stack",
  //   },
  // ];
  
  return (
    <>
      <PageTitle title="Blog" />
      <ul className="grid grid-cols-1 gap-3 md:mb-5">
    {blogs.map((post) => (
      <li key={post.slug}>
        <BlogPostItem post={post} />
      </li>
    ))}
  </ul>
    </>
  )
}
