import { useRoutes } from "react-router-dom";
import { Suspense, lazy } from 'react';
const pathsApp = {
    HOME: 'home',
    AUTH: 'auth'
}
export const AppRouter = () => {
    const elements = useRoutes([
        {
            path: pathsApp.HOME,
            element: (
                <ProtectedRoute>
                    <Home />
                </ProtectedRoute>
            ),
            children: [
                {
                    path: 'explore',
                    element: (
                        <Suspense fallback={<ExploreSkeleton />}>
                            <Explore />
                        </Suspense>
                    )
                },
            ]
        },
        {
            path: pathsApp.AUTH,
            element: <Auth />
        },

    ])
    return elements
};