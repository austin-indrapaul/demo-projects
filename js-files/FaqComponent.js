const data = [
    {   id:1, heading: "Spring boot - microservices project", 
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
    {   id:2, heading: "Spring boot - microservices project with API gateway",
        description:"No. Nif 5G service is available in your area." ,
        img_path: "./resources/images/1.jpg",
        keypoints: ["a", "b", "c", "d"],
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