import React, { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { RootState } from 'StoreTypes';
import { BodySpinner } from '@Element/Spinners';

const DtlPage = lazy(() => import('./Dtls/ProductList'));

export default function SearchListPage() {
    const { storeRouterLocation } = useSelector((store: RootState) => ({
        storeRouterLocation: store.router.location,
    }));
    return (
        <HelmetProvider>
            <Helmet>
                <meta charSet="utf-8" />
                <title>:: {process.env.REACT_APP_TITLE} :: 리스트</title>
                <link rel="canonical" href={`${globalThis.location.origin}${storeRouterLocation}`} />
            </Helmet>
            <Suspense fallback={<BodySpinner />}>
                <DtlPage />
            </Suspense>
        </HelmetProvider>
    );
}
