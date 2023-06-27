import { Frame, Navigation } from '@shopify/polaris'
import React from 'react'
import { HomeMinor, SettingsMinor, ProductsMinor } from '@shopify/polaris-icons';
import { Outlet, useNavigate } from 'react-router-dom';

function Panel() {
    const navigate = useNavigate();

    let BodyRenderer: any = null;
    BodyRenderer = renderRoutes();
    function renderRoutes(): JSX.Element {
        return (
            <>
                <Outlet />
            </>
        );
    }
    return (
        <>
            {BodyRenderer}
            <Frame>
                <Navigation location="/">
                    <Navigation.Section
                        items={[
                            {
                                url: '/panel/dashboard',
                                label: 'Dashboard',
                                icon: HomeMinor,
                            },
                            {
                                url: '/panel/products',
                                label: 'Products',
                                icon: ProductsMinor,
                                badge: '15',
                                onClick() {
                                    navigate("products")
                                },
                            },
                            {
                                url: '/panel/settings',
                                label: 'Settings',
                                icon: SettingsMinor,
                            },
                        ]}
                    />
                </Navigation>
            </Frame>
        </>
    )
}

export default Panel
