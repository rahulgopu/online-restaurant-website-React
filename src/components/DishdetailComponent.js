import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

    function RenderDish({dish}) {
		return(
            <div className="col-12 col-md-5 m-1 mt-4">
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
        
        if (comments != null) 
        { 
            let options = { year: "numeric", month: "short", day: "2-digit" };
            const cmnts = comments.map (comment => {
                return (
                            <li key={comment.id}>
                                <p>{comment.comment}</p>
                                <p>
                                    -- {comment.author} , 
                                    {new Date(comment.date).toLocaleDateString("en-US", options)}
                                </p>
                            </li>
                        )
                });
                
            return (
                <div className="col-12 col-md-5 m-1 mt-4">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {cmnts}
                    </ul>
                </div>
            );    
        }

        else 
            return(
                <div></div>
            );
        
    }

    const Dishdetail = (props) => {
        
        if(props.dish == null)
        {
            return(<div></div>)
        }
        else
        {
        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>
                            {props.dish.name}
                        </h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <RenderDish dish={props.dish} />
                    <RenderComments comments={props.comments} />
                </div>
            </div>             
            )
        }
    }

export default Dishdetail;