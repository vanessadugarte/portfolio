import ProjectFacts from '../components/ProjectFacts.jsx'
import { usePageMetadata } from '../hooks/usePageMetadata.js'
import './InstagramPostsProjectDetail.scss'

export default function InstagramPostsProjectDetail({ assets, content, navigation }) {
  const headingRef = usePageMetadata(content.title)
  const detail = content.detail

  return (
    <article className="project-detail project-detail--instagram" aria-labelledby="project-detail-title">
      <div className="project-detail-inner">
        {navigation}
        <header className="project-detail-summary instagram-summary">
          <h1 className="project-detail-title" id="project-detail-title" ref={headingRef} tabIndex={-1}>
            {content.title}
          </h1>
          <p className="project-detail-introduction">{detail.introduction}</p>
          <ProjectFacts facts={detail.facts} />
        </header>

        <div className="instagram-brands">
          {assets.brands.map((brand, brandIndex) => {
            const copy = detail.brands[brand.id]

            return (
              <section className="instagram-brand" key={brand.id} aria-labelledby={`${brand.id}-title`}>
                <header className="instagram-brand-heading">
                  <span className="instagram-brand-number" aria-hidden="true">{String(brandIndex + 1).padStart(2, '0')}</span>
                  <div>
                    <h2 id={`${brand.id}-title`}>{copy.title}</h2>
                    <p>{copy.description}</p>
                  </div>
                </header>
                <div className="instagram-posts-grid">
                  {brand.posts.map((post) => {
                    const postCopy = copy.posts[post.id]
                    const descriptionId = `${brand.id}-${post.id}-description`

                    return (
                      <figure className="instagram-post" key={post.id}>
                        {post.video ? (
                          <>
                            <video
                              controls
                              playsInline
                              preload="none"
                              poster={post.image}
                              width={post.width}
                              height={post.height}
                              aria-label={`${copy.title}: ${postCopy.title}`}
                              aria-describedby={descriptionId}
                            >
                              <source src={post.video} type="video/mp4" />
                            </video>
                            <figcaption id={descriptionId}>
                              <span>{detail.animationLabel} · {postCopy.title}</span>
                              {postCopy.alt}
                            </figcaption>
                          </>
                        ) : (
                          <img
                            src={post.image}
                            alt={postCopy.alt}
                            width={post.width}
                            height={post.height}
                            loading="lazy"
                            decoding="async"
                          />
                        )}
                      </figure>
                    )
                  })}
                </div>
              </section>
            )
          })}
        </div>
      </div>
    </article>
  )
}
