import './news.css';

function News(props){
    return(
        <div className={props.cName}>
        
          <img src={props.newsImg} alt="" srcset="" />
          <div className="text">
            <h1 className={props.cName1}>{props.title}</h1>
          <p className={props.cName2}>{props.text}</p>
          </div>
          
        </div>
       
    )
}

export default News;