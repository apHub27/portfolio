function Projects(){
    return (
        <section id="projects" style={{padding:"20px"}}>
            <h2>My Projects</h2>

            <div className="project">
                <h3>Portfolio Website</h3>
                <p>This portfolio was built using React to showcase my work and skills.</p>
            </div>

             <div className="project">
                <h3>Todo App</h3>
                <p>A simple React todo app with add, edit and delete functionalities.</p>
            </div>

            <div className="project">
                <h3>Weather App</h3>
                <p>A weather forecast app using API integration.</p>
            </div>
            
        </section>
    );
}
export default Projects;