import Navbar from "./components/navbar.jsx";
import Breadcrum from "./components/breadcrum.jsx";
import Introduction from "./components/introduction.jsx";
import FeaturedPost from "./components/featured-post.jsx";
import PostList from "./components/post-list.jsx";

const App = () => {
  return (
    <div className='px-6 md:px-8 lg:px-16 lx:px-32 2xl:px-64'>
      {/*Navbar*/}
        <Navbar/>
      {/*Breadcrum*/}
        <Breadcrum/>
      {/*Introduction*/}
        <Introduction/>
      {/*Featured Posts*/}
        <FeaturedPost/>
      {/*Post List*/}
        <PostList/>
    </div>
  )
}

export default App