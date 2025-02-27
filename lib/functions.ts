import React from "react";
import { ReactElement, ComponentType } from "react";

export const renderSkeletons = (count: number, Component: ComponentType): ReactElement[] => {
  return Array(count)
    .fill(0)
    .map((_, index) => React.createElement(Component, { key: index }));
};