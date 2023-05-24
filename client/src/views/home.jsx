import React from "react";
import ActionAreaCard from "../components/ActionAreaCard";
import FlowDiag from "../components/FlowDiag";
import { Typography } from "@mui/material";
import busicapa from '../images/busicapa.jpeg';
import failfast from '../images/failfast.jpeg';
import mtomicro from '../images/mtomicro.png';
import poc from '../images/poc.png';
import awsserv from '../images/awsserv.jpeg';
import decomp from '../images/decomp.png';
import distdbs from '../images/distdbs.png';
import microser from '../images/microser.png';
import mtomicro2 from '../images/mtomicro2.jpeg';

import "./home.css";

function Home() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/macroapi")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="home">
      <Typography style={{width:"100%", color: "rgb(4 26 74)"}} variant="h4" component="div">
        An Approach To Decomposing Monoliths
      </Typography>
      <ActionAreaCard
        text="What is fail fast? Fail fast is the principle of freely experimenting and learning while trying to reach the desired result. By quickly finding the failures, you can catapult learning and optimize solutions instantly to reach your goal. The concept of fail fast is strongly connected to the Agile methodology."
        title="Fail Fast"
        diag={failfast}
      />
      <ActionAreaCard
        text="Understanding business capabilties of the monolith is key to solving for the problem of decomposition. Once capabilities are understood they should be prioritized by value."
        title="Understand Business Capabilities"
        diag={busicapa}
      />
      <ActionAreaCard
        text="Conduct proof of concepts, also known as proof of principle, to demonstrate feasibility, or to demonstrate in principle with the aim of verifying the concept or theory has practical potential."
        title="Proof Of Concepts"
        diag={poc}
      />
      <ActionAreaCard
        text="Use decomposition patterns to break down monolithic applications into microservices."
        title="Decompose Monoliths"
        diag={mtomicro}
      />
      <ActionAreaCard
        text="Integrate the newly created microservices into a microservices architecture by using AWS serverless services"
        title="Integrate Microservices"
        diag={microser}
      />
      <ActionAreaCard
        text="Promote polyglot persistence among your microservices by decentralizing data stores."
        title="Ensure Data Persistence"
        diag={distdbs}
      />
      <ActionAreaCard
        text="Decompose by business capability or subdomain or transactions"
        title="Decomposition Strategies"
        diag={decomp}
      />
      <ActionAreaCard
        text="Service per team/Strangler Fig/Branch By Abstraction patterns can be used in tandem"
        title="Patterns"
        diag={mtomicro2}
      />
      <ActionAreaCard
        text="Easy to use; Cost Effective; Flexible; Reliablel; Scalable; Performant; Secure; Lots of options to explore."
        title="AWS Most Things"
        diag={awsserv}
      />
      <Typography style={{width:"100%", color: "rgb(4 26 74)"}} variant="h4" component="div">
        Hypothetical Monolith Decomposed - A Demostration
      </Typography>
      <FlowDiag />
    </div>
  );
}

export default Home;
