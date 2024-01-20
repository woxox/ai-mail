import { MouseEventHandler, useCallback } from "react";
import { useSidebarContext } from "../context/sidebar";
import { useSidebarGroupContext } from "../context/sidebarGroup";
import clsx from "clsx";
import { sidebarItemStyle, sidebarBaseStyle } from "../sidebar.css";

interface ItemProps extends React.HTMLAttributes<HTMLDivElement> {
  path: string;
}

export const Item: React.FC<ItemProps> = ({
  path,
  className,
  children,
  ...rest
}) => {
  const { depth } = useSidebarGroupContext();
  const { activePath, handleClickItem } = useSidebarContext();

  const handleClick = useCallback<MouseEventHandler<HTMLDivElement>>((e) => {
    e.stopPropagation();
    e.preventDefault();
    handleClickItem(path);
  }, []);

  return (
    <div
      onClick={handleClick}
      className={clsx(sidebarBaseStyle, sidebarItemStyle, className)}
      data-depth={depth + 1}
      data-active={activePath === path}
      {...rest}
    >
      {children}
    </div>
  );
};
