import React from 'react';
import './Projects.css';
import './Button.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Projects(){
	return(
		<div id="projects_section" className="projects-container">
			<div className="projects__section">
				<div className="container">
					<div className="row projects__wrapper">
						<div className="projects__heading"><h1>Projects</h1>
							<div>
								<Button
								 onClick={() => {console.log("redirect to Projects page")}}
								 type="button" buttonStyle="btn--primary--outline" 
								 buttonStyle="btn--medium">
									Our Dent
		                  		</Button>	
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Projects;