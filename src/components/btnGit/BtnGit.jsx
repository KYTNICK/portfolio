import './style.css'
import github from './gitHub-black.svg'


const BtnGit = () => {
    return ( 
        <a href='https://github.com/KYTNICK' target="_blank" className="btn-outline" rel="noreferrer">
        <img src={github} alt=""/>
        GitHub repo
    </a>
     );
}
 
export default BtnGit;