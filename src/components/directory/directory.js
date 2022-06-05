import "./directory.styles.scss";

import CategoryItem from "../Category-item"
const Directory = ({categories}) => {
    return (
        <div className="directory-container">
        {categories.map((category) => {
          return (
            <CategoryItem key={category.id}  category={category}/>
  
          )
  
        })}
       
      </div>
    )
}

export default Directory