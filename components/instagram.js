
import Instagram from "instagram-web-api"

// empty array of instagram posts is being
// passed as a prop into the Index component
export default function Index({ instagramPosts }) {
  return (
    <>
        <h2>
        <a href="https://www.instagram.com/yourinstagramhandle/">
            Follow Us on Instagram
        </a>
        .
        </h2>

        <ul>
        {/* let's iterate through each of the
        instagram posts that were returned
        from the Instagram API*/}
        {instagramPosts.map(({ node }, i) => {
            return (
            // let's wrap each post in an anchor tag
            // and construct the url for the post using
            // the shortcode that was returned from the API
            <li>
                <a
                href={`https://www.instagram.com/p/${node.shortcode}`}
                key={i}
                aria-label="view image on Instagram"
                >
                {/* set the image src equal to the image
                url from the Instagram API*/}
                <img
                    src={node.thumbnail_src}
                    alt={
                    // the caption with hashtags removed
                    node.edge_media_to_caption.edges[0].node.text
                        .replace(/(#\w+)+/g, "")
                        .trim()
                    }
                />
                </a>
            </li>
            )
        })}
        </ul>
    </>
  )
  
}

export async function getStaticProps(context) {
  // create a new client to communicate with  Instagram
  // this service requires authentication
  //with username and password parameters
  const client = new Instagram({
    username: "gultekinwt",
    password: "c8b94ba0",
  })

  let images = []
  try {
    // attempt to log in to Instagram
    await client.login()
  } catch (err) {
    // throw an error if login to Instagram fails
    console.log("Something went wrong while logging into Instagram", err)
  }

  return {
    props: {
      instagramPosts: images,
    },
  }
}