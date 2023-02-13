
import BtnGit from '../components/btnGit/BtnGit';
import { projects } from '../helpers/ProjectsList'
const Project = () => {
    return ( 
        <main className="section">
        <div className="container">
            <div className="project-details">

                <h1 className="title-1">Video service</h1>

                <img src={projects.imgBig} alt={projects.title} className="project-details__cover"/>

                <div className="project-details__desc">
                    <p>Skills: React, Node.js, MongoDB</p>
                </div>
                {projects.map((project) => {
                    return (
                        <Project key={project.id} title={project.title} imgBig={project.imgBig} />
                    )
                })}
            <BtnGit/>
            </div>
        </div>
    </main>
     );
}
 
export default Project;