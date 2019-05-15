import React from 'react';
import './burgerIngrediant.css';

const burgerIngrediant = (props) => {

       let ingrediant = null;

       switch(props.type){
           case('bread-bottom'):
           ingrediant = <div className="BreadBottom"></div>;
           break;
           case('bread-top'):
           ingrediant = (
               <div className="BreadTop">
                      <div className="seeds1"></div>
                      <div className="seeds2"></div>
               </div>
           );
           break;
           case('meat'):
           ingrediant = <div className="Meat"></div>;
           break;
           case('cheese'):
           ingrediant = <div className="Cheese"></div>;
           break;
           case('salad'):
           ingrediant = <div className="Salad"></div>;
           break;
           case('bacon'):
           ingrediant = <div className="Bacon"></div>;
           break;
           default:
           ingrediant=null;
       }
       return ingrediant;

};

export default burgerIngrediant;