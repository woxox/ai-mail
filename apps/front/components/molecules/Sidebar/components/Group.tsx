import React, { useMemo, useState } from "react";
import {
  SidebarGroupContextProvider,
  useSidebarGroupContext,
} from "../context/sidebarGroup";
import { useSidebarContext } from "../context/sidebar";
import clsx from "clsx";
import {
  sidebarBaseStyle,
  sidebarGroupContainerStyle,
  sidebarGroupLabelIconStyle,
  sidebarGroupLabelStyle,
} from "../sidebar.css";
import { HiChevronDown } from "react-icons/hi";

interface GroupProps extends React.HTMLAttributes<HTMLDivElement> {
  groupPath: string;
  label: React.ReactNode;
}

export const Group: React.FC<GroupProps> = ({
  groupPath,
  label,
  className,
  children,
}) => {
  const { activePath } = useSidebarContext();
  const { depth } = useSidebarGroupContext();
  const [open, setOpen] = useState(activePath?.startsWith(groupPath) ?? false);

  return (
    <SidebarGroupContextProvider depth={depth + 1}>
      <div className={clsx(sidebarGroupContainerStyle, className)}>
        <div
          className={clsx(sidebarBaseStyle, sidebarGroupLabelStyle)}
          data-open={open}
          data-depth={depth + 1}
          onClick={() => setOpen((o) => !o)}
        >
          {label}
          <HiChevronDown
            data-open={open}
            className={sidebarGroupLabelIconStyle}
          />
        </div>
        {open && children}
      </div>
    </SidebarGroupContextProvider>
  );
};
