// app/(dashboard)/layout.tsx
import LateralSectionLayout from "@/app/components/LateralSectionLayout";// Ajuste o caminho se necessário
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <LateralSectionLayout>
            {children}
        </LateralSectionLayout>
    );
}