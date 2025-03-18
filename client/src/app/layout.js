import "./globals.css";
import '@ant-design/v5-patch-for-react-19';
import AppProvider from "@/lib/common/provider";
import NavigationBar from "@/features/navigation-bar/NavigationBar";

export const metadata = {
    title: "CIMS",
    description: "Designed by Nguyen Trung Long",
    keywords: ["portfolio", "developer", "Nguyen Trung Long", "Long Nguyen"],
    authors: [{
        name: "Nguyen Trung Long",
        // url: "https://porfolio-nguyentrunglong.com",
    }],
    // ...
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className='antialiased'>
                <AppProvider>
                    <NavigationBar/>
                    { children }
                </AppProvider>
            </body>
        </html>
    );
}
