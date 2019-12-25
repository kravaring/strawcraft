import React, { useState } from 'react';
import { Locales } from '../../locales';
import { i18n } from 'i18next';
import { useTranslation } from 'react-i18next';

interface LocaleOption {
    value: Locales;
    label: string;
}

const options: Array<LocaleOption> = [{
        value: 'en',
        label: 'English'
    },{
        value: 'by',
        label: 'Беларуская'
    },{
        value: 'ru',
        label: 'Русский'
    }
];

export const Locale = () => {
    const { i18n } = useTranslation();
    const [lang, selectLang] = useState<Locales>('en');

    const changeLang = (event: React.FormEvent<HTMLSelectElement>): void => {
        const lang = event.currentTarget.value as Locales;
        i18n.changeLanguage(lang);
        selectLang(lang);
    };

    return (
        <select value={lang} onChange={changeLang}>
            {options.map((o, i) => <option key={i} value={o.value}>{o.label}</option>)}
        </select>
    ); 
};
