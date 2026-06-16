export const BacckButton = ({ onNavigate }) => {
    const handleNavigationClick = (page) => {
        onNavigate(page);
    };

    return (
        <button onClick={() => handleNavigationClick("dashboard")}>
            Back
        </button>
    );
};