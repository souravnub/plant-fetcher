import React from "react";

const PlantsContainer = ({ children }) => {
    return (
        <div className="mt-5 flex gap-3 flex-wrap p-3 justify-center">
            {children}
        </div>
    );
};

export default PlantsContainer;
