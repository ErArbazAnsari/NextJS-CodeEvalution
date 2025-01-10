"use client"

import "./globals.css"

export default function GlobalError() {
    return (
        <html>
            <body>

                <div>
                    <h2>Something went wrong</h2>
                    <button onClick={() => {
                        window.location.reload();
                    }}>
                        refresh
                    </button>
                </div>
            </body>
        </html>
    );
}