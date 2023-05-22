import React from "react";
import ActionAreaCard from "../components/ActionAreaCard";
import FlowDiag from "../components/FlowDiag";
import { Typography } from "@mui/material";
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
        A Journey Into Decomposing Monoliths
      </Typography>
      <ActionAreaCard
        text="Use decomposition patterns to break down monolithic applications into microservices."
        title="Decompose Monoliths"
      />
      <ActionAreaCard
        text="Integrate the newly created microservices into a microservices architecture by using AWS serverless services"
        title="Integrate Microservices"
      />
      <ActionAreaCard
        text="Promote polyglot persistence among your microservices by decentralizing data stores."
        title="Ensure Data Persistence"
      />
      <ActionAreaCard
        text="Decompose by business capability or subdomain or transactions"
        title="Decomposition Strategies"
      />
      <ActionAreaCard
        text="Service per team/Strangler Fig/Branch By Abstraction patterns can be used in tandem"
        title="Patterns"
      />
      <ActionAreaCard
        text="Additional Stuff Goes Here Additional Stuff Goes Here Additional Stuff Goes Here"
        title="Use the cloud"
      />
      <FlowDiag />
    </div>
  );
}

export default Home;
