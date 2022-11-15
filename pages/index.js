import { useState } from "react";
import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import Timeline from "../src/components/Timeline";
import Banner from "../src/components/Banner";
import Header from "../src/components/Header";
import Favorites from "../src/components/Favorites";
import AluraTubes from "../src/components/AluraTubes";

const StyledHomePage = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`;

function HomePage() {
    const [filter_value, set_filter_value] = useState("");

    return (
        <>
            <CSSReset />
            <div>
                <StyledHomePage>
                    {/* Prop Drilling */}
                    <Menu filter_value={filter_value} set_filter_value={set_filter_value} />
                    <Banner />
                    <Header />
                    <Timeline filter_value={filter_value} playlists={config.playlists} />
                    <Favorites favorites={config.favorites} />
                    <AluraTubes aluratubes={config.aluratubes} />
                </StyledHomePage>
            </div>
        </>
    );
}

export default HomePage
