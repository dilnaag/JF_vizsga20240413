import React from "react";
import { Card,CardBody,CardTitle,CardSubtitle,CardText,Button,} from "reactstrap";

export const Supply = ({id,imageUrl,title,createAt,rooms,area,sellerName,}) => {
  
    console.log(title);
  
    return (
    <div>
      <Card style={{ width: "18rem", height:'100%' }}>
        <img alt={title} src={imageUrl} />
        <CardBody style={{display:'flex',flexDirection:'column', justifyContent:'space-between'}}>
          <CardTitle tag="h5">{title}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            A hírdetés feladása {createAt}
          </CardSubtitle>
          <CardText>Szobák száma: {rooms}</CardText>
          <CardText>Alapterület: {area}</CardText>
          <Button style={{backgroundColor:'lightblue'}}>{sellerName}</Button>
        </CardBody>
      </Card>
    </div>
  );
};