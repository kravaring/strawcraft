import React from 'react';
import { useTranslation } from 'react-i18next';


export const Layout = () => {
    const { t } = useTranslation();
    return (
        <div>
            {t('Welcome')}
        </div>
    );
};
