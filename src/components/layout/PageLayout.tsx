import styled from 'styled-components';

import { desktop } from 'constants/media';

const PageLayout = styled.div`
    display: grid;

    grid-template-areas: "header" "nav" "main" "footer";
    grid-template-rows: auto auto 1fr auto;
    height: 100%;

    ${desktop`
        grid-template-areas: "header header" "nav main" "footer footer";
        grid-template-rows: auto 1fr auto;
        grid-template-columns: 25% 1fr;
    `}
`;

export default PageLayout;

export const Header = styled.header`
    grid-area: header;
`;

export const Nav = styled.nav`
    grid-area: nav
`;

export const Main = styled.main`
    grid-area: main;
`;

export const Footer = styled.footer`
    grid-area: footer;
`;
