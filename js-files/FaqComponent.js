const data = [
    {   id:1, question: "Spring boot - microservices project", 
        answer:"sdbvsdbsbrsd" ,
        img_path: "./resources/images/1.jpg",
        keypoints: ["a", "b", "c", "d"]
    },
    {   id:2, question: "Spring boot -microservices project with API gateway",
        answer:"No. Nif 5G service is available in your area." ,
        img_path: "./resources/images/1.jpg",
        keypoints: ["a", "b", "c", "d"]
    },
  ];

function Faq(props){
    const answer = props.answer
    return(
        <div className="accordion-item">
            <h2 className="accordion-header" id={"heading"+props.id}>
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#collapse"+props.id} aria-expanded="false" aria-controls={"collapse"+props.id}>
                {props.question}
                </button>
            </h2>
            <div id={"collapse"+props.id}  className="accordion-collapse collapse" aria-labelledby={"heading"+props.id} data-bs-parent="#faq-accordion">
                <div className="accordion-body m-2">
                    <img src={props.img_path} className="mrounded mx-auto d-block demo-img"/>
                    <br/>
                    {props.answer}
                    <br/><br/>
                    <ul>{
                        props.keypoints.map((pt) =>
                            <li>{pt}</li>
                        )
                    }</ul>
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
                    question={item.question}
                     answer={item.answer} 
                     keypoints={item.keypoints}
                     img_path = {item.img_path}
                     />
                ))}
            </div>
        </div>
    );
}


ReactDOM.render(<FaqComponent />, document.getElementById("faq-section"));