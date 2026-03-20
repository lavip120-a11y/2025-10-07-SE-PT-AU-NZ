import styles from "../page.module.css";

 export default function PageLayout({ children }) {
    // Supports nested structures via the children prop
    return (
        <>
        <div>
        <h1>About page layout</h1>
            {children}
            </div>
        </>
    );
}