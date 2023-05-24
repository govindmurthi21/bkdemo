import "./flowdiag.css";
import bkdemoflowdiag from '../images/bkdemoflowdiag.png';
import { Paper } from "@mui/material";

export default function FlowDiag() {
  return (
    <Paper>
        <div className="flow-diag">
        <img src={bkdemoflowdiag} alt="BK DEMO FLOW" width={"100%"}/>
        </div>
    </Paper>
  );
}
