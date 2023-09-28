import React from "react";
interface IPROPS{
    name:string
    age?:number//optional
}
const Custom: React.FC<IPROPS> = ({name}) => {
   
    return (
        <div>
            <h1>hii</h1>
            <h3>name:{name}</h3>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Commodi repellat enim quisquam recusandae reprehenderit?
                Deserunt hic possimus perferendis necessitatibus pariatur.
            </p>
        </div>
    )
}
export default Custom