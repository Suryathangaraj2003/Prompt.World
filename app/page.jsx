import Feed from "@components/Feed";
import PromptCard  from "@components/PromptCard"
import {Suspense} from "react";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      Discover & Share
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center'> AI-Powered Prompts</span>
    </h1>
    <p className='desc text-center'>
      Prompt.World is an open-source AI prompting tool for modern world to
      discover, create and share creative prompts
    </p>
    <Suspense fallback={<>Loading...</>}>
    <Feed />
    </Suspense>
   
  </section>
);

export default Home;