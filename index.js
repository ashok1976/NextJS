import Head from 'next/head';
import SectionList from '../components/SectionList'

function Index({posts}) {

   return (
 
    <>
       {
       
         
          posts.slice(0,6).map(val => {
              return <SectionList 
                title={val.title.rendered} 
                img={val.jetpack_featured_media_url} 
                id={val.id}
                link={val.link}
                key={val.id}
                slug={val.slug}
        
                
                />  
          })
        } 
    
    </>
    

  );
  
}
Index.getInitialProps = async () => {
 

  const res = await fetch('https://education.indianexpress.com/wp-json/wp/v2/posts');
  const posts = await res.json();
   return { posts:posts};
};
export const config = { amp:true };
export default Index;
