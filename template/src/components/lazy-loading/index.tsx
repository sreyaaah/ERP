import React, { type ReactNode, Suspense } from "react";

export const LazyWrapper: React.FC<{ children: ReactNode }> = ({
  children,
}) => <Suspense>{children}</Suspense>;
