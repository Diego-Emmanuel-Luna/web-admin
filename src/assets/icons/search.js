import { SvgIcon } from "@mui/material"

const SearchIcon = (props) => {
    return (
        <SvgIcon {...props}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M13.3337 12.166L17.0837 15.916C17.417 16.2493 17.417 16.7493 17.0837 17.0827C16.917 17.2493 16.667 17.3327 16.5003 17.3327C16.3337 17.3327 16.0837 17.2493 15.917 17.0827L12.167 13.3327C10.917 14.2493 9.41699 14.8327 7.75033 14.8327C3.83366 14.8327 0.666992 11.666 0.666992 7.74935C0.666992 3.83268 3.83366 0.666016 7.75033 0.666016C11.667 0.666016 14.8337 3.83268 14.8337 7.74935C14.8337 9.41602 14.2503 10.9993 13.3337 12.166ZM7.75033 2.33268C4.75033 2.33268 2.33366 4.74935 2.33366 7.74935C2.33366 10.7493 4.75033 13.166 7.75033 13.166C9.25033 13.166 10.5837 12.5827 11.5837 11.5827C12.5837 10.5827 13.167 9.24935 13.167 7.74935C13.167 4.74935 10.7503 2.33268 7.75033 2.33268Z" fill="white" />
            </svg>
        </SvgIcon>
    )
}

const SearchIconInput = (props) => {
    return (
        <SvgIcon {...props}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.32">
                    <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#323232" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M21.0004 21.0004L16.6504 16.6504" stroke="#323232" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </g>
            </svg>
        </SvgIcon>

    )
}



export {SearchIcon,SearchIconInput}
