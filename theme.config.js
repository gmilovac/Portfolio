const YEAR = new Date().getFullYear()

export default {
  footer: (
    <small style={{ display: 'block', marginTop: '8rem' }}>
      <time>{YEAR}</time> © Gordan Milovac.
      <a href="https://drive.google.com/file/d/1M0Gi2GvApMafqIl9sdFl3N7Xu0DZ088a/view?usp=sharing">Resume PDF</a>
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
