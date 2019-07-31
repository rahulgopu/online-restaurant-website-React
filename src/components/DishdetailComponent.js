import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

class Dishdetail extends Component {
    constructor(props) {
        super(props);
    }

    renderDish(dish) {
		if (dish != null) {
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
		else {
			return(
				<div></div>
			);
		}
    }

    renderComments(comments) {
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

    render() {
        if(this.props.dish == null)
        {
            return(<div></div>)
        }
        return(
         <div className="container">
            <div className="row">
                {this.renderDish(this.props.dish)}
                {this.renderComments(this.props.dish.comments)}
            </div>
         </div>   
                  
        )
    }
}

export default Dishdetail;