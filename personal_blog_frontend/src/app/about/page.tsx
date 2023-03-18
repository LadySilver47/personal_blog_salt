import '@/(css)/about.css';

const page = async() => {

  return (
    <section className="aboutSection">
        <h1 className='about__title'>About</h1>
        <h2 className='readme__about'>Personal Blog Salt</h2>
        <div className='text__container'>
            
        <p>            A work in process</p>
<p>            </p>
<p>            Had some divergence so I forced a push so now everything's a bit more blank than I'd like. </p>
<p>            </p>
<p>            This is my hackathon project for SALT. It's a personal blog. Here are the features I intend to implement in MOSCOW format:</p>
<p>            </p>
<p>            • MUST: Have the ability to add blog posts to a database, </p>
<p>            search blog posts by id, </p>
<p>            blog posts must be sorted on the main page by date, in cards, </p>
<p>            clicking on a card must take you to the individual blog page. </p>
<p>            Must have About page (HTML only).</p>
<p>            </p>
<p>            • Should: Have the ability to search for blog posts by title, </p>
<p>            should have the ability to delete blog posts by id, </p>
<p>            should have pagination on the main page, return 4 blog posts max per page. </p>
<p>            Be able to edit blog posts. Should be able to add tags/ keywords to the blogposts. </p>
<p>            Should be able to filter main page by keywords/tags. </p>
<p>            Should be able to search by keywords.</p>
<p>            </p>
<p>            • Could: Have the ability to filter blog posts by date range. </p>
<p>            Have a login function/admin area </p>
<p>            (so only I can actually access the patch, post and delete functionalities). </p>
<p>            Have the blog posts have a cool expand transformation.</p>
<p>            </p>
<p>            • Won’t: be able to replace blog posts</p>
<p>            </p>
<p>            My Tech Stack (how to overengineer a side project dot jpg)</p>
<p>            </p>
<p>            Java</p>
<p>            Typescript</p>
<p>            Spring</p>
<p>            Next.js</p>
<p>            MongoDB</p>
<p>            CSS</p>
<p>            HTML</p>
        </div>

    </section>
  )
}

export default page