import gitHubLogo from './assets/GitHub-Mark-Light-32px.png';
import './styles/footer.scss';

const Footer = () => {
  return (
    <footer className='footer-container'>
      <p>Courtesy of <a href='#'>UNCM</a>, send them some loves!</p>
      <p>
        <a href='https://github.com/chheangg/cv-form-generator' target='_blank' rel='noreferrer'><img src={gitHubLogo} alt='github-logo' href='https://github.com/chheangg/uncm-apparel-page' ></img>Chheangg</a> @ 2022
      </p>
    </footer>
  )
}

export default Footer;