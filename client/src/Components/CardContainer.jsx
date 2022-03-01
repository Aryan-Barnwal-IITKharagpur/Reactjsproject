import React, { useState, useEffect } from "react";
import Inf_Jnf_Card from "./Inf_Jnf_Card";
import axios from "axios";

function CardContainer() {
  const [data, setData] = useState([]);
  const company_user_id="bdsjchjue3wc7494";
  useEffect(() => {
    const fetchData = async () =>{
      const result = await axios.post("http://localhost:3000/form/getSome", {company_user_id});
      console.log(result.data)
      setData(result.data);
    };

    fetchData();
  }, []);
  return (
    <>
      <div className='container mx-auto' style={{ maxWidth: 1000 }}>

        <div className="container mx-auto d-flex flex-wrap justify-content-center">
          {data.map((data)=>{
            return(
              <Inf_Jnf_Card type={data.type} name={data.company_overview.name} profile={data.job_detail.designation} desc={data.job_detail.description} data={data}/>
            )

          })}

          
          {/* <Inf_Jnf_Card type="INF" name="Amazon" profile="Software Development" desc="A very good description here very nice detailed long description" />
          <Inf_Jnf_Card type="INF" name="Amazon" profile="Software Development" desc="A very good description here very nice detailed long description" />
          <Inf_Jnf_Card type="INF" name="Amazon" profile="Software Development" desc="A very good description here very nice detailed long description" /> */}

        </div>
      </div>
    </>
  );
}
export default CardContainer;
