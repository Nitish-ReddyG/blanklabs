import React from 'react';
import './title.css'

function Title_section(){
	return(
		<div className="title-container">
			<div className="title__section">
				<div className="container">
					<div className="row title__wrapper">
						<div className="logo__animation">
							<iframe src='https://my.spline.design/blanklabslogo-619af0470a1bbe255cd6a2b669131197/' frameborder='0'
							width='100%' height='100%'></iframe>
						</div>
						<div className="title__heading">
							<p>
							An incubator and an accelerator of
							<span className="business"> business </span>
							change and creativity
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Title_section;