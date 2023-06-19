import "./flowdiag.css";
import { Paper, Typography } from "@mui/material";

export default function FlowDiag({img, title}) {
  return (
    <>
      <Paper>
        <div className="flow-diag">
        <Typography style={{width:"100%", alignSelf: "center", color: "#fff"}} variant="h4" component="div">
        {title}
      </Typography>
        <img src={img} alt="BK DEMO FLOW" width={"100%"}/>
        </div>
    </Paper>
    </>
  );
}
