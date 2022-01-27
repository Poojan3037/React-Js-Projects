import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './InfoBox.css'

const InfoBox = (props) => {

    let { title, cases, total,caseType}=props

    return (
        <>
            <Card className={caseType==="cases" || caseType==="deaths"?'card-red':'card-green'} >
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                        {title}
                    </Typography>
            
                    <Typography className="h2">
                        {cases}+<span className="h2-time">in 10 minutes</span>
                    </Typography>
        
                    <Typography>
                        {total} total
                    </Typography>
                </CardContent>
            </Card>
        </>
    )
}

export default InfoBox;