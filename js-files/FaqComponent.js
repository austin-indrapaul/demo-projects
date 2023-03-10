const data = [
    {   id:1, heading: "Spring boot - Rest Api project", 
        description:"This project demonstartes the Rest Api service using spring boot" ,
        img_path: "./resources/images/3.jpg",
        keypoints: ["A student services was created", 
                    "The services provides CRUD operations for the student entity",
                    "Student entity has a one to one relationship with address entity and one to nany relationship with course entity",
                    "User can modify other entities using student service which has unidirectional mapping"
                ],
        link:"https://github.com/austin-indrapaul/simple-spring-projects.git",
        branch:"main"
    },
    {   id:2, heading: "Spring security - Rest Api project", 
        description:"This project demonstartes security over Rest Api service using spring boot security" ,
        img_path: "./resources/images/4.jpg",
        keypoints: ["This project is extension of previous one with spring security added."],
        link:"https://github.com/austin-indrapaul/simple-spring-projects/tree/spring-security-basic",
        branch:"spring-security-basic"
    },
    {   id:3, heading: "Spring security with JWT - Rest Api project", 
        description:"This project demonstartes security over Rest Api service using spring boot security with JWT" ,
        img_path: "./resources/images/5.jpg",
        keypoints: ["This project is extension of previous one with spring security added."],
        link:"https://github.com/austin-indrapaul/simple-spring-projects/tree/spring-security-jwt",
        branch:"spring-security-jwt"
    },
    {   id:4, heading: "Spring boot - microservices project", 
        description:"This project demonstartes the microservice architecture using spring boot" ,
        img_path: "./resources/images/1.jpg",
        keypoints: ["Two services were created: user service and deparetment service", 
                    "Both the services run at different ports",
                    "User service handles requests related to user details",
                    "Department service handles requests related to department details",
                    "User has to connect to respective server to get the details",
                    "User service and Department service has a channel to connect to get the department details of a user"
                ],
        link:"https://github.com/austin-indrapaul/Microservices-project.git",
        branch:"basic"
    },
    {   id:5, heading: "Spring boot - microservices project with API gateway",
        description:"This project is extention of previous one which includes a gateway to microservices" ,
        img_path: "./resources/images/2.jpg",
        keypoints: ["Two services were created: user service and deparetment service", 
                    "Both the services run at different ports",
                    "User service handles requests related to user details",
                    "Department service handles requests related to department details",
                    "User has to connect to api gateway from there the requests will be transferred to respective server to get the details",
                    "User service and Department service has a channel to connect to get the department details of a user"
                ],
        link:"https://github.com/austin-indrapaul/Microservices-project.git",
        branch:"api-gateway"
    },
  ];

function Faq(props){
    const description = props.description
    return(
        <div className="accordion-item">
            <h2 className="accordion-header" id={"heading"+props.id}>
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#collapse"+props.id} aria-expanded="false" aria-controls={"collapse"+props.id}>
                {props.id}. {props.heading}
                </button>
            </h2>
            <div id={"collapse"+props.id}  className="accordion-collapse collapse" aria-labelledby={"heading"+props.id} data-bs-parent="#faq-accordion">
                <div className="accordion-body m-2">
                    <img src={props.img_path} className="mrounded mx-auto d-block demo-img"/>
                    <br/>
                    {props.description}
                    <br/><br/>
                    <ul>{
                        props.keypoints.map((pt) =>
                            <li>{pt}</li>
                        )
                    }</ul>
                    <br/><br/>
                    <div className="text-center">
                        <h6 className="strong">Find the source code of this project under '<em>{props.branch}</em>' branch - <a target="_blank" href={props.link}>View code</a></h6>
                    </div>
                  </div>
            </div>
        </div>
    );
}

function FaqComponent(){
    return(
        <div>
            <h1 className="mb-4 text-center">Demo Projects</h1>
            <div className="accordion" id="faq-accordion">
                {data.map(item => (
                    <Faq key={item.id} 
                    id={item.id} 
                    heading={item.heading}
                     description={item.description} 
                     keypoints={item.keypoints}
                     img_path = {item.img_path}
                     link = {item.link}
                     branch = {item.branch}
                     />
                ))}
            </div>
        </div>
    );
}


ReactDOM.render(<FaqComponent />, document.getElementById("faq-section"));