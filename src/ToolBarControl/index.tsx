import React, { useImperativeHandle } from 'react';
import { OverlayProps } from '../common/map';
import { useToolBarControl } from './useToolBarControl';

export interface ToolBarControlProps extends OverlayProps, AMap.ToolBarOptions {}

export const ToolBarControl = React.forwardRef<ToolBarControlProps, ToolBarControlProps>((props, ref) => {
  const { toolBarControl } = useToolBarControl(props);
  useImperativeHandle(ref, () => ({ ...props, toolBarControl }), [toolBarControl]);
  return null;
});
