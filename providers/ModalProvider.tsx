"use client";

import AuthModal from "@/components/AuthModal";

import { useEffect, useState } from "react";

const ModalProvider = () => {
  const [IsMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!IsMounted) return null;

  return (
    <>
      <AuthModal />
    </>
  );
};

export default ModalProvider;
