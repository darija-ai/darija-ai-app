
import React from "react";
import { AnnotationTasksTable } from "../components/annotation-tasks-table";

export const AnnotationTasksPage: React.FC = () => {
    return (
        <div className="h-screen flex flex-col">
            <div className="container mx-auto p-6 flex-1 flex flex-col">
                <div className="mb-6">
                    <h1 className="text-3xl font-bold tracking-tight">Annotation Tasks</h1>
                    <p className="text-muted-foreground">
                        Manage and complete your annotation assignments
                    </p>
                </div>
                <div className="flex-1 overflow-auto">
                    <AnnotationTasksTable />
                </div>
            </div>
        </div>
    );
};