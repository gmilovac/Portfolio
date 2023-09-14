const YEAR = new Date().getFullYear()

export default {
  footer: (
    <small style={{ display: 'block', marginTop: '8rem' }}>
      <time>{YEAR}</time> © Gordan Milovac.

        <a target="_blank" href="https://www.linkedin.com/in/gmilovac/"><img src="/images/linkedin.png" width="15" height="15"/></a>

        <a target="_blank" href="https://www.linkedin.com/in/gmilovac/"><img src="/images/github.png" width="15" height="15"/></a>

        <a target="_blank" href="https://www.linkedin.com/in/gmilovac/"><img src="/images/instagram.webp" width="15" height="15"/></a>

        <a target="_blank" href="https://www.linkedin.com/in/gmilovac/"><img src="/images/mail.png" width="17" height="17"/></a>

      <style jsx>{`
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
    </small>
  )
}
