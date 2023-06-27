import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter as Router } from 'react-router-dom';

export const AppProvider = ({ children }: AppProviderProps) => {
    return (
        <React.Suspense
            fallback={
                <div className="flex items-center justify-center w-screen h-screen">
                    This is a spinner
                </div>
            }
        >
            <TestProvider props={{
                logged: true
            }}>
                <ErrorBoundary FallbackComponent={() => <p>loading</p>}>
                    {/* <QueryClientProvider client={queryClient}> */}
                    {/* <Notifications /> */}
                    {/* <AuthProvider> */}
                    <Router>{children}</Router>
                    {/* </AuthProvider> */}
                    {/* </QueryClientProvider> */}
                </ErrorBoundary>
            </TestProvider>
        </React.Suspense>
    );
};

type AppProviderProps = {
    children: React.ReactNode;
    props?: any
};


export function TestProvider(props: AppProviderProps) {
    console.log(props, 'asdfasdfasf')
    return <>
        {props?.children}
    </>
}