import Image from 'next/image'
import Trending from "app/(home)/Trending";
import Tech from "app/(home)/Tech";
import Travel from "app/(home)/Travel";
import Other from "app/(shared)/Other";
import Subscribe from 'app/(shared)/Subscribe';
import Sidebar from './(shared)/Sidebar';
import { prisma } from 'app/api/client';
import { Post } from '@prisma/client';

// revalidate every 60 seconds;
export const revalidate = 60;

// function below will grab all posts that exist
// in database

// next js 12 serverside rendering, refetch data every couple of seconds, revalidation
// 
const getPosts = async () => {
  const posts = await prisma.post.findMany();
  
  return posts;
}
// by making home function async, create server components
export default async function Home() {

  // essentially server component
  const posts = await getPosts();
  // shows in server terminal instead of browser terminal
  console.log("posts:", posts);
  const formatPosts = () => {
    const trendingPosts: Array<Post> = [];
    const techPosts: Array<Post> = [];
    const travelPosts: Array<Post> = [];
    const otherPosts: Array<Post> = [];

    posts.forEach((post: Post, i: number) => {
      if (i < 4) {
        trendingPosts.push(post);
      }
      if (post?.category === "Tech") {
        techPosts.push(post);
      }
      else if (post?.category === "Travel") {
        travelPosts.push(post);
      } else if(post?.category === "Interior Design") {
        otherPosts.push(post);
      }
    });
    return [trendingPosts, techPosts, travelPosts, otherPosts]
  };

  const [trendingPosts, techPosts, travelPosts, otherPosts] = formatPosts();
  return (
    <main className='px-10 leading-7'>
      <Trending trendingPosts={trendingPosts}/>
      <div className='md:flex gap-10 mb-5'>
        <div className='basis-3/4'>
          <Tech techPosts={techPosts}/>
          <Travel travelPosts={travelPosts}/>
         <div className='hidden md:block'>
         {/* <Other /> */}
         <div className='hidden md:block'>
          <Subscribe />
         </div>
          </div>
        </div>
        <div className='basis-1/4'> 
          <Sidebar />
          </div>
        </div>
      
     </main>
  )
}
