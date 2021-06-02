import React, { useContext } from 'react';
import { Doughnut } from 'react-chartjs-2';



const IncomeChart = (props) => {

    let {moneyType}=props;

    let type;
    if(moneyType.length>0){

        type=moneyType[0].type;
    }

    

    let label=[];
    let data=[];
    let color=[];
    if(type==="expense"){
        color=['#ff8080','#ff6666','#ff4d4d','#ff3333','#ff1919','#ff0000','#e60000','#cc0000','#b30000','#990000','#800000','#660000','#4d0000','#330000','#190000']
    }else{
        color=['#99cc99','#80c080','#66b366','#4da64d','#339933','#198d19','#008000','#007300','#006600','#005a00','#004d00','#004000','#003300','#002600','#001a00']
    }

    moneyType.map((item)=>{
        label.push(item.category);
        data.push(item.amount)
    })

    

    return (
        <>
            <Doughnut
                data={
                    {
                        labels: label,
                        datasets: [{
                            label: 'My First Dataset',
                            data:data,
                            backgroundColor: color,
                            hoverOffset: 4
                        }]
                    }
                }
            >

            </Doughnut>
        </>
    )
}

export default IncomeChart;