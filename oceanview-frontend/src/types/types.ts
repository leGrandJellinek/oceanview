
export type ILang = {
    [key:string]: {
        nav: {
            main: string[];
            toursdropdwn: Links[];
            adress: string;
            sectionsdropdwn: Links[];
        };
    };
};


type Links = {
    text: string;
    link: string;
};
