import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

    function RenderDish({dish}) {
		return(
            <div className="col-12 col-md-5 m-1">
				<Card>
					<CardImg width="100%" src={dish.image} alt={dish.name} />
					<CardBody>
						<CardTitle>{dish.name}</CardTitle>
						<CardText>{dish.description}</CardText>
					</CardBody>	
				</Card>
            </div>                   
		);
    }

    function RenderComments({comments}) {
        
        if (comments == null) 
        { 
            return <div></div>   
        }

        let options = { year: "numeric", month: "short", day: "2-digit" };
        const cmnts = comments.map (comment => {
            return (
                        <p key={comment.id} className="list-unstyled">
                            <p className="mb-2">{comment.comment}</p>
                            <p className="mb-2">
                                -- {comment.author} , 
                                {new Date(comment.date).toLocaleDateString("en-US", options)}
                            </p>
                        </p>
                    )
            });
            
        return (
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {cmnts}
                </ul>
            </div>
        )
    }

    const Dishdetail = (props) => {
        
        if(props.dish == null)
        {
            return(<div></div>)
        }
        return(
         <div className="container">
            <div className="row">
                <RenderDish dish={props.dish} />
                <RenderComments comments={props.dish.comments} />
            </div>
         </div>   
                  
        )
    }
export default Dishdetail;