import React, { useState } from "react";
import Inf_Jnf_Card from "./Inf_Jnf_Card";

function CardContainer() {
  return (
    <>
      <div className='container mx-auto' style={{ maxWidth: 1000 }}>

        <div className="container mx-auto d-flex flex-wrap justify-content-center">

          <Inf_Jnf_Card type="INF" name="Amazon" profile="Software Development" desc="A very good description here very nice detailed long description" />
          <Inf_Jnf_Card type="INF" name="Amazon" profile="Software Development" desc="A very good description here very nice detailed long description" />
          <Inf_Jnf_Card type="INF" name="Amazon" profile="Software Development" desc="A very good description here very nice detailed long description" />
          <Inf_Jnf_Card type="INF" name="Amazon" profile="Software Development" desc="A very good description here very nice detailed long description" />

        </div>
      </div>
    </>
  );
}
export default CardContainer;
