"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProjetsEnCoursPage() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/projets-en-cours/residence-radhia-4");
  }, [router]);
  return null;
}