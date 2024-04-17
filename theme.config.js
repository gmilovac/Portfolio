const YEAR = new Date().getFullYear()

export default {
  footer: (
    <small style={{ display: 'block', marginTop: '8rem' }}>
      <time>{YEAR}</time> © Gordan Milovac.
      <a href="https://drive.google.com/file/d/1pLO4wx53B8gF3m8yB6usyexss8ll1mhK/view?usp=sharing">
        Resume PDF
      </a>
      <style jsx>{`
        a {
          float: right;
        }
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
