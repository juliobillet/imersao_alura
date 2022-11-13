import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import Timeline from "../src/components/Timeline";
import Banner from "../src/components/Banner";
import Header from "../src/components/Header";
import Favorites from "../src/components/Favorites";

const StyledHomePage = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`;

function HomePage() {

    return (
        <>
            <CSSReset />
            <div>
                <StyledHomePage>
                    <Menu />
                    <Banner banner={config.banner} />
                    <Header />
                    <Timeline playlists={config.playlists} />
                    <Favorites favorites={config.favorites} />
                </StyledHomePage>
            </div>
        </>
    );
}

export default HomePage
