import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import Timeline from "../src/components/Timeline";
import Banner from "../src/components/Banner";
import Header from "../src/components/Header";

const StyledHomePage = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`;

function HomePage() {
    const homepage_style = {
        display: "flex",
        flexDirection: "column",
        flex: 1,
    };

    return (
        <>
            <CSSReset />
            <div>
                <div style={homepage_style}>
                    <Menu />
                    <Banner />
                    <Header />
                    <Timeline playlists={config.playlists} />
                </div>
            </div>
        </>
    );
}

export default HomePage
