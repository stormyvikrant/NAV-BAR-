 import './category.css'
function Category({image,lable}){

return <div className="category">
<img src={image} alt=""/>
<b>{lable}</b>
</div> 
}


export {Category};