"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { record } from "../lib/visitor";

/**
 * Records first touch and the page trail for this visit, so the contact
 * form can say where a lead came from. Mounted once in app/layout.js.
 * Renders nothing. Runs again on every route change.
 */
export default function Attribution() {
  const pathname = usePathname();
  useEffect(() => {
    record();
  }, [pathname]);
  return null;
}
