import React, { useState } from "react";

import Tooltip from "@material-ui/core/Tooltip";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Error from "@material-ui/icons/Error";

interface Props {
  title: React.ReactNode;
  color?: string;
}

const GenericToolTip: React.FC<Props> = ({ title, color }) => {
  const [state, setState] = useState({ open: false });
  return (
    <ClickAwayListener onClickAway={() => setState({ ...state, open: false })}>
      <div>
        <Tooltip
          PopperProps={{
            disablePortal: true,
          }}
          onClose={() => setState({ ...state, open: false })}
          open={state.open}
          disableFocusListener
          disableHoverListener
          disableTouchListener
          title={title}
        >
          <Error
            style={{ cursor: "pointer", color }}
            onClick={() => setState({ ...state, open: true })}
          >
            Click
          </Error>
        </Tooltip>
      </div>
    </ClickAwayListener>
  );
};

export default GenericToolTip;
