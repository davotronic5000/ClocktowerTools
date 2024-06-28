import { SVGAttributes } from "react";

export type iconTypes = keyof typeof icons;

const createIconConfig = ({
    viewBox = "0 0 24 24",
    d,
    clipPath = "evenodd",
    fillRule = "evenodd",
    fill = "currentColor",
    ...rest
}: {
    viewBox?: string;
    d: string;
    clipPath?: SVGAttributes<unknown>["clipPath"];
    fillRule?: SVGAttributes<unknown>["fillRule"];
    fill?: SVGAttributes<unknown>["fill"];
} & SVGAttributes<unknown>) => ({
    viewBox,
    d,
    clipPath,
    fillRule,
    fill,
    ...rest,
});

const icons = {
    clocktower: createIconConfig({
        viewBox: "0 0 512 512",
        d: "M365.9 383.7h-8.1l-8.6 8.7V495h16.7zm-211.7 0h-8.1V495h16.7V392.4zM202.1 495h-22.6v-92h153v92h-22.6v-52c0-7-5.6-13-12.5-13s-12.5 6-12.5 13v52h-16.4v-52c0-7-5.6-13-12.5-13s-12.5 6-12.5 13v52h-16.4v-52c0-7-5.6-13-12.5-13s-12.5 6-12.5 13zm-23.8-104.5h155.4l19.7-19.6h27.1v-16.7h-34l-19.7 19.7H185.2l-19.7-19.7h-34v16.7h27.1zm1.6-48.6h152.2l-15 15H194.9zm169.3-164.3v159.3h16.7V177.6zm-203.1 0v159.3h16.7V177.6zm185.7 0H180.2v151.5h151.6zm-5.8 75.8c0 38.6-31.4 69.9-70 69.9s-70-31.3-70-69.9c0-38.6 31.4-70 70-70s70 31.4 70 70zm-127.5 0c0 31.7 25.8 57.4 57.5 57.4s57.5-25.7 57.5-57.4-25.8-57.5-57.5-57.5-57.5 25.8-57.5 57.5zm21.9 22 38.8-35c-1.1-3-1.7-5.3-1.8-7.1-.3-2.5.1-4.3.9-5.6 1.3-2.1 3.8-3.2 7.1-3.7 6-.9 15.6-.2 23.4-8l4.6 4.6-.4.4c-7.4 7.7-6.7 17.1-7.7 23-.5 3.3-1.6 5.7-3.6 7-1.4.9-3.2 1.3-5.6 1-1.9-.2-4.2-.8-7.1-1.9l-35 38.8zm-75.6-113.5h222.4l16.6-16.6-11.8-11.8-11.7 11.7H151.7L140 133.5l-11.8 11.8zm94.6-145.7h33.2L343 128.6H169zm4.1 91.6h25V78.9c0-6.9-5.6-12.5-12.5-12.5s-12.5 5.6-12.5 12.5z",
        clipPath: "nonzero",
        fillRule: "nonzero",
    }),
    "death-book": createIconConfig({
        viewBox: "0 0 512 512",
        d: "M294.3 53.6l-81.2.24-79.5 70.56 18.3 70.5L201 187l-25.8 74.7 38.7-22.4 11 35.9 30.2-37.1 30.2 38.8 18.5-38.5 31.7 21.1-25.4-71.9 46.4 6.1 18.9-67.1c-27.1-24.3-54.1-48.7-81.1-73zm-88.8 61.2c13.3-.1 28.3 9 35.9 27l-61.9 9.3c-3.9-18.1 11-35.7 26-36.3zm104.5 0c15.1.1 28.1 12.1 26 36.3l-62-9.3c7.7-18 22.7-27.1 36-27zm-54.5 38.5l25.6 56.7h-47.9zM93.26 288.5L51.3 317.7l207.3 72.7L466 317.3l-41-28.8c-54.7 9.2-120.6-14.4-150.7 31.8h-31.4c-41-45.7-104.5-25.2-149.64-31.8zM29 329.8l-6.17 17.6 190.67 66.7v17.8h91.6v-18.7c62.3-21.8 125.5-43.9 188.1-65.8l-6.2-17.6-205.7 71.9 4.1 11.5h-54.8l4.1-11.5c-68.6-24-137.15-48-205.7-71.9z",
        clipPath: "nonzero",
        fillRule: "nonzero",
    }),
    "arrow-down-tray": createIconConfig({
        d: "M12 2.25a.75.75 0 01.75.75v11.69l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V3a.75.75 0 01.75-.75zm-9 13.5a.75.75 0 01.75.75v2.25a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V16.5a.75.75 0 011.5 0v2.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V16.5a.75.75 0 01.75-.75z",
    }),
    trash: createIconConfig({
        d: "M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z",
    }),
    "exclamation-triangle": createIconConfig({
        d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
    }),
    "check-circle": createIconConfig({
        d: "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z",
    }),
    "question-mark-circle": createIconConfig({
        d: "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 01-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 01-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 01-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584zM12 18a.75.75 0 100-1.5.75.75 0 000 1.5z",
    }),
    "x-mark": createIconConfig({
        d: "M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z",
    }),
    "bars-3": createIconConfig({
        d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5",
        fill: "none",
        strokeWidth: "1.5",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
    }),
    sparkles: createIconConfig({
        d: "M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z",
    }),
};

export default icons;
